import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api/client';
import { Check, Clock } from '../components/Icons';
import { GuideIcon } from '../components/Glyphs';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { isGuideRead, toggleGuideRead } from '../lib/progress';
import { guideMedia, guidePlayers } from '../lib/media';
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
  const media = guideMedia[guide.slug];

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

      {media && (
        <figure className="article-banner">
          <img src={media.banner.src} alt={media.banner.alt} decoding="async" />
          <figcaption>
            <span>{media.banner.caption}</span>
            <a href={media.banner.credit.source} target="_blank" rel="noreferrer">
              Photo: {media.banner.credit.author} · {media.banner.credit.license}
            </a>
          </figcaption>
        </figure>
      )}

      <div className="article-layout">
        <article className="prose">
          {guide.sections.map((section, index) => {
            const figures = media?.figures?.filter((figure) => figure.afterSection === index) ?? [];

            return (
              <Fragment key={section.heading}>
                <section id={slugify(section.heading)}>
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

                {figures.map(({ image }) => (
                  <figure
                    className={`article-figure${image.fit === 'contain' ? ' article-figure--contain' : ''}`}
                    key={image.src}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                    <figcaption>
                      <span>{image.caption}</span>
                      <a href={image.credit.source} target="_blank" rel="noreferrer">
                        Photo: {image.credit.author} · {image.credit.license}
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </Fragment>
            );
          })}

          {guide.slug === 'players-to-know' && (
            <section className="player-gallery-section">
              <h2>Six players to watch</h2>
              <p>
                You do not need to know every squad. Start with a handful of players and follow
                what they do during a match.
              </p>
              <div className="player-grid">
                {guidePlayers.map((player) => (
                  <figure className="player-card" key={player.name}>
                    <div className="player-card__media">
                      <img
                        src={player.image.thumb ?? player.image.src}
                        alt={player.image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption>
                      <span className="player-card__role">
                        {player.role} · {player.club}
                      </span>
                      <strong>{player.name}</strong>
                      <p>{player.blurb}</p>
                      <a
                        className="player-card__credit"
                        href={player.image.credit.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Photo: {player.image.credit.author} · {player.image.credit.license}
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          <div className="article-end">
            <span className="article-end__check">
              <Check />
            </span>
            <div>
              <h2>End of guide</h2>
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
            <span className="eyebrow eyebrow--light">Club finder</span>
            <h3>Find a club to support</h3>
            <Link className="btn btn--accent btn--sm" to="/find-your-club">
              Open club finder
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
