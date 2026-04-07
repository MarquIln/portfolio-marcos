import AppIcon from './AppIcon';

export default function AboutPage({ profile, copy }) {
  return (
    <article className="about-page">
      <section className="about-hero-grid">
        <div className="project-overview__main about-hero-card">
          <div className="about-hero__header">
            <AppIcon
              label={profile.name}
              iconKey="profile"
              className="about-hero__icon"
              accent="#5f8dff"
              accentSoft="#dce8ff"
            />

            <div>
              <p className="project-overview__eyebrow">{copy.profilePage.eyebrow}</p>
              <h1>{profile.name}</h1>
              <span className="about-hero__role">{profile.role}</span>
            </div>
          </div>

          <p className="about-hero__overview">{profile.overview}</p>
        </div>

        <article className="project-copy-card about-focus-card">
          <p className="project-section__eyebrow">{copy.profilePage.focusEyebrow}</p>
          <h2>{copy.profilePage.focusTitle}</h2>
          <p>{profile.currentFocus}</p>
        </article>
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.profilePage.journeyEyebrow}</p>
            <h2>{copy.profilePage.journeyTitle}</h2>
          </div>
        </div>

        <article className="project-copy-card about-copy-card">
          {profile.journey.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.profilePage.experienceEyebrow}</p>
            <h2>{copy.profilePage.experienceTitle}</h2>
          </div>
        </div>

        <div className="about-experience-list">
          {profile.professionalExperience.map((experience) => (
            <article
              key={`${experience.title}-${experience.organization}`}
              className="project-copy-card about-experience-card"
            >
              <div className="about-experience-card__header">
                <div>
                  <strong>{experience.title}</strong>
                  <span>{experience.organization}</span>
                </div>
                <span>{experience.period}</span>
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
        <div className="about-meta-grid">
          <div>
            <p className="project-section__eyebrow">{copy.profilePage.educationEyebrow}</p>
            <h2 className="about-meta-grid__title">{copy.profilePage.educationTitle}</h2>

            <div className="about-education-list">
              {profile.education.map((item) => (
                <article key={`${item.title}-${item.institution}`} className="project-copy-card about-meta-card">
                  <strong>{item.title}</strong>
                  <span>{item.institution}</span>
                </article>
              ))}
            </div>
          </div>

          <div>
            <p className="project-section__eyebrow">{copy.profilePage.languagesEyebrow}</p>
            <h2 className="about-meta-grid__title">{copy.profilePage.languagesTitle}</h2>

            <div className="about-language-list">
              {profile.languages.map((item) => (
                <article key={`${item.label}-${item.level}`} className="project-copy-card about-meta-card">
                  <strong>{item.label}</strong>
                  <span>{item.level}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-section__heading">
          <div>
            <p className="project-section__eyebrow">{copy.profilePage.technicalEyebrow}</p>
            <h2>{copy.profilePage.technicalTitle}</h2>
          </div>
        </div>

        <div className="about-skill-grid">
          {profile.technicalSkills.map((group) => (
            <article key={group.title} className="project-copy-card about-skill-card">
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
        </div>
      </section>
    </article>
  );
}
