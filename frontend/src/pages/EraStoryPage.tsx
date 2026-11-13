import { Link, useParams } from 'react-router-dom';
import { api } from '../api/client';
import { ProfileCard } from '../components/ProfileCard';
import { ArrowRight, Check, Clock } from '../components/Icons';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { formatPublished } from '../lib/format';
import { slugify } from '../lib/format';

export function EraStoryPage() {
  const { slug } = useParams();
  const { data, loading, error, reload } = useApi(
    () => (slug ? api.getEraStory(slug) : Promise.reject(new Error('Story not found.'))),
    [slug]
  );

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Story not found.'} onRetry={reload} />
      </div>
    );
  }

  const { story, relatedProfiles, relatedGuide } = data;

  return (
    <div className="container article-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/era">Modern era</Link>
        <span>/</span>
        <Link to="/era/stories">Stories</Link>
        <span>/</span>
        <span>{story.category}</span>
      </nav>

      <header className="article-header">
        <div className="tag-row">
          <span className="tag tag--accent">{story.category}</span>
          <span className="tag">Modern era</span>
        </div>
        <h1>{story.title}</h1>
        <p className="article-header__summary">{story.summary}</p>
        <div className="article-header__meta">
          <span>{formatPublished(story.publishedAt)}</span>
          <span className="meta-dot" />
          <span className="inline-meta">
            <Clock />
            {story.readTime} min read
          </span>
          <span className="meta-dot" />
          <span>{story.sections.length} sections</span>
        </div>
      </header>

      <div className="article-layout">
        <article className="prose">
          {story.sections.map((section) => (
            <section id={slugify(section.heading)} key={section.heading}>
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

          <aside className="story-takeaways">
            <span className="eyebrow">The short version</span>
            <h2>Three things to remember</h2>
            <ul>
              {story.takeaways.map((takeaway) => (
                <li key={takeaway}>
                  <Check />
                  {takeaway}
                </li>
              ))}
            </ul>
          </aside>

          {relatedProfiles.length > 0 && (
            <section className="profile-related">
              <h2>People in this story</h2>
              <div className="profile-grid profile-grid--three">
                {relatedProfiles.slice(0, 3).map((profile) => (
                  <ProfileCard profile={profile} key={profile.slug} />
                ))}
              </div>
            </section>
          )}

          <div className="article-end">
            <span className="article-end__check">
              <Check />
            </span>
            <div>
              <h2>Keep exploring</h2>
            </div>
            <div className="article-end__actions">
              <Link className="btn btn--primary btn--sm" to="/era/stories">
                All stories
              </Link>
              <Link className="btn btn--ghost btn--sm" to="/era">
                Modern era hub
              </Link>
            </div>
          </div>
        </article>

        <aside className="article-aside">
          <div className="aside-card">
            <h3>In this story</h3>
            <ol className="toc">
              {story.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#${slugify(section.heading)}`}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {relatedProfiles.length > 0 && (
            <div className="aside-card">
              <h3>People mentioned</h3>
              <ul className="aside-people">
                {relatedProfiles.slice(0, 5).map((profile) => (
                  <li key={profile.slug}>
                    <Link
                      to={`/era/${profile.kind === 'player' ? 'players' : 'managers'}/${profile.slug}`}
                    >
                      <strong>{profile.name}</strong>
                      <span>{profile.role}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedGuide && (
            <div className="aside-card">
              <h3>Go deeper</h3>
              <Link className="aside-guide-link" to={`/learn/${relatedGuide.slug}`}>
                <span>{relatedGuide.category}</span>
                <strong>{relatedGuide.title}</strong>
                <ArrowRight />
              </Link>
            </div>
          )}

          <div className="aside-card aside-card--dark">
            <span className="eyebrow eyebrow--light">The modern era</span>
            <h3>Players, managers and seasons</h3>
            <Link className="btn btn--accent btn--sm" to="/era">
              Open the era hub
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
