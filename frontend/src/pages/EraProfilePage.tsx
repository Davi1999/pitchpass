import { Link, useParams } from 'react-router-dom';
import { api } from '../api/client';
import { ClubCrest } from '../components/ClubCrest';
import { ProfileCard } from '../components/ProfileCard';
import { StoryCard } from '../components/StoryCard';
import { ArrowRight, Trophy } from '../components/Icons';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { eraPortraits } from '../lib/media';
import { slugify } from '../lib/format';
import type { EraProfileKind } from '../types';

export function EraProfilePage({ kind }: { kind: EraProfileKind }) {
  const { slug } = useParams();
  const isPlayer = kind === 'player';
  const { data, loading, error, reload } = useApi(
    () =>
      slug
        ? isPlayer
          ? api.getEraPlayer(slug)
          : api.getEraManager(slug)
        : Promise.reject(new Error('Profile not found.')),
    [kind, slug]
  );

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Profile not found.'} onRetry={reload} />
      </div>
    );
  }

  const { profile, relatedProfiles, relatedStories, relatedGuide } = data;
  const portrait = eraPortraits[profile.slug];
  const indexLabel = isPlayer ? 'Players' : 'Managers';
  const indexTo = isPlayer ? '/era/players' : '/era/managers';

  return (
    <div className="container article-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/era">Modern era</Link>
        <span>/</span>
        <Link to={indexTo}>{indexLabel}</Link>
        <span>/</span>
        <span>{profile.name}</span>
      </nav>

      <header className="profile-hero">
        <div className="profile-hero__media">
          {portrait ? (
            <img src={portrait.src} alt={portrait.alt} decoding="async" />
          ) : (
            <span className="profile-hero__monogram" aria-hidden="true">
              {profile.name
                .split(' ')
                .map((part) => part[0])
                .slice(0, 2)
                .join('')}
            </span>
          )}
        </div>

        <div className="profile-hero__copy">
          <div className="tag-row">
            <span className="tag tag--accent">{isPlayer ? 'Player profile' : 'Manager profile'}</span>
            <span className="tag">{profile.role}</span>
            <span className="tag tag--soft">{profile.nationality}</span>
          </div>
          <h1>{profile.name}</h1>
          {profile.club && (
            <Link className="profile-hero__club" to={`/clubs/${profile.club.id}`}>
              <ClubCrest
                name={profile.club.name}
                initials={profile.club.initials}
                colors={profile.club.colors}
                size="sm"
              />
              {profile.club.name}
              <ArrowRight />
            </Link>
          )}
          <p className="profile-hero__summary">{profile.summary}</p>
          <div className="tag-row">
            {profile.strengths.map((strength) => (
              <span className="tag tag--soft" key={strength}>
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div className="profile-hero__stats">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="article-layout">
        <article className="prose">
          <p className="profile-lead">{profile.introduction}</p>

          {profile.sections.map((section) => (
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

          {profile.milestones.length > 0 && (
            <section className="profile-milestones">
              <h2>Career moments</h2>
              <ol className="milestone-list">
                {profile.milestones.map((milestone) => (
                  <li key={`${milestone.year}-${milestone.event}`}>
                    <span>{milestone.year}</span>
                    <p>{milestone.event}</p>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {profile.callout && (
            <aside className="profile-callout">
              <span className="eyebrow">{profile.callout.label}</span>
              <p>{profile.callout.text}</p>
            </aside>
          )}

          {relatedProfiles.length > 0 && (
            <section className="profile-related">
              <h2>Related profiles</h2>
              <div className="profile-grid profile-grid--three">
                {relatedProfiles.slice(0, 3).map((related) => (
                  <ProfileCard profile={related} key={related.slug} />
                ))}
              </div>
            </section>
          )}

          {relatedStories.length > 0 && (
            <section className="profile-related">
              <h2>Related stories</h2>
              <div className="story-grid story-grid--two">
                {relatedStories.slice(0, 2).map((story) => (
                  <StoryCard story={story} key={story.slug} />
                ))}
              </div>
            </section>
          )}

          <div className="article-end">
            <span className="article-end__check">
              <Trophy />
            </span>
            <div>
              <h2>Explore more of the era</h2>
            </div>
            <div className="article-end__actions">
              <Link className="btn btn--primary btn--sm" to={indexTo}>
                All {indexLabel.toLowerCase()}
              </Link>
              <Link className="btn btn--ghost btn--sm" to="/era">
                Modern era hub
              </Link>
            </div>
          </div>
        </article>

        <aside className="article-aside">
          <div className="aside-card">
            <h3>At a glance</h3>
            <dl className="fact-list">
              <div>
                <dt>Role</dt>
                <dd>{profile.role}</dd>
              </div>
              <div>
                <dt>Club</dt>
                <dd>{profile.club?.name ?? '—'}</dd>
              </div>
              <div>
                <dt>Nationality</dt>
                <dd>{profile.nationality}</dd>
              </div>
              <div>
                <dt>Born</dt>
                <dd>{profile.born}</dd>
              </div>
            </dl>
          </div>

          {profile.honours.length > 0 && (
            <div className="aside-card">
              <h3>Honours</h3>
              <ul className="honour-list">
                {profile.honours.map((honour) => (
                  <li key={honour}>{honour}</li>
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
            <span className="eyebrow eyebrow--light">All profiles</span>
            <h3>Meet the rest of the era</h3>
            <Link className="btn btn--accent btn--sm" to={indexTo}>
              Browse {indexLabel.toLowerCase()}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
