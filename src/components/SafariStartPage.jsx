import { ArrowUpRight, Search, Sparkles } from 'lucide-react';
import AppIcon from './AppIcon';

function normalizeText(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default function SafariStartPage({
  projects,
  searchValue,
  onSearchChange,
  onSubmitSearch,
  onOpenProject,
  copy,
}) {
  const visibleProjects = searchValue.trim()
    ? projects.filter((project) => {
        const haystack = normalizeText(`${project.name} ${project.searchTerms}`);
        return haystack.includes(normalizeText(searchValue.trim()));
      })
    : projects;

  return (
    <div className="start-page">
      <section className="start-page__hero">
        <div className="start-page__hero-copy">
          <p className="start-page__eyebrow">{copy.safari.startPageEyebrow}</p>
          <h1>{copy.safari.startPageHeroTitle}</h1>
          <p>{copy.safari.startPageHeroBody}</p>

          <form className="start-page__search" onSubmit={onSubmitSearch}>
            <Search size={18} />
            <input
              type="search"
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={copy.safari.addressPlaceholder}
            />
            <button type="submit">{copy.safari.startPageSearchAction}</button>
          </form>
        </div>

        <article className="start-page__callout">
          <span className="start-page__callout-badge">
            <Sparkles size={14} />
            {copy.safari.startPageCalloutBadge}
          </span>
          <strong>{copy.safari.startPageCalloutTitle}</strong>
          <p>{copy.safari.startPageCalloutBody}</p>
        </article>
      </section>

      <section className="start-page__section">
        <div className="start-page__section-heading">
          <div>
            <p className="start-page__eyebrow">{copy.safari.topSitesEyebrow}</p>
            <h2>{copy.safari.topSitesTitle}</h2>
          </div>
          <span>{copy.safari.availableCount(visibleProjects.length)}</span>
        </div>

        <div className="start-page__grid">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              className="start-page__card"
              onClick={() => onOpenProject(project.id)}
            >
              <AppIcon
                src={project.iconSrc}
                label={project.name}
                iconKey={project.id}
                className="start-page__card-icon"
                accent={project.theme.accentStrong}
                accentSoft={project.theme.accentSoft}
              />

              <span className="start-page__card-copy">
                <strong>{project.name}</strong>
                <span>{project.finderSubtitle}</span>
              </span>

              <span className="start-page__card-action">
                <ArrowUpRight size={16} />
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
