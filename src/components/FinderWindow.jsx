import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  Folder,
  FolderOpen,
  FolderKanban,
  GalleryHorizontalEnd,
  HardDrive,
  Home,
  LayoutGrid,
  LibraryBig,
  List,
  Search,
  Sidebar,
  Users,
} from 'lucide-react';
import AppIcon from './AppIcon';

const collectionIcons = {
  all: Clock3,
  github: FolderKanban,
  wiki: LibraryBig,
  gallery: GalleryHorizontalEnd,
};

function projectMaterialLabel(project, copy) {
  if (project.screenshots.length > 0) {
    return copy.finder.screensCount(project.screenshots.length);
  }

  return copy.finder.galleryReady;
}

function projectTeamLabel(project, copy) {
  if (project.team.length > 0) {
    return copy.finder.teamCount(project.team.length);
  }

  return copy.finder.teamPending;
}

function projectOrigin(project, copy) {
  if (project.appStoreUrl) {
    return {
      label: 'App Store',
      type: 'app-store',
    };
  }

  if (project.hideSourceAction) {
    return {
      label: copy.finder.originPortfolio,
      type: 'portfolio',
    };
  }

  return {
    label: project.source.label,
    type: project.source.type,
  };
}

export default function FinderWindow({
  visibility,
  projects,
  collections,
  activeCollection,
  onCollectionChange,
  view,
  onViewChange,
  query,
  onQueryChange,
  onOpenProject,
  onOpenProfile,
  onClose,
  activeProjectId,
  profile,
  copy,
}) {
  const currentCollection = collections.find((collection) => collection.id === activeCollection) ?? collections[0];
  const locationItems = [
    {
      id: 'home',
      label: 'Marcos',
      caption: copy.finder.homeCaption,
      icon: Home,
      onClick: onOpenProfile,
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      caption: copy.finder.activeFolderCaption,
      icon: FolderOpen,
      isActive: true,
    },
  ];

  const tagItems = [
    { label: 'GitHub', className: 'finder-tag-dot finder-tag-dot--blue' },
    { label: 'Wiki', className: 'finder-tag-dot finder-tag-dot--green' },
    { label: 'Capturas', className: 'finder-tag-dot finder-tag-dot--gold' },
    { label: 'Portfolio', className: 'finder-tag-dot finder-tag-dot--pink' },
  ];

  return (
    <section className="window-shell finder-window" data-visibility={visibility}>
      <header className="window-header window-header--finder">
        <div className="finder-titlebar">
          <div className="finder-titlebar__leading">
            <div className="traffic-lights">
              <button
                type="button"
                className="traffic-light traffic-light--close"
                aria-label={copy.finder.closeFinder}
                onClick={onClose}
              />
              <span className="traffic-light traffic-light--minimize" aria-hidden="true" />
              <span className="traffic-light traffic-light--zoom" aria-hidden="true" />
            </div>

            <div className="finder-nav-buttons" aria-hidden="true">
              <button type="button" className="toolbar-icon-button" disabled>
                <ChevronLeft size={15} />
              </button>
              <button type="button" className="toolbar-icon-button" disabled>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          <div className="window-title window-title--finder">
            <p>Finder</p>
            <strong>Portfolio</strong>
          </div>

          <div className="window-actions window-actions--finder">
            <button type="button" className="toolbar-icon-button" aria-label="Sidebar">
              <Sidebar size={16} />
            </button>

            <div className="finder-view-switch" aria-label={copy.finder.iconView}>
              <button
                type="button"
                className={`finder-view-switch__button ${view === 'icon' ? 'is-active' : ''}`.trim()}
                aria-label={copy.finder.iconView}
                aria-pressed={view === 'icon'}
                onClick={() => onViewChange('icon')}
              >
                <LayoutGrid size={15} />
              </button>

              <button
                type="button"
                className={`finder-view-switch__button ${view === 'list' ? 'is-active' : ''}`.trim()}
                aria-label={copy.finder.listView}
                aria-pressed={view === 'list'}
                onClick={() => onViewChange('list')}
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="finder-shell">
        <aside className="finder-sidebar">
          <section className="finder-sidebar-group">
            <p className="finder-sidebar-title">{copy.finder.favorites}</p>
            {collections.map((collection) => {
              const Icon = collectionIcons[collection.id] ?? LayoutGrid;
              const isActive = collection.id === activeCollection;

              return (
                <button
                  key={collection.id}
                  type="button"
                  className={`finder-sidebar-item ${isActive ? 'is-active' : ''}`.trim()}
                  onClick={() => onCollectionChange(collection.id)}
                >
                  <span className="finder-sidebar-item__icon">
                    <Icon size={15} />
                  </span>
                  <span className="finder-sidebar-item__copy">
                    <strong>{collection.label}</strong>
                  </span>
                  <span className="finder-sidebar-item__count">{collection.count}</span>
                </button>
              );
            })}
          </section>

          <section className="finder-sidebar-group">
            <p className="finder-sidebar-title">{copy.finder.locations}</p>
            {locationItems.map((item) => {
              const Icon = item.icon ?? Folder;
              const Tag = item.onClick ? 'button' : 'div';

              return (
                <Tag
                  key={item.id}
                  className={`finder-sidebar-item ${item.onClick ? '' : 'finder-sidebar-item--static'} ${item.isActive ? 'is-active' : ''}`.trim()}
                  type={item.onClick ? 'button' : undefined}
                  onClick={item.onClick}
                >
                  <span className="finder-sidebar-item__icon">
                    <Icon size={15} />
                  </span>
                  <span className="finder-sidebar-item__copy">
                    <strong>{item.label}</strong>
                    <span>{item.caption}</span>
                  </span>
                </Tag>
              );
            })}
          </section>

          <section className="finder-sidebar-group">
            <p className="finder-sidebar-title">{copy.finder.tags}</p>
            <div className="finder-tags">
              {tagItems.map((tag) => (
                <span key={tag.label} className="finder-tag">
                  <span className={tag.className} />
                  {tag.label}
                </span>
              ))}
            </div>
          </section>

          <footer className="finder-sidebar-footer">
            <HardDrive size={13} />
            <span>{profile.name}</span>
          </footer>
        </aside>

        <div className="finder-main">
          <div className="finder-toolbar">
            <div className="finder-toolbar__leading">
              <div className="finder-breadcrumbs" aria-label="Local atual">
                <HardDrive size={14} />
                <span>Macintosh HD</span>
                <ChevronRight size={12} />
                <span>{copy.finder.usersLabel}</span>
                <ChevronRight size={12} />
                <span>Marcos</span>
                <ChevronRight size={12} />
                <strong>Portfolio</strong>
              </div>
            </div>

            <div className="finder-toolbar__trailing">
              <label className="finder-search">
                <Search size={15} />
                <input
                  type="search"
                  placeholder={copy.finder.searchPlaceholder}
                  value={query}
                  onChange={(event) => onQueryChange(event.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="finder-directory-summary">
            <div className="finder-directory-summary__copy">
              <strong>{currentCollection.label}</strong>
              <span>{currentCollection.description}</span>
            </div>
            <span>{copy.finder.itemCount(projects.length)}</span>
          </div>

          {view === 'icon' ? (
            <div className="finder-icon-stage" role="list">
              {projects.length > 0 ? (
                <div className="finder-icon-grid">
                  {projects.map((project) => {
                    const isSelected = activeProjectId === project.id;

                    return (
                      <button
                        key={project.id}
                        type="button"
                        className={`finder-icon-item ${isSelected ? 'is-selected' : ''}`.trim()}
                        role="listitem"
                        onClick={() => onOpenProject(project.id)}
                      >
                        <AppIcon
                          src={project.iconSrc}
                          label={project.name}
                          iconKey={project.id}
                          className="finder-icon-item__icon"
                          accent={project.theme.accentStrong}
                          accentSoft={project.theme.accentSoft}
                        />
                        <span className="finder-icon-item__label">{project.name}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <article className="finder-empty-state">
                  <Search size={28} />
                  <strong>{copy.finder.emptyTitle}</strong>
                  <p>{copy.finder.emptyBody}</p>
                </article>
              )}
            </div>
          ) : (
            <div className="finder-list" role="list">
              <div className="finder-list__head" aria-hidden="true">
                <span>{copy.finder.listHeaders.name}</span>
                <span>{copy.finder.listHeaders.origin}</span>
                <span>{copy.finder.listHeaders.screenshots}</span>
                <span>{copy.finder.listHeaders.team}</span>
                <span />
              </div>

              {projects.length > 0 ? (
                projects.map((project) => {
                  const isSelected = activeProjectId === project.id;
                  const origin = projectOrigin(project, copy);

                  return (
                    <button
                      key={project.id}
                      type="button"
                      className={`finder-row ${isSelected ? 'is-selected' : ''}`.trim()}
                      role="listitem"
                      onClick={() => onOpenProject(project.id)}
                    >
                      <span className="finder-row__main">
                        <AppIcon
                          src={project.iconSrc}
                          label={project.name}
                          iconKey={project.id}
                          className="finder-row__icon"
                          accent={project.theme.accentStrong}
                          accentSoft={project.theme.accentSoft}
                        />

                        <span className="finder-row__copy">
                          <strong>{project.name}</strong>
                          <span>{project.summary}</span>
                        </span>
                      </span>

                      <span className="finder-row__meta">
                        <span className={`finder-source finder-source--${origin.type}`.trim()}>
                          {origin.label}
                        </span>
                      </span>

                      <span className="finder-row__meta">{projectMaterialLabel(project, copy)}</span>
                      <span className="finder-row__meta">{projectTeamLabel(project, copy)}</span>

                      <span className="finder-row__arrow">
                        <ChevronRight size={18} />
                      </span>
                    </button>
                  );
                })
              ) : (
                <article className="finder-empty-state">
                  <Search size={28} />
                  <strong>{copy.finder.emptyTitle}</strong>
                  <p>{copy.finder.emptyBody}</p>
                </article>
              )}
            </div>
          )}

          <footer className="finder-footer">
            <span>{copy.finder.itemCount(projects.length)}</span>
            <span className="finder-footer__meta">
              <Users size={14} />
              {copy.finder.footerHint}
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}
