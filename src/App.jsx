import { startTransition, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { BatteryFull, Globe, MoonStar, Power, SunMedium, Wifi } from 'lucide-react';
import resumeFile from './assets/MarcosRaachCV.pdf';
import AppIcon from './components/AppIcon';
import FinderWindow from './components/FinderWindow';
import SafariWindow from './components/SafariWindow';
import {
  documentPageId,
  getPageById,
  portfolioProjects,
  profile,
  profilePageId,
  projectPageId,
  safariHomePage,
  supportDocuments,
  systemAppIcons,
} from './data/portfolio';
import {
  getLocalePack,
  localizeDocument,
  localizeProfile,
  localizeProject,
  toggleLocale,
  toggleTheme,
} from './utils/localization';

function normalizeText(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function hexToRgb(value) {
  const normalized = value.replace('#', '').trim();
  const hex =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => `${char}${char}`)
          .join('')
      : normalized;
  const parsed = Number.parseInt(hex, 16);

  if (Number.isNaN(parsed)) {
    return { r: 0, g: 0, b: 0 };
  }

  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255,
  };
}

function withAlpha(value, alpha) {
  const { r, g, b } = hexToRgb(value);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function mixHex(colorA, colorB, weight = 0.5) {
  const start = hexToRgb(colorA);
  const end = hexToRgb(colorB);
  const ratio = Math.max(0, Math.min(1, weight));
  const mixChannel = (from, to) => Math.round(from * (1 - ratio) + to * ratio);
  const toHex = (channel) => channel.toString(16).padStart(2, '0');

  return `#${toHex(mixChannel(start.r, end.r))}${toHex(mixChannel(start.g, end.g))}${toHex(mixChannel(start.b, end.b))}`;
}

function rgbToHex({ r, g, b }) {
  const toHex = (channel) => Math.max(0, Math.min(255, Math.round(channel))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function rgbToHsl({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  const lightness = (max + min) / 2;

  if (delta === 0) {
    return { h: 0, s: 0, l: lightness };
  }

  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue = 0;

  if (max === red) {
    hue = (green - blue) / delta + (green < blue ? 6 : 0);
  } else if (max === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }

  return {
    h: hue / 6,
    s: saturation,
    l: lightness,
  };
}

function fallbackProjectPalette(project) {
  return {
    base: mixHex(project.theme.heroFrom, project.theme.heroTo, 0.4),
    accent: project.theme.accentStrong,
    soft: project.theme.accentSoft,
  };
}

const projectPaletteCache = new Map();

function extractPaletteFromImageData(imageData, fallbackPalette) {
  let weightedRed = 0;
  let weightedGreen = 0;
  let weightedBlue = 0;
  let totalWeight = 0;
  let deepCandidate = fallbackPalette.base;
  let deepScore = -Infinity;
  let vibrantCandidate = fallbackPalette.accent;
  let vibrantScore = -Infinity;
  let softCandidate = fallbackPalette.soft;
  let softScore = -Infinity;

  for (let index = 0; index < imageData.length; index += 16) {
    const alpha = imageData[index + 3] / 255;

    if (alpha < 0.95) {
      continue;
    }

    const rgb = {
      r: imageData[index],
      g: imageData[index + 1],
      b: imageData[index + 2],
    };
    const { s, l } = rgbToHsl(rgb);
    const weight = alpha * (0.35 + s * 0.95) * (0.6 + (1 - Math.abs(l - 0.48)));

    weightedRed += rgb.r * weight;
    weightedGreen += rgb.g * weight;
    weightedBlue += rgb.b * weight;
    totalWeight += weight;

    const deepScoreCandidate = (1 - Math.abs(l - 0.2)) + s * 0.72;
    if (l > 0.06 && l < 0.42 && deepScoreCandidate > deepScore) {
      deepCandidate = rgbToHex(rgb);
      deepScore = deepScoreCandidate;
    }

    const vibrantScoreCandidate = s * 1.5 + (1 - Math.abs(l - 0.52)) * 0.85;
    if (l > 0.16 && l < 0.78 && vibrantScoreCandidate > vibrantScore) {
      vibrantCandidate = rgbToHex(rgb);
      vibrantScore = vibrantScoreCandidate;
    }

    const softScoreCandidate = (1 - Math.abs(l - 0.72)) + s * 0.65;
    if (l > 0.4 && l < 0.94 && softScoreCandidate > softScore) {
      softCandidate = rgbToHex(rgb);
      softScore = softScoreCandidate;
    }
  }

  if (totalWeight === 0) {
    return fallbackPalette;
  }

  const averageColor = rgbToHex({
    r: weightedRed / totalWeight,
    g: weightedGreen / totalWeight,
    b: weightedBlue / totalWeight,
  });

  return {
    base: mixHex(averageColor, deepCandidate, 0.58),
    accent: mixHex(vibrantCandidate, fallbackPalette.accent, 0.16),
    soft: mixHex(softCandidate, fallbackPalette.soft, 0.14),
  };
}

async function readProjectPalette(project) {
  const source = project.screenshots[0]?.src ?? project.iconSrc;
  const cacheKey = source ?? project.id;

  if (projectPaletteCache.has(cacheKey)) {
    return projectPaletteCache.get(cacheKey);
  }

  const fallbackPalette = fallbackProjectPalette(project);

  if (!source) {
    projectPaletteCache.set(cacheKey, fallbackPalette);
    return fallbackPalette;
  }

  const palette = await new Promise((resolve) => {
    const image = new window.Image();
    image.decoding = 'async';
    image.src = source;

    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d', { willReadFrequently: true });

        if (!context) {
          resolve(fallbackPalette);
          return;
        }

        const sampleWidth = 40;
        const sampleHeight = 40;
        canvas.width = sampleWidth;
        canvas.height = sampleHeight;
        context.drawImage(image, 0, 0, sampleWidth, sampleHeight);
        const { data } = context.getImageData(0, 0, sampleWidth, sampleHeight);
        resolve(extractPaletteFromImageData(data, fallbackPalette));
      } catch {
        resolve(fallbackPalette);
      }
    };

    image.onerror = () => resolve(fallbackPalette);
  });

  projectPaletteCache.set(cacheKey, palette);
  return palette;
}

function projectSceneStyle(project, palette, themeMode) {
  if (!project) {
    return undefined;
  }

  const isDarkMode = themeMode === 'dark';
  const resolvedPalette = palette ?? fallbackProjectPalette(project);
  const sceneStart = isDarkMode
    ? mixHex(resolvedPalette.base, '#040811', 0.26)
    : mixHex(resolvedPalette.soft, '#f6f9ff', 0.74);
  const sceneMid = isDarkMode
    ? mixHex(resolvedPalette.accent, resolvedPalette.base, 0.68)
    : mixHex(resolvedPalette.accent, '#dfe9ff', 0.66);
  const sceneEnd = isDarkMode
    ? mixHex(resolvedPalette.base, '#07111d', 0.44)
    : mixHex(resolvedPalette.base, '#e9f1ff', 0.78);

  return {
    '--scene-background': `
      radial-gradient(circle at 22% 18%, ${withAlpha(resolvedPalette.soft, isDarkMode ? 0.16 : 0.24)}, transparent 24%),
      radial-gradient(circle at 78% 22%, ${withAlpha(resolvedPalette.accent, isDarkMode ? 0.18 : 0.2)}, transparent 26%),
      linear-gradient(180deg, ${sceneStart} 0%, ${sceneMid} 42%, ${sceneEnd} 100%)
    `,
    '--scene-backdrop': `
      radial-gradient(circle at 18% 18%, ${withAlpha(resolvedPalette.accent, isDarkMode ? 0.18 : 0.16)}, transparent 22%),
      radial-gradient(circle at 82% 20%, ${withAlpha(resolvedPalette.soft, isDarkMode ? 0.16 : 0.16)}, transparent 24%),
      radial-gradient(circle at 50% 82%, ${withAlpha(resolvedPalette.base, isDarkMode ? 0.18 : 0.14)}, transparent 28%)
    `,
    '--desktop-wallpaper': `
      radial-gradient(circle at 24% 18%, ${withAlpha(resolvedPalette.soft, isDarkMode ? 0.22 : 0.28)}, transparent 24%),
      radial-gradient(circle at 76% 26%, ${withAlpha(resolvedPalette.accent, isDarkMode ? 0.28 : 0.24)}, transparent 26%),
      radial-gradient(circle at 50% 70%, ${withAlpha(resolvedPalette.base, isDarkMode ? 0.24 : 0.16)}, transparent 28%),
      linear-gradient(160deg, ${sceneStart} 0%, ${sceneMid} 38%, ${sceneEnd} 100%)
    `,
    '--desktop-wallpaper-overlay': isDarkMode
      ? `
        linear-gradient(120deg, rgba(255, 255, 255, 0.04), transparent 35%),
        linear-gradient(transparent, rgba(255, 255, 255, 0.06))
      `
      : `
        linear-gradient(120deg, rgba(255, 255, 255, 0.24), transparent 35%),
        linear-gradient(transparent, rgba(255, 255, 255, 0.18))
      `,
    '--desktop-intro-bg': isDarkMode
      ? `linear-gradient(145deg, ${withAlpha(sceneEnd, 0.86)}, ${withAlpha(sceneMid, 0.5)})`
      : `linear-gradient(145deg, ${withAlpha('#ffffff', 0.68)}, ${withAlpha(resolvedPalette.soft, 0.44)})`,
    '--desktop-intro-line': isDarkMode
      ? withAlpha(resolvedPalette.soft, 0.22)
      : withAlpha(resolvedPalette.accent, 0.14),
    '--desktop-intro-muted': isDarkMode
      ? withAlpha(resolvedPalette.soft, 0.82)
      : mixHex(resolvedPalette.accent, '#55647f', 0.48),
    '--desktop-glow-one': withAlpha(resolvedPalette.soft, isDarkMode ? 0.18 : 0.2),
    '--desktop-glow-two': withAlpha(resolvedPalette.accent, isDarkMode ? 0.22 : 0.18),
    '--desktop-glow-three': withAlpha(resolvedPalette.base, isDarkMode ? 0.16 : 0.12),
    '--boot-accent': withAlpha(resolvedPalette.accent, isDarkMode ? 0.24 : 0.18),
  };
}

function matchesFinderCollection(project, collectionId) {
  if (collectionId === 'github') {
    return project.source.type === 'github';
  }

  if (collectionId === 'wiki') {
    return project.source.type === 'wiki';
  }

  if (collectionId === 'gallery') {
    return project.screenshots.length > 0;
  }

  return true;
}

function appMenu(activeApp, copy) {
  if (activeApp === 'finder') {
    return copy.menu.finder;
  }

  if (activeApp === 'safari') {
    return copy.menu.safari;
  }

  return copy.menu.default;
}

export default function App() {
  const [bootPhase, setBootPhase] = useState('opening');
  const [activeApp, setActiveApp] = useState(null);
  const [isFinderOpen, setIsFinderOpen] = useState(false);
  const [hasSafariLaunched, setHasSafariLaunched] = useState(false);
  const [isSafariOpen, setIsSafariOpen] = useState(false);
  const [finderQuery, setFinderQuery] = useState('');
  const [activeCollection, setActiveCollection] = useState('all');
  const [finderView, setFinderView] = useState('icon');
  const [safariSearch, setSafariSearch] = useState('');
  const [safariHistory, setSafariHistory] = useState([safariHomePage.id]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [pageRenderKey, setPageRenderKey] = useState(0);
  const [now, setNow] = useState(() => new Date());
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') ?? 'dark');
  const [locale, setLocale] = useState(() => window.localStorage.getItem('portfolio-locale') ?? 'pt-BR');
  const [isSystemMenuOpen, setIsSystemMenuOpen] = useState(false);
  const [isShutdownDialogOpen, setIsShutdownDialogOpen] = useState(false);
  const [scenePalette, setScenePalette] = useState(null);
  const bootTimersRef = useRef([]);
  const systemMenuRef = useRef(null);
  const deferredFinderQuery = useDeferredValue(finderQuery);
  const copy = useMemo(() => getLocalePack(locale), [locale]);
  const localizedProfile = useMemo(() => localizeProfile(profile, locale), [locale]);
  const localizedProjects = useMemo(
    () => portfolioProjects.map((project) => localizeProject(project, locale)),
    [locale],
  );
  const projectMap = useMemo(
    () => Object.fromEntries(localizedProjects.map((project) => [project.id, project])),
    [localizedProjects],
  );
  const localizedDocuments = useMemo(
    () => supportDocuments.map((document) => localizeDocument(document, locale)),
    [locale],
  );
  const documentMap = useMemo(
    () => Object.fromEntries(localizedDocuments.map((document) => [document.id, document])),
    [localizedDocuments],
  );

  useEffect(() => {
    const openingTimer = window.setTimeout(() => setBootPhase('booting'), 360);
    const readyTimer = window.setTimeout(() => setBootPhase('ready'), 2000);

    bootTimersRef.current = [openingTimer, readyTimer];

    return () => {
      window.clearTimeout(openingTimer);
      window.clearTimeout(readyTimer);
      bootTimersRef.current = [];
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
    window.localStorage.setItem('portfolio-locale', locale);
    document.documentElement.lang = locale;
    document.documentElement.style.colorScheme = theme;
  }, [locale, theme]);

  const rawCurrentPage = getPageById(safariHistory[historyIndex]) ?? getPageById(safariHomePage.id);
  const currentProject = rawCurrentPage.type === 'project' ? projectMap[rawCurrentPage.projectId] : null;
  const currentDocument = rawCurrentPage.type === 'document' ? documentMap[rawCurrentPage.documentId] : null;
  const currentProfile = rawCurrentPage.type === 'profile' ? localizedProfile : null;
  const pageProject = currentProject ?? projectMap[currentDocument?.projectId ?? ''];
  const activeSceneProject =
    isSafariOpen && (rawCurrentPage.type === 'project' || rawCurrentPage.type === 'document')
      ? pageProject
      : null;
  const sceneStyle = useMemo(
    () => projectSceneStyle(activeSceneProject, scenePalette, theme),
    [activeSceneProject, scenePalette, theme],
  );
  const currentPage = {
    ...rawCurrentPage,
    title:
      rawCurrentPage.type === 'home'
        ? copy.safari.startPageTitle
        : currentProject?.name ?? currentDocument?.title ?? currentProfile?.name ?? rawCurrentPage.title,
  };
  const projectDocuments = localizedDocuments.filter((document) => document.projectId === pageProject?.id);
  const profileShortcut = {
    id: 'about-me',
    label: copy.finder.homeCaption,
    iconKey: 'profile',
    src: localizedProfile.photoSrc,
    accent: '#5f8dff',
    accentSoft: '#dce8ff',
    isActive: currentPage.type === 'profile',
    onOpen: openProfile,
  };
  const socialShortcuts = [
    {
      id: 'github',
      label: 'GitHub',
      iconKey: 'github',
      href: profile.links.find((link) => link.url.includes('github.com'))?.url,
      accent: '#1f2937',
      accentSoft: '#dbe4ff',
      isExternal: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      iconKey: 'linkedin',
      href: profile.links.find((link) => link.url.includes('linkedin.com'))?.url,
      accent: '#0a66c2',
      accentSoft: '#d8edff',
      isExternal: true,
    },
    {
      id: 'resume',
      label: locale === 'pt-BR' ? 'Curriculo' : 'Resume',
      iconKey: 'resume',
      href: resumeFile,
      accent: '#1d4ed8',
      accentSoft: '#dbeafe',
      download: 'MarcosRaachCV.pdf',
    },
  ].filter((shortcut) => shortcut.href);

  const desktopShortcuts = localizedProjects.map((project) => ({
    id: project.id,
    label: project.name,
    iconKey: project.id,
    src: project.iconSrc,
    accent: project.theme.accentStrong,
    accentSoft: project.theme.accentSoft,
    isActive: currentPage.type === 'project' && currentProject?.id === project.id,
    onOpen: () => openProject(project.id),
  }));

  useEffect(() => {
    const appName =
      activeApp === 'finder'
        ? copy.appNames.finder
        : activeApp === 'safari'
          ? currentPage.title
          : copy.appNames.desktop;
    document.title = `Marcos | ${appName}`;
  }, [activeApp, copy.appNames.desktop, copy.appNames.finder, currentPage.title]);

  useEffect(() => {
    if (!isSystemMenuOpen && !isShutdownDialogOpen) return undefined;

    function handlePointerDown(event) {
      if (
        isSystemMenuOpen &&
        systemMenuRef.current &&
        event.target instanceof Node &&
        !systemMenuRef.current.contains(event.target)
      ) {
        setIsSystemMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key !== 'Escape') return;
      setIsSystemMenuOpen(false);
      setIsShutdownDialogOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSystemMenuOpen, isShutdownDialogOpen]);

  useEffect(() => {
    let cancelled = false;
    let frameId = 0;

    if (!activeSceneProject) {
      return undefined;
    }

    const fallbackPalette = fallbackProjectPalette(activeSceneProject);
    const source = activeSceneProject.screenshots[0]?.src ?? activeSceneProject.iconSrc;
    const cacheKey = source ?? activeSceneProject.id;
    const cachedPalette = projectPaletteCache.get(cacheKey);

    frameId = window.requestAnimationFrame(() => {
      if (!cancelled) {
        setScenePalette(cachedPalette ?? fallbackPalette);
      }
    });

    if (cachedPalette) {
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(frameId);
      };
    }

    readProjectPalette(activeSceneProject).then((palette) => {
      if (!cancelled) {
        setScenePalette(palette);
      }
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
    };
  }, [activeSceneProject]);

  const collections = [
    {
      id: 'all',
      label: copy.finder.collections.all.label,
      description: copy.finder.collections.all.description,
      count: localizedProjects.length,
    },
    {
      id: 'github',
      label: copy.finder.collections.github.label,
      description: copy.finder.collections.github.description,
      count: localizedProjects.filter((project) => project.source.type === 'github').length,
    },
    {
      id: 'wiki',
      label: copy.finder.collections.wiki.label,
      description: copy.finder.collections.wiki.description,
      count: localizedProjects.filter((project) => project.source.type === 'wiki').length,
    },
    {
      id: 'gallery',
      label: copy.finder.collections.gallery.label,
      description: copy.finder.collections.gallery.description,
      count: localizedProjects.filter((project) => project.screenshots.length > 0).length,
    },
  ];

  const filteredProjects = localizedProjects.filter((project) => {
    const matchesCollection = matchesFinderCollection(project, activeCollection);
    const normalizedHaystack = normalizeText(
      `${project.name} ${project.summary} ${project.searchTerms} ${project.badges.join(' ')}`,
    );
    const normalizedQuery = normalizeText(deferredFinderQuery.trim());
    const matchesQuery = normalizedQuery ? normalizedHaystack.includes(normalizedQuery) : true;
    return matchesCollection && matchesQuery;
  });

  const finderVisibility = isFinderOpen
    ? activeApp === 'finder'
      ? 'active'
      : activeApp === 'safari' && isSafariOpen
        ? 'background'
        : 'hidden'
    : 'hidden';

  const safariVisibility = isSafariOpen
    ? activeApp === 'safari'
      ? 'active'
      : activeApp === 'finder' && isFinderOpen
        ? 'background'
        : 'hidden'
    : 'hidden';

  const highlightedProjectId = pageProject?.id ?? null;
  const canGoBack = historyIndex > 0;
  const canGoForward = historyIndex < safariHistory.length - 1;

  const formattedLocalizedTime = new Intl.DateTimeFormat(locale === 'pt-BR' ? 'pt-BR' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(now);

  function clearBootTimers() {
    bootTimersRef.current.forEach((timerId) => window.clearTimeout(timerId));
    bootTimersRef.current = [];
  }

  function queueBootTimer(callback, delay) {
    const timerId = window.setTimeout(callback, delay);
    bootTimersRef.current.push(timerId);
  }

  function resetWorkspaceState() {
    setActiveApp(null);
    setIsFinderOpen(false);
    setHasSafariLaunched(false);
    setIsSafariOpen(false);
    setFinderQuery('');
    setActiveCollection('all');
    setFinderView('icon');
    setSafariSearch('');
    setSafariHistory([safariHomePage.id]);
    setHistoryIndex(0);
    setPageRenderKey(0);
  }

  function startBootSequence() {
    clearBootTimers();
    setIsSystemMenuOpen(false);
    setIsShutdownDialogOpen(false);
    setBootPhase('opening');
    queueBootTimer(() => setBootPhase('booting'), 360);
    queueBootTimer(() => setBootPhase('ready'), 2000);
  }

  function requestShutdown() {
    setIsSystemMenuOpen(false);
    setIsShutdownDialogOpen(true);
  }

  function confirmShutdown() {
    clearBootTimers();
    setIsSystemMenuOpen(false);
    setIsShutdownDialogOpen(false);
    setBootPhase('shutting-down');
    queueBootTimer(() => {
      resetWorkspaceState();
      setBootPhase('powered-off');
    }, 920);
  }

  function activateFinder() {
    setIsSystemMenuOpen(false);
    setIsFinderOpen(true);
    setActiveApp('finder');
  }

  function closeFinder() {
    setIsFinderOpen(false);
    setActiveApp(isSafariOpen ? 'safari' : null);
  }

  function activateSafari() {
    if (!hasSafariLaunched) return;
    setIsSystemMenuOpen(false);
    setIsSafariOpen(true);
    setActiveApp('safari');
  }

  function navigateSafari(pageId) {
    setIsSystemMenuOpen(false);
    const currentId = safariHistory[historyIndex];
    const nextHistory = safariHistory.slice(0, historyIndex + 1);
    let nextIndex = historyIndex;

    if (currentId !== pageId) {
      nextHistory.push(pageId);
      nextIndex = nextHistory.length - 1;
    }

    setHasSafariLaunched(true);
    setIsSafariOpen(true);

    startTransition(() => {
      setSafariHistory(nextHistory);
      setHistoryIndex(nextIndex);
      setActiveApp('safari');
      setPageRenderKey((value) => value + 1);
    });
  }

  function openProject(projectId) {
    navigateSafari(projectPageId(projectId));
  }

  function openProfile() {
    navigateSafari(profilePageId());
  }

  function openDocument(documentId) {
    navigateSafari(documentPageId(documentId));
  }

  function goHome() {
    navigateSafari(safariHomePage.id);
  }

  function goBack() {
    if (!canGoBack) return;
    setHistoryIndex((value) => value - 1);
    setActiveApp('safari');
    setPageRenderKey((value) => value + 1);
  }

  function goForward() {
    if (!canGoForward) return;
    setHistoryIndex((value) => value + 1);
    setActiveApp('safari');
    setPageRenderKey((value) => value + 1);
  }

  function reloadPage() {
    setPageRenderKey((value) => value + 1);
  }

  function closeSafari() {
    setIsSafariOpen(false);
    setActiveApp(isFinderOpen ? 'finder' : null);
  }

  function submitSafariSearch(event) {
    event.preventDefault();

    const normalizedQuery = normalizeText(safariSearch.trim());
    if (!normalizedQuery) return;

    const firstMatch = localizedProjects.find((project) => {
      const haystack = normalizeText(`${project.name} ${project.searchTerms} ${project.summary}`);
      return haystack.includes(normalizedQuery);
    });

    if (firstMatch) {
      openProject(firstMatch.id);
    }
  }

  return (
    <div
      className={`portfolio-root is-${bootPhase}`}
      data-theme={theme}
      data-locale={locale}
      style={sceneStyle}
    >
      <div className="scene-backdrop" aria-hidden="true" />

      <main className="portfolio-scene">
        <div className={`macbook macbook--${bootPhase}`}>
          <div className="macbook-front">
            <div className="macbook-screen">
              <div className="display-shell">
                <div className="display-shell__highlight" aria-hidden="true" />
                <div className="screen-bezel">
                  <div className="screen-camera" aria-hidden="true">
                    <span className="screen-camera__lens" />
                  </div>

                  <div className="screen-surface">
                    <header className="menu-bar">
                      <div className="menu-bar__left">
                        <div className="menu-bar__menu-group" ref={systemMenuRef}>
                          <button
                            type="button"
                            className={`menu-bar__apple-button ${isSystemMenuOpen ? 'is-open' : ''}`.trim()}
                            aria-label={copy.system.menuLabel}
                            aria-haspopup="menu"
                            aria-expanded={isSystemMenuOpen}
                            onClick={() => setIsSystemMenuOpen((value) => !value)}
                          >
                            <span className="menu-bar__apple">portfolioOS</span>
                          </button>

                          <div className={`system-menu ${isSystemMenuOpen ? 'is-open' : ''}`.trim()} role="menu">
                            <button
                              type="button"
                              className="system-menu__item"
                              role="menuitem"
                              onClick={requestShutdown}
                            >
                              <span>{copy.system.shutdownLabel}</span>
                              <Power size={14} />
                            </button>
                          </div>
                        </div>

                        <span className="menu-bar__app-name">
                          {activeApp === 'finder'
                            ? copy.appNames.finder
                            : activeApp === 'safari'
                              ? copy.appNames.safari
                              : copy.appNames.desktop}
                        </span>

                        {appMenu(activeApp, copy).map((item) => (
                          <span key={item} className="menu-bar__item">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="menu-bar__right">
                        <button
                          type="button"
                          className="menu-bar__chip menu-bar__chip--button"
                          aria-label={copy.menuBar.toggleLocale}
                          onClick={() => setLocale((value) => toggleLocale(value))}
                        >
                          <Globe size={13} />
                          {copy.localeLabel}
                        </button>

                        <button
                          type="button"
                          className="menu-bar__chip menu-bar__chip--button"
                          aria-label={copy.menuBar.toggleTheme}
                          onClick={() => setTheme((value) => toggleTheme(value))}
                        >
                          {theme === 'dark' ? <MoonStar size={13} /> : <SunMedium size={13} />}
                          {theme === 'dark' ? copy.menuBar.themeDark : copy.menuBar.themeLight}
                        </button>

                        <span className="menu-bar__chip">
                          <Wifi size={13} />
                          {copy.menuBar.network}
                        </span>

                        <span className="menu-bar__chip">
                          <BatteryFull size={13} />
                          {copy.menuBar.battery}
                        </span>

                        <span className="menu-bar__time">{formattedLocalizedTime}</span>
                      </div>
                    </header>

                    <div className="desktop-stage">
                      <div className="desktop-wallpaper" aria-hidden="true">
                        <div className="desktop-wallpaper__glow desktop-wallpaper__glow--one" />
                        <div className="desktop-wallpaper__glow desktop-wallpaper__glow--two" />
                        <div className="desktop-wallpaper__glow desktop-wallpaper__glow--three" />
                      </div>

                      <div
                        className={`desktop-shortcuts desktop-shortcuts--profile ${activeApp ? 'is-hidden' : ''}`.trim()}
                        role="list"
                        aria-label="Profile and contact shortcuts"
                      >
                        <button
                          type="button"
                          className={`desktop-shortcut desktop-shortcut--profile ${profileShortcut.isActive ? 'is-active' : ''}`.trim()}
                          role="listitem"
                          onClick={profileShortcut.onOpen}
                          title={profileShortcut.label}
                        >
                          <AppIcon
                            src={profileShortcut.src}
                            label={profileShortcut.label}
                            iconKey={profileShortcut.iconKey}
                            className="desktop-shortcut__icon desktop-shortcut__icon--profile"
                            accent={profileShortcut.accent}
                            accentSoft={profileShortcut.accentSoft}
                            imageFit="contain"
                          />
                          <span className="desktop-shortcut__label">{profileShortcut.label}</span>
                        </button>

                        {socialShortcuts.map((shortcut) => (
                          <a
                            key={shortcut.id}
                            className="desktop-shortcut desktop-shortcut--utility"
                            role="listitem"
                            href={shortcut.href}
                            target={shortcut.isExternal ? '_blank' : undefined}
                            rel={shortcut.isExternal ? 'noopener noreferrer' : undefined}
                            download={shortcut.download}
                            title={shortcut.label}
                            aria-label={shortcut.label}
                          >
                            <AppIcon
                              label={shortcut.label}
                              iconKey={shortcut.iconKey}
                              className="desktop-shortcut__icon desktop-shortcut__icon--utility"
                              accent={shortcut.accent}
                              accentSoft={shortcut.accentSoft}
                            />
                            <span className="desktop-shortcut__label">{shortcut.label}</span>
                          </a>
                        ))}
                      </div>

                      <div
                        className={`desktop-shortcuts desktop-shortcuts--projects ${activeApp ? 'is-hidden' : ''}`.trim()}
                        role="list"
                        aria-label="Desktop shortcuts"
                      >
                        {desktopShortcuts.map((shortcut) => (
                          <button
                            key={shortcut.id}
                            type="button"
                            className={`desktop-shortcut ${shortcut.isActive ? 'is-active' : ''}`.trim()}
                            role="listitem"
                            onClick={shortcut.onOpen}
                            title={shortcut.label}
                          >
                            <AppIcon
                              src={shortcut.src}
                              label={shortcut.label}
                              iconKey={shortcut.iconKey}
                              className="desktop-shortcut__icon"
                              accent={shortcut.accent}
                              accentSoft={shortcut.accentSoft}
                            />
                            <span className="desktop-shortcut__label">{shortcut.label}</span>
                          </button>
                        ))}
                      </div>

                      <div className={`desktop-intro ${activeApp ? 'is-muted' : ''}`.trim()}>
                        <p>{localizedProfile.name}</p>
                        <span>{localizedProfile.role}</span>
                        <strong>{copy.desktop.hint}</strong>
                      </div>

                      <div className="window-stage">
                        <FinderWindow
                          visibility={finderVisibility}
                          projects={filteredProjects}
                          collections={collections}
                          activeCollection={activeCollection}
                          onCollectionChange={setActiveCollection}
                          view={finderView}
                          onViewChange={setFinderView}
                          query={finderQuery}
                          onQueryChange={setFinderQuery}
                          onOpenProject={openProject}
                          onOpenProfile={openProfile}
                          onClose={closeFinder}
                          activeProjectId={highlightedProjectId}
                          profile={localizedProfile}
                          copy={copy}
                        />

                        <SafariWindow
                          visibility={safariVisibility}
                          currentPage={currentPage}
                          currentProject={currentProject}
                          currentDocument={currentDocument}
                          currentProfile={currentProfile}
                          projectDocuments={projectDocuments}
                          projects={localizedProjects}
                          searchValue={safariSearch}
                          onSearchChange={setSafariSearch}
                          onSubmitSearch={submitSafariSearch}
                          onOpenProject={openProject}
                          onOpenDocument={openDocument}
                          onClose={closeSafari}
                          onReturnToFinder={activateFinder}
                          onGoHome={goHome}
                          onGoBack={goBack}
                          onGoForward={goForward}
                          onReload={reloadPage}
                          canGoBack={canGoBack}
                          canGoForward={canGoForward}
                          safariIconSrc={systemAppIcons.safari}
                          pageRenderKey={pageRenderKey}
                          theme={theme}
                          locale={locale}
                          copy={copy}
                          onToggleTheme={() => setTheme((value) => toggleTheme(value))}
                          onToggleLocale={() => setLocale((value) => toggleLocale(value))}
                        />
                      </div>
                    </div>

                    <div className="dock-reveal-zone" aria-hidden="true">
                      <span className="dock-handle" />
                    </div>

                    {isShutdownDialogOpen ? (
                      <div
                        className="system-dialog-backdrop"
                        role="presentation"
                        onClick={() => setIsShutdownDialogOpen(false)}
                      >
                        <div
                          className="system-dialog"
                          role="dialog"
                          aria-modal="true"
                          aria-labelledby="shutdown-title"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <div className="system-dialog__icon" aria-hidden="true">
                            <Power size={20} />
                          </div>

                          <div className="system-dialog__copy">
                            <h2 id="shutdown-title">{copy.system.shutdownTitle}</h2>
                            <p>{copy.system.shutdownBody}</p>
                          </div>

                          <div className="system-dialog__actions">
                            <button
                              type="button"
                              className="system-dialog__button"
                              onClick={() => setIsShutdownDialogOpen(false)}
                            >
                              {copy.system.cancelAction}
                            </button>
                            <button
                              type="button"
                              className="system-dialog__button system-dialog__button--danger"
                              onClick={confirmShutdown}
                            >
                              {copy.system.confirmShutdown}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <footer className="dock">
                      <button
                        type="button"
                        className={`dock-item ${activeApp === 'finder' ? 'is-active' : ''}`.trim()}
                        onClick={activateFinder}
                        aria-label={copy.dock.openFinder}
                      >
                        <AppIcon
                          src={systemAppIcons.finder}
                          label="Finder"
                          iconKey="finder"
                          className="dock-item__icon"
                          accent="#2c5fff"
                          accentSoft="#d9f2ff"
                        />
                        <span className="dock-item__label">{copy.dock.finder}</span>
                      </button>

                      {hasSafariLaunched ? (
                        <button
                          type="button"
                          className={`dock-item ${activeApp === 'safari' ? 'is-active' : ''}`.trim()}
                          onClick={activateSafari}
                          aria-label={copy.dock.openSafari}
                        >
                          <AppIcon
                            src={systemAppIcons.safari}
                            label="Safari"
                            iconKey="safari"
                            className="dock-item__icon"
                            accent="#2f82ff"
                            accentSoft="#d6ebff"
                          />
                          <span className="dock-item__label">{copy.dock.safari}</span>
                        </button>
                      ) : null}
                    </footer>

                    <div className="boot-overlay" aria-hidden={bootPhase === 'ready'} data-phase={bootPhase}>
                      <span className="boot-overlay__halo" />
                      <span className="boot-overlay__reflection" />

                      {bootPhase === 'powered-off' ? (
                        <div className="power-screen">
                          <div className="power-screen__mark" aria-hidden="true">
                            <Power size={28} />
                          </div>
                          <strong>{copy.system.poweredOffTitle}</strong>
                          <p>{copy.system.poweredOffHint}</p>
                          <button type="button" className="power-screen__button" onClick={startBootSequence}>
                            <Power size={16} />
                            {copy.system.powerOnAction}
                          </button>
                        </div>
                      ) : (
                        <div className="boot-screen">
                          <div className="boot-screen__brand">
                            <span className="boot-screen__brand-dot" />
                            <strong>{copy.system.bootTitle}</strong>
                          </div>
                          <p className="boot-screen__status">
                            {bootPhase === 'shutting-down' ? copy.system.shutdownStatus : copy.system.bootStatus}
                          </p>
                          <div className="boot-screen__progress" aria-hidden="true">
                            <span className="boot-screen__progress-bar" />
                          </div>
                          <span className="boot-screen__hint">
                            {bootPhase === 'shutting-down' ? copy.system.shutdownHint : copy.system.bootHint}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="macbook-hinge" aria-hidden="true" />

            <div className="macbook-base" aria-hidden="true">
              <div className="macbook-base__deck">
                <div className="macbook-base__speaker" />
                <div className="macbook-base__palmrest">
                  <div className="macbook-base__trackpad" />
                </div>

                <div className="macbook-base__speaker" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
