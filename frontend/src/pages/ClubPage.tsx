import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api/client';
import { ClubCrest } from '../components/ClubCrest';
import { GuideCard } from '../components/GuideCard';
import { ArrowRight, Check } from '../components/Icons';
import { MatchCard } from '../components/MatchCard';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { formatKickoff } from '../lib/format';
import { getMyClub, saveMyClub } from '../lib/progress';

function ordinal(value: number) {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const remainder = value % 100;
  return value + (suffixes[(remainder - 20) % 10] ?? suffixes[remainder] ?? suffixes[0]);
}

export function ClubPage() {
  const { id } = useParams();
  const { data, loading, error, reload } = useApi(
    () => (id ? api.getClub(id) : Promise.reject(new Error('Club not found.'))),
    [id]
  );
  const [myClub, setMyClub] = useState<string | null>(() => getMyClub());

  useEffect(() => {
    setMyClub(getMyClub());
  }, [id]);

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Club not found.'} onRetry={reload} />
      </div>
    );
  }

  const club = data.club;
  const style = {
    '--club-primary': club.colors.primary,
    '--club-secondary': club.colors.secondary,
    '--club-text': club.colors.text
  } as CSSProperties;

  function handleSetClub() {
    saveMyClub(club.id);
    setMyClub(club.id);
  }

  return (
    <div className="container club-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/clubs">Clubs</Link>
        <span>/</span>
        <span>{club.name}</span>
      </nav>

      <section className="club-hero" style={style}>
        <div className="club-hero__wash" aria-hidden="true" />
        <div className="club-hero__crest">
          <ClubCrest
            name={club.name}
            initials={club.initials}
            colors={club.colors}
            size="xl"
          />
        </div>
        <div className="club-hero__copy">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__dot" />
            {club.city} · Founded {club.founded}
          </span>
          <h1>{club.name}</h1>
          <p className="club-hero__nickname">
            {club.nickname} · {club.vibe}
          </p>
          <p className="club-hero__summary">{club.summary}</p>
          <div className="club-hero__actions">
            <button
              className={myClub === club.id ? 'btn btn--accent btn--sm' : 'btn btn--outline-light btn--sm'}
              type="button"
              onClick={handleSetClub}
              aria-pressed={myClub === club.id}
            >
              {myClub === club.id ? (
                <>
                  <Check /> Your club
                </>
              ) : (
                'Set as my club'
              )}
            </button>
            <Link className="btn btn--outline-light btn--sm" to="/find-your-club">
              Find another club
            </Link>
          </div>
        </div>
        <div className="club-hero__stats">
          <div>
            <span>Stadium</span>
            <strong>{club.stadium}</strong>
          </div>
          <div>
            <span>Founded</span>
            <strong>{club.founded}</strong>
          </div>
          <div>
            <span>This table</span>
            <strong>{club.standing ? `${ordinal(club.standing.position)} · ${club.standing.points} pts` : '—'}</strong>
          </div>
        </div>
      </section>

      <div className="club-layout">
        <div className="club-main">
          <section className="panel">
            <span className="eyebrow">Profile</span>
            <h2>About {club.name}</h2>
            <p>{club.description}</p>
            <div className="tag-row">
              {club.traits.map((trait) => (
                <span className="tag tag--soft" key={trait}>
                  {trait.replace('-', ' ')}
                </span>
              ))}
            </div>
          </section>

          <div className="fact-grid">
            <section className="fact-card">
              <span className="fact-card__label">Rivalry</span>
              <strong>{club.rivalry}</strong>
            </section>
            <section className="fact-card">
              <span className="fact-card__label">Honours</span>
              <ul>
                {club.honours.map((honour) => (
                  <li key={honour}>{honour}</li>
                ))}
              </ul>
            </section>
            <section className="fact-card fact-card--accent">
              <span className="fact-card__label">Fact</span>
              <p>{club.funFact}</p>
            </section>
          </div>

          <section className="club-fixtures">
            <div className="section-heading section-heading--small">
              <div className="section-heading__copy">
                <span className="eyebrow">Fixtures</span>
                <h2>Results and fixtures</h2>
              </div>
              <Link className="text-link" to="/live">
                Full matchday
                <ArrowRight />
              </Link>
            </div>
            <div className="two-col">
              <div>
                <h3 className="list-label">Latest results</h3>
                <div className="fixture-list">
                  {club.recentMatches.length > 0 ? (
                    club.recentMatches.map((match) => (
                      <MatchCard match={match} key={match.id} />
                    ))
                  ) : (
                    <p className="muted-copy">No completed matches in the demo data.</p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="list-label">Coming up</h3>
                <div className="fixture-list">
                  {club.upcomingMatches.length > 0 ? (
                    club.upcomingMatches.map((match) => (
                      <MatchCard match={match} key={match.id} />
                    ))
                  ) : (
                    <p className="muted-copy">No upcoming matches in the demo data.</p>
                  )}
                </div>
                {club.upcomingMatches[0] && (
                  <p className="small-note">
                    Next kick-off: {formatKickoff(club.upcomingMatches[0].kickoff)}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="club-guides">
            <div className="section-heading section-heading--small">
              <div className="section-heading__copy">
                <span className="eyebrow">Guides</span>
                <h2>Related guides</h2>
              </div>
            </div>
            <div className="guide-grid guide-grid--two">
              {club.guides.map((guide) => (
                <GuideCard guide={guide} key={guide.slug} />
              ))}
            </div>
          </section>
        </div>

        <aside className="club-aside">
          <div className="aside-card">
            <h3>Traits</h3>
            <div className="dna-list">
              {club.traits.map((trait) => (
                <span key={trait}>{trait.replace('-', ' ')}</span>
              ))}
            </div>
          </div>
          <div className="aside-card">
            <h3>At a glance</h3>
            <dl className="fact-list">
              <div>
                <dt>Nickname</dt>
                <dd>{club.nickname}</dd>
              </div>
              <div>
                <dt>City</dt>
                <dd>{club.city}</dd>
              </div>
              <div>
                <dt>Stadium</dt>
                <dd>{club.stadium}</dd>
              </div>
              <div>
                <dt>Founded</dt>
                <dd>{club.founded}</dd>
              </div>
            </dl>
          </div>
          <div className="aside-card aside-card--dark">
            <span className="eyebrow eyebrow--light">Club finder</span>
            <h3>Find another club</h3>
            <Link className="btn btn--accent btn--sm" to="/find-your-club">
              Open club finder
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
