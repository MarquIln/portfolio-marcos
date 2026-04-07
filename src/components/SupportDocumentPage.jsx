import { ExternalLink, FileText } from 'lucide-react';

export default function SupportDocumentPage({ document, copy }) {
  return (
    <article className="support-page">
      <section className="support-page__hero">
        <p className="support-page__eyebrow">{document.eyebrow}</p>
        <h1>{document.title}</h1>
        <p>{document.summary}</p>
      </section>

      <section className="support-page__grid">
        {document.sections.map((section) => (
          <article key={section.title} className="support-page__card">
            <div className="support-page__card-heading">
              <FileText size={18} />
              <strong>{section.title}</strong>
            </div>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>

      <section className="support-page__footer">
        <article className="support-page__card">
          <strong>{copy.support.contact}</strong>
          <div className="support-page__contacts">
            {document.contact.map((item) => (
              <a key={item.label} href={item.href} className="support-page__contact-link">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </article>

        <article className="support-page__card support-page__card--meta">
          <strong>{copy.support.lastUpdated}</strong>
          <p>{document.lastUpdated}</p>
        </article>
      </section>
    </article>
  );
}
