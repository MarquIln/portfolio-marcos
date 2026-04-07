import {
  ArrowLeft,
  ArrowRight,
  FolderOpen,
  Globe,
  House,
  Languages,
  MoonStar,
  RefreshCcw,
  SunMedium,
} from 'lucide-react';
import AppIcon from './AppIcon';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import SafariStartPage from './SafariStartPage';
import SupportDocumentPage from './SupportDocumentPage';

function pageIcon({ currentPage, currentProject, currentProfile, safariIconSrc }) {
  if (currentPage.type === 'project' && currentProject) {
    return {
      src: currentProject.iconSrc,
      key: currentProject.id,
      label: currentProject.name,
      accent: currentProject.theme.accentStrong,
      accentSoft: currentProject.theme.accentSoft,
    };
  }

  if (currentPage.type === 'profile' && currentProfile) {
    return {
      src: null,
      key: 'profile',
      label: currentProfile.name,
      accent: '#5f8dff',
      accentSoft: '#dce8ff',
    };
  }

  return {
    src: safariIconSrc,
    key: 'safari',
    label: 'Safari',
    accent: '#2f82ff',
    accentSoft: '#d6ebff',
  };
}

export default function SafariWindow({
  visibility,
  currentPage,
  currentProject,
  currentDocument,
  currentProfile,
  projectDocuments,
  projects,
  searchValue,
  onSearchChange,
  onSubmitSearch,
  onOpenProject,
  onOpenDocument,
  onClose,
  onReturnToFinder,
  onGoHome,
  onGoBack,
  onGoForward,
  onReload,
  canGoBack,
  canGoForward,
  safariIconSrc,
  pageRenderKey,
  theme,
  copy,
  onToggleTheme,
  onToggleLocale,
}) {
  const iconConfig = pageIcon({ currentPage, currentProject, currentProfile, safariIconSrc });

  return (
    <section className="window-shell safari-window" data-visibility={visibility}>
      <header className="safari-chrome">
        <div className="safari-chrome__leading">
          <div className="traffic-lights">
            <button
              type="button"
              className="traffic-light traffic-light--close"
              aria-label={copy.safari.closeLabel}
              onClick={onClose}
            />
            <span className="traffic-light traffic-light--minimize" aria-hidden="true" />
            <span className="traffic-light traffic-light--zoom" aria-hidden="true" />
          </div>

          <div className="safari-chip safari-chip--context">
            <AppIcon
              src={iconConfig.src}
              label={iconConfig.label}
              iconKey={iconConfig.key}
              className="safari-chip__icon"
              accent={iconConfig.accent}
              accentSoft={iconConfig.accentSoft}
            />
            <span>{currentPage.title}</span>
          </div>

          <div className="safari-nav-group">
            <button
              type="button"
              className="safari-action-button safari-action-button--icon"
              onClick={onGoBack}
              disabled={!canGoBack}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              className="safari-action-button safari-action-button--icon"
              onClick={onGoForward}
              disabled={!canGoForward}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="safari-addressbar">
          <Globe size={16} />
          <span>{currentPage.type === 'home' ? 'portfolio.local' : currentPage.address}</span>
        </div>

        <div className="safari-chrome__actions">
          <button
            type="button"
            className="safari-action-button safari-action-button--icon"
            onClick={onGoHome}
            aria-label={copy.safari.homeLabel}
          >
            <House size={16} />
          </button>

          <button
            type="button"
            className="safari-action-button safari-action-button--icon"
            onClick={onReload}
            aria-label={copy.safari.reloadLabel}
          >
            <RefreshCcw size={16} />
          </button>

          <button
            type="button"
            className="safari-action-button"
            onClick={onToggleLocale}
            aria-label={copy.safari.localeToggle}
          >
            <Languages size={16} />
            {copy.localeLabel}
          </button>

          <button
            type="button"
            className="safari-action-button"
            onClick={onToggleTheme}
            aria-label={copy.safari.themeToggle}
          >
            {theme === 'dark' ? <MoonStar size={16} /> : <SunMedium size={16} />}
            {theme === 'dark' ? copy.menuBar.themeDark : copy.menuBar.themeLight}
          </button>

          <button type="button" className="safari-action-button" onClick={onReturnToFinder}>
            <FolderOpen size={16} />
            {copy.safari.returnToFinder}
          </button>
        </div>
      </header>

      <div className="safari-content">
        <div key={`${currentPage.id}-${pageRenderKey}`} className="browser-page">
          {currentPage.type === 'home' ? (
            <SafariStartPage
              projects={projects}
              searchValue={searchValue}
              onSearchChange={onSearchChange}
              onSubmitSearch={onSubmitSearch}
              onOpenProject={onOpenProject}
              copy={copy}
            />
          ) : null}

          {currentPage.type === 'project' && currentProject ? (
            <ProjectPage
              project={currentProject}
              supportingDocuments={projectDocuments}
              onOpenDocument={onOpenDocument}
              copy={copy}
            />
          ) : null}

          {currentPage.type === 'profile' && currentProfile ? (
            <AboutPage profile={currentProfile} copy={copy} />
          ) : null}

          {currentPage.type === 'document' && currentDocument ? (
            <SupportDocumentPage document={currentDocument} copy={copy} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
