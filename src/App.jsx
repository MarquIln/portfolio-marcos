import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react';
import { BatteryFull, Github, Globe, Linkedin, Mail, MoonStar, SunMedium, Wifi } from 'lucide-react';
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
    const openingTimer = window.setTimeout(() => setBootPhase('booting'), 420);
    const readyTimer = window.setTimeout(() => setBootPhase('ready'), 1520);

    return () => {
      window.clearTimeout(openingTimer);
      window.clearTimeout(readyTimer);
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

  function activateFinder() {
    setIsFinderOpen(true);
    setActiveApp('finder');
  }

  function closeFinder() {
    setIsFinderOpen(false);
    setActiveApp(isSafariOpen ? 'safari' : null);
  }

  function activateSafari() {
    if (!hasSafariLaunched) return;
    setIsSafariOpen(true);
    setActiveApp('safari');
  }

  function navigateSafari(pageId) {
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
    <div className={`portfolio-root is-${bootPhase}`} data-theme={theme} data-locale={locale}>
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
                        <span className="menu-bar__apple">portfolioOS</span>
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
                        aria-label="Profile shortcut"
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
                            imageFit="cover"
                          />
                          <span className="desktop-shortcut__label">{profileShortcut.label}</span>
                        </button>
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

                    <div className="boot-overlay" aria-hidden={bootPhase === 'ready'}>
                      <span className="boot-overlay__halo" />
                      <span className="boot-overlay__reflection" />
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

        <section className="portfolio-links">
          <a href={profile.links[0].url} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <a href={profile.links[1].url} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={profile.links[2].url}>
            <Mail size={16} />
            Email
          </a>
        </section>
      </main>
    </div>
  );
}
