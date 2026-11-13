import { Link, useParams } from 'react-router-dom';
import { api } from '../api/client';
import { ClubCrest } from '../components/ClubCrest';
import { ProfileCard } from '../components/ProfileCard';
import { ArrowRight, Trophy } from '../components/Icons';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { slugify } from '../lib/format';

export function EraSeasonPage() {
  const { slug } = useParams();
  const { data, loading, error, reload } = useApi(
    () => (slug ? api.getEraSeason(slug) : Promise.reject(new Error('Season not found.'))),
    [slug]
  );

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Season recap not found.'} onRetry={reload} />
      </div>
    );
  }

  const { season, relatedProfiles, relatedGuide } = data;

  return (
    <div className="container article-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/era">Modern era</Link>
        <span>/</span>
        <Link to="/era/seasons">Seasons</Link>
        <span>/</span>
        <span>{season.label}</span>
      </nav>

      <header className="season-hero">
        <div className="season-hero__copy">
          <div className="tag-row">
            <span className="tag tag--accent">{season.label}</span>
            <span className="tag tag--soft">{season.status}</span>
          </div>
          <h1>{season.label} season recap</h1>
          <p>{season.summary}</p>
          <div className="season-hero__champion">
            {season.championClub && (
              <ClubCrest
                name={season.championClub.name}
                initials={season.championClub.initials}
                colors={season.championClub.colors}
                size="lg"
              />
            )}
            <div>
              <span>Champions</span>
              <strong>{season.champion}</strong>
            </div>
          </div>
        </div>

        <div className="season-hero__stats">
          <div>
            <span>Champions</span>
            <strong>{season.champion}</strong>
          </div>
          <div>
            <span>Runners-up</span>
            <strong>{season.runnerUp}</strong>
          </div>
          <div>
            <span>Points</span>
            <strong>{season.points}</strong>
          </div>
          <div>
            <span>Top scorer</span>
            <strong>{season.topScorer}</strong>
            <em>{season.topScorerDetail}</em>
          </div>
        </div>
      </header>

      <div className="article-layout">
        <article className="prose">
          {season.sections.map((section) => (
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

          <section className="season-moments">
            <h2>Moments that defined the season</h2>
            <ol className="milestone-list">
              {season.moments.map((moment) => (
                <li key={`${moment.label}-${moment.text}`}>
                  <span>{moment.label}</span>
                  <p>{moment.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="season-table-section">
            <h2>Top of the table</h2>
            <div className="season-table">
              {season.table.map((row) => (
                <Link className="season-table__row" to={`/clubs/${row.clubId}`} key={row.clubId}>
                  <span className="season-table__pos">{row.position}</span>
                  <ClubCrest
                    name={row.club.name}
                    initials={row.club.initials}
                    colors={row.club.colors}
                    size="xs"
                  />
                  <strong>{row.club.name}</strong>
                  <span>{row.points} pts</span>
                </Link>
              ))}
            </div>
          </section>

          <aside className="story-takeaways">
            <span className="eyebrow">The short version</span>
            <h2>Three takeaways</h2>
            <ul>
              {season.takeaways.map((takeaway) => (
                <li key={takeaway}>
                  <Trophy />
                  {takeaway}
                </li>
              ))}
            </ul>
          </aside>

          {relatedProfiles.length > 0 && (
            <section className="profile-related">
              <h2>People from this season</h2>
              <div className="profile-grid profile-grid--three">
                {relatedProfiles.slice(0, 3).map((profile) => (
                  <ProfileCard profile={profile} key={profile.slug} />
                ))}
              </div>
            </section>
          )}

          <div className="article-end">
            <span className="article-end__check">
              <Trophy />
            </span>
            <div>
              <h2>More season recaps</h2>
            </div>
            <div className="article-end__actions">
              <Link className="btn btn--primary btn--sm" to="/era/seasons">
                All seasons
              </Link>
              <Link className="btn btn--ghost btn--sm" to="/era">
                Modern era hub
              </Link>
            </div>
          </div>
        </article>

        <aside className="article-aside">
          <div className="aside-card">
            <h3>Season at a glance</h3>
            <dl className="fact-list">
              <div>
                <dt>Champions</dt>
                <dd>{season.champion}</dd>
              </div>
              <div>
                <dt>Runners-up</dt>
                <dd>{season.runnerUp}</dd>
              </div>
              <div>
                <dt>Points</dt>
                <dd>{season.points}</dd>
              </div>
              <div>
                <dt>Top scorer</dt>
                <dd>
                  {season.topScorer} · {season.topScorerDetail}
                </dd>
              </div>
            </dl>
          </div>

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
            <span className="eyebrow eyebrow--light">Next</span>
            <h3>Meet the players</h3>
            <Link className="btn btn--accent btn--sm" to="/era/players">
              Player profiles
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
