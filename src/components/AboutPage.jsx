import { ArrowUpRight, Sparkles } from 'lucide-react';
import AppIcon from './AppIcon';

function terminalSlug(value = '') {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function TerminalInline({ command }) {
  return (
    <div className="about-modern-terminal">
      <span className="about-modern-terminal__prompt">marcos@portfolioOS</span>
      <span className="about-modern-terminal__command">{command}</span>
    </div>
  );
}

function countSkills(groups = []) {
  return new Set(groups.flatMap((group) => group.items ?? [])).size;
}

function formatLinkDisplay(url = '') {
  return url.replace(/^mailto:/, '').replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export default function AboutPage({ profile, copy }) {
  const primarySkillGroup = profile.technicalSkills[0];
  const skillTotal = countSkills(profile.technicalSkills);
  const hasCurrentFocus = Boolean(profile.currentFocus);

  return (
    <article className="about-page about-page--editorial">
      <section className="about-editorial-hero">
        <div className="about-editorial-hero__main">
          <TerminalInline command="open about-me --mode editorial" />

          <div className="about-editorial-identity">
            <AppIcon
              src={profile.photoSrc}
              label={profile.name}
              iconKey="profile"
              className="about-editorial-identity__icon"
              accent="#5f8dff"
              accentSoft="#dce8ff"
              imageFit="contain"
            />

            <div className="about-editorial-identity__copy">
              <p className="project-section__eyebrow">{copy.profilePage.eyebrow}</p>
              <h1>{profile.name}</h1>
              <span className="about-editorial-identity__role">{profile.role}</span>
            </div>
          </div>

          <p className="about-editorial-hero__overview">{profile.overview}</p>

          <div className="about-editorial-hero__stats">
            <article className="about-editorial-stat">
              <strong>{profile.professionalExperience.length}</strong>
              <span>{copy.profilePage.experienceTitle}</span>
            </article>

            <article className="about-editorial-stat">
              <strong>{profile.languages.length}</strong>
              <span>{copy.profilePage.languagesTitle}</span>
            </article>

            <article className="about-editorial-stat">
              <strong>{skillTotal}</strong>
              <span>{copy.profilePage.technicalTitle}</span>
            </article>
          </div>

          <div className="about-editorial-links">
            {profile.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="about-editorial-link"
              >
                <span>{link.label}</span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        </div>

        <aside className="about-editorial-hero__side">
          <article className="about-editorial-panel about-editorial-panel--focus">
            <div className="about-editorial-panel__header">
              <span className="about-editorial-panel__badge">
                <Sparkles size={14} />
                {copy.profilePage.focusEyebrow}
              </span>
              <h2>{copy.profilePage.focusTitle}</h2>
            </div>

            <p>{profile.currentFocus}</p>
          </article>

          {primarySkillGroup ? (
            <article className="about-editorial-panel">
              <div className="about-editorial-panel__header">
                <TerminalInline command={`ls skills/${terminalSlug(primarySkillGroup.title)}`} />
                <h2>{primarySkillGroup.title}</h2>
              </div>

              <div className="about-chip-list">
                {primarySkillGroup.items.slice(0, 6).map((item) => (
                  <span key={item} className="about-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ) : null}
        </aside>
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.profilePage.journeyEyebrow}</p>
            <h2>{copy.profilePage.journeyTitle}</h2>
          </div>
        </div>

        <div className="about-editorial-timeline">
          {profile.journey.map((paragraph, index) => (
            <article key={paragraph} className="about-editorial-timeline__item">
              <span className="about-editorial-timeline__step">{String(index + 1).padStart(2, '0')}</span>
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.profilePage.experienceEyebrow}</p>
            <h2>{copy.profilePage.experienceTitle}</h2>
          </div>
        </div>

        <div className="about-editorial-experience-grid">
          {profile.professionalExperience.map((experience) => (
            <article key={`${experience.title}-${experience.organization}`} className="about-editorial-card">
              <TerminalInline command={`cat experience/${terminalSlug(experience.organization)}.md`} />

              <div className="about-editorial-card__header">
                <div>
                  <strong>{experience.title}</strong>
                  <span>{experience.organization}</span>
                </div>
                <time>{experience.period}</time>
              </div>

              <ul className="about-list">
                {experience.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="project-section">
        <div className="about-editorial-meta-grid">
          <article className="about-editorial-card">
            <div className="about-editorial-card__header">
              <div>
                <p className="project-section__eyebrow">{copy.profilePage.educationEyebrow}</p>
                <h2 className="about-meta-grid__title">{copy.profilePage.educationTitle}</h2>
              </div>
            </div>

            <div className="about-editorial-list">
              {profile.education.map((item) => (
                <div key={`${item.title}-${item.institution}`} className="about-editorial-list__item">
                  <strong>{item.title}</strong>
                  <span>{item.institution}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="about-editorial-card">
            <div className="about-editorial-card__header">
              <div>
                <p className="project-section__eyebrow">{copy.profilePage.languagesEyebrow}</p>
                <h2 className="about-meta-grid__title">{copy.profilePage.languagesTitle}</h2>
              </div>
            </div>

            <div className="about-editorial-list">
              {profile.languages.map((item) => (
                <div key={`${item.label}-${item.level}`} className="about-editorial-list__item">
                  <strong>{item.label}</strong>
                  <span>{item.level}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="about-editorial-card about-editorial-card--contact">
            <div className="about-editorial-card__header">
              <div>
                <p className="project-section__eyebrow">{copy.profilePage.linksEyebrow}</p>
                <h2 className="about-meta-grid__title">{copy.profilePage.linksTitle}</h2>
              </div>
            </div>

            <div className="about-editorial-contact-list">
              {profile.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="about-editorial-contact"
                >
                  <strong>{link.label}</strong>
                  <span>{formatLinkDisplay(link.url)}</span>
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.profilePage.technicalEyebrow}</p>
            <h2>{copy.profilePage.technicalTitle}</h2>
          </div>
        </div>

        <div className="about-skill-grid about-skill-grid--editorial">
          {profile.technicalSkills.map((group) => (
            <article key={group.title} className="about-editorial-card about-editorial-card--skill">
              <TerminalInline command={`ls skills/${terminalSlug(group.title)}`} />
              <strong>{group.title}</strong>
              <div className="about-chip-list">
                {group.items.map((item) => (
                  <span key={item} className="about-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}

          {hasCurrentFocus ? (
            <article className="about-editorial-card about-editorial-card--summary">
              <strong>{copy.profilePage.focusTitle}</strong>
              <p>{profile.currentFocus}</p>
            </article>
          ) : null}
        </div>
      </section>
    </article>
  );
}
