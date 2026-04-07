import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react';
import AppIcon from './AppIcon';

function memberInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function gallerySlots(project) {
  return [
    `Identidade principal de ${project.name}`,
    `Fluxo central de ${project.name}`,
    `Detalhe visual de ${project.name}`,
  ];
}

function groupTeamMembers(team) {
  const groups = [];

  team.forEach((member) => {
    const title = member.group ?? '';
    const existingGroup = groups.find((group) => group.title === title);

    if (existingGroup) {
      existingGroup.members.push(member);
      if (!existingGroup.note && member.groupNote) {
        existingGroup.note = member.groupNote;
      }
      return;
    }

    groups.push({
      title,
      note: member.groupNote ?? '',
      members: [member],
    });
  });

  return groups;
}

export default function ProjectPage({ project, supportingDocuments, onOpenDocument, copy }) {
  const showSourceAction = !project.appStoreUrl && !project.hideSourceAction;
  const teamGroups = groupTeamMembers(project.team);
  const hasContributionContent =
    Boolean(project.contributionSummary) ||
    Boolean(project.contributionStack?.length) ||
    Boolean(project.contributionHighlights?.length) ||
    Boolean(project.contributionLinks?.length);

  const projectStyle = {
    '--project-accent': project.theme.accent,
    '--project-accent-soft': project.theme.accentSoft,
    '--project-accent-strong': project.theme.accentStrong,
    '--project-hero-from': project.theme.heroFrom,
    '--project-hero-to': project.theme.heroTo,
    '--project-shadow': project.theme.shadow,
  };

  return (
    <article className="project-page" style={projectStyle}>
      <section className="project-hero-grid">
        <div className="project-overview__main">
          <div className="project-overview__header">
            <AppIcon
              src={project.iconSrc}
              label={project.name}
              iconKey={project.id}
              className="project-overview__icon"
              accent={project.theme.accentStrong}
              accentSoft={project.theme.accentSoft}
            />

            <div>
              <p className="project-overview__eyebrow">{project.finderSubtitle}</p>
              <h1>{project.name}</h1>
            </div>
          </div>

          <p className="project-overview__summary">{project.summary}</p>

          <div className="project-badges">
            {project.badges.map((badge) => (
              <span key={badge} className="project-badge">
                {badge}
              </span>
            ))}
          </div>

          <div className="project-actions">
            {project.appStoreUrl ? (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button project-button--primary"
              >
                <ArrowUpRight size={16} />
                {copy.project.downloadAppStore}
              </a>
            ) : null}

            {showSourceAction ? (
              <a
                href={project.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                <ExternalLink size={16} />
                {copy.project.openSource(project.source.label)}
              </a>
            ) : null}

            {supportingDocuments.map((document) => (
              <button
                key={document.id}
                type="button"
                className="project-button"
                onClick={() => onOpenDocument(document.id)}
              >
                <FileText size={16} />
                {document.title}
              </button>
            ))}
          </div>
        </div>

        <article
          className={`project-copy-card project-motivation-card ${project.motivationIsPlaceholder ? 'is-placeholder' : ''}`.trim()}
        >
          <p className="project-section__eyebrow">{copy.project.motivationEyebrow}</p>
          <h2>{project.motivationTitle}</h2>
          <p>{project.motivation}</p>
        </article>
      </section>

      <section className="project-section project-section--gallery">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.project.galleryEyebrow}</p>
            <h2>{copy.project.galleryTitle}</h2>
          </div>
          <span>
            {project.screenshots.length > 0
              ? copy.project.galleryReal
              : copy.project.officialDocumentSpace(project.name)}
          </span>
        </div>

        {project.screenshots.length > 0 ? (
          <div className={`project-gallery project-gallery--${project.galleryRatio ?? 'portrait'}`.trim()}>
            {project.screenshots.map((screenshot, index) => (
              <figure key={`${project.id}-${index}`} className="project-gallery__card">
                <div className="project-gallery__media">
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                </div>
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="project-gallery project-gallery--placeholder">
            {gallerySlots(project).map((slot) => (
              <article key={slot} className="project-placeholder-card">
                <strong>{slot}</strong>
                <p>{project.galleryPlaceholder}</p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.project.contributionEyebrow}</p>
            <h2>{copy.project.contributionTitle}</h2>
          </div>
        </div>

        <article
          className={`project-copy-card project-contribution-card ${hasContributionContent ? '' : 'is-placeholder'}`.trim()}
        >
          {hasContributionContent ? (
            <>
              {project.contributionSummary ? (
                <p className="project-contribution-card__summary">{project.contributionSummary}</p>
              ) : null}

              {project.contributionStack?.length ? (
                <div className="project-contribution-stack">
                  <span className="project-contribution-stack__label">{copy.project.contributionStackLabel}</span>
                  <div className="project-contribution-stack__items">
                    {project.contributionStack.map((item) => (
                      <span key={item} className="project-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.contributionHighlights?.length ? (
                <ul className="project-contribution-list">
                  {project.contributionHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {project.contributionLinks?.length ? (
                <div className="project-contribution-links">
                  {project.contributionLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button"
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </>
          ) : (
            <>
              <strong>{copy.project.contributionPlaceholderTitle}</strong>
              <p>{copy.project.contributionPlaceholderBody}</p>
            </>
          )}
        </article>
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.project.teamEyebrow}</p>
            <h2>{copy.project.teamTitle}</h2>
          </div>
        </div>

        <div className="project-team-groups">
          {project.team.length > 0 ? (
            teamGroups.map((group) => (
              <section
                key={group.title || 'team-default'}
                className={`project-team-group ${group.title ? '' : 'project-team-group--ungrouped'}`.trim()}
              >
                {group.title ? (
                    <div className="project-team-group__header">
                      <div className="project-team-group__heading">
                        <strong>{group.title}</strong>
                        {group.note ? <p>{group.note}</p> : null}
                      </div>
                    <span>{copy.project.peopleCount(group.members.length)}</span>
                  </div>
                ) : null}

                <div className="project-team-grid">
                  {group.members.map((member) => {
                    const CardTag = member.linkedin ? 'a' : 'article';
                    const metaLabel = member.linkedin ? copy.project.teamLinkedIn : member.meta ?? null;

                    return (
                      <CardTag
                        key={`${group.title}-${member.name}`}
                        className={`project-team-card ${member.isPlaceholder ? 'is-placeholder' : ''}`.trim()}
                        href={member.linkedin}
                        target={member.linkedin ? '_blank' : undefined}
                        rel={member.linkedin ? 'noopener noreferrer' : undefined}
                      >
                        <span className="project-team-card__avatar">
                          {member.photoSrc ? (
                            <img src={member.photoSrc} alt="" className="project-team-card__photo" />
                          ) : (
                            memberInitials(member.name)
                          )}
                        </span>

                        <div className="project-team-card__copy">
                          <div className="project-team-card__header">
                            <div className="project-team-card__title">
                              <strong>{member.name}</strong>
                              {member.tags?.map((tag) => (
                                <span key={`${member.name}-${tag}`} className="project-team-tag">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            {metaLabel ? <span>{metaLabel}</span> : null}
                          </div>

                          <p className="project-team-card__role">{member.role}</p>

                          {member.contribution ? <p>{member.contribution}</p> : null}
                        </div>
                      </CardTag>
                    );
                  })}
                </div>
              </section>
            ))
          ) : (
            <article className="project-team-card is-placeholder">
              <span className="project-team-card__avatar">+</span>
              <div className="project-team-card__copy">
                <div className="project-team-card__header">
                  <strong>{copy.project.teamPlaceholderTitle}</strong>
                  <span>{copy.project.teamPlaceholderMeta}</span>
                </div>
                <p className="project-team-card__role">{copy.project.teamPlaceholderRole}</p>
                <p>{copy.project.teamPlaceholderBody}</p>
              </div>
            </article>
          )}
        </div>
      </section>
    </article>
  );
}
