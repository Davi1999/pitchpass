import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api/client';
import { Check, Clock } from '../components/Icons';
import { GuideIcon } from '../components/Glyphs';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { isGuideRead, toggleGuideRead } from '../lib/progress';
import { slugify } from '../lib/format';

export function GuidePage() {
  const { slug } = useParams();
  const { data, loading, error, reload } = useApi(
    () => (slug ? api.getGuide(slug) : Promise.reject(new Error('Guide not found.'))),
    [slug]
  );
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    setIsRead(slug ? isGuideRead(slug) : false);
  }, [slug]);

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Guide not found.'} onRetry={reload} />
      </div>
    );
  }

  const guide = data.guide;

  function handleReadToggle() {
    if (!slug) return;
    toggleGuideRead(slug);
    setIsRead((value) => !value);
  }

  return (
    <div className="container article-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/learn">Learn</Link>
        <span>/</span>
        <span>{guide.category}</span>
      </nav>

      <header className="article-header">
        <div className="article-header__top">
          <span className="article-header__icon" aria-hidden="true">
            <GuideIcon slug={guide.slug} />
          </span>
          <div className="tag-row">
            <span className="tag tag--accent">{guide.category}</span>
            <span className="tag">{guide.difficulty}</span>
          </div>
        </div>
        <h1>{guide.title}</h1>
        <p className="article-header__summary">{guide.summary}</p>
        <div className="article-header__meta">
          <span className="inline-meta">
            <Clock />
            {guide.readTime} min read
          </span>
          <span className="meta-dot" />
          <span>{guide.sections.length} sections</span>
          <span className="meta-dot" />
          <span>{guide.keyTerms.length} key words</span>
          <button
            className={isRead ? 'read-toggle is-read' : 'read-toggle'}
            type="button"
            aria-pressed={isRead}
            onClick={handleReadToggle}
          >
            <Check />
            {isRead ? 'Read' : 'Mark as read'}
          </button>
        </div>
      </header>

      <div className="article-layout">
        <article className="prose">
          {guide.sections.map((section) => (
            <section key={section.heading} id={slugify(section.heading)}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="article-end">
            <span className="article-end__check">
              <Check />
            </span>
            <div>
              <h2>That is the guide.</h2>
              <p>Next up: test yourself, or keep exploring the rest of the library.</p>
            </div>
            <div className="article-end__actions">
              <Link className="btn btn--primary btn--sm" to="/quiz">
                Take the quiz
              </Link>
              <Link className="btn btn--ghost btn--sm" to="/learn">
                All guides
              </Link>
            </div>
          </div>
        </article>

        <aside className="article-aside">
          <div className="aside-card">
            <h3>In this guide</h3>
            <ol className="toc">
              {guide.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#${slugify(section.heading)}`}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="aside-card">
            <h3>Key words</h3>
            <dl className="key-terms">
              {guide.keyTerms.map((term) => (
                <div key={term.term}>
                  <dt>{term.term}</dt>
                  <dd>{term.definition}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="aside-card aside-card--dark">
            <span className="eyebrow eyebrow--light">Not sure where to start?</span>
            <h3>Find a club that fits you.</h3>
            <Link className="btn btn--accent btn--sm" to="/find-your-club">
              Try the club finder
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
