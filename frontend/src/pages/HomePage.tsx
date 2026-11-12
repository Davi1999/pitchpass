import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { ClubCrest } from '../components/ClubCrest';
import { GuideCard } from '../components/GuideCard';
import { ArrowRight, Flag } from '../components/Icons';
import { PathIcon } from '../components/Glyphs';
import { LiveBoard } from '../components/LiveBoard';
import { MatchCard } from '../components/MatchCard';
import { NewsCard } from '../components/NewsCard';
import { SectionHeading } from '../components/SectionHeading';
import { StandingsTable } from '../components/StandingsTable';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { guideMedia } from '../lib/media';
import type { MediaImage } from '../lib/media';
import { getBestScore } from '../lib/progress';

const homePhotos = [
  {
    title: 'Under the lights',
    copy: 'A Premier League ground fills up before kick-off.',
    image: guideMedia['premier-league-explained']?.banner
  },
  {
    title: 'The crowd',
    copy: 'Players and supporters share the big moments.',
    image: guideMedia['matchday-basics']?.figures?.[0]?.image
  },
  {
    title: 'Silverware',
    copy: 'Cups add a different kind of drama to the season.',
    image: guideMedia['cups-and-europe']?.figures?.[0]?.image
  }
].filter(
  (photo): photo is { title: string; copy: string; image: MediaImage } => Boolean(photo.image)
);

const startHere = [
  {
    number: '01',
    title: 'Learn the league',
    description: 'League format, points and the table.',
    to: '/learn/premier-league-explained',
    kind: 'learn' as const
  },
  {
    number: '02',
    title: 'Meet the clubs',
    description: 'History, stadiums and rivalries for all 20 clubs.',
    to: '/clubs',
    kind: 'clubs' as const
  },
  {
    number: '03',
    title: 'Find your club',
    description: 'Answer five questions to get three suggested clubs.',
    to: '/find-your-club',
    kind: 'finder' as const
  }
];

export function HomePage() {
  const [tick, setTick] = useState(0);
  const { data, loading, error, reload } = useApi(api.getHome, [tick]);

  useEffect(() => {
    const interval = window.setInterval(() => setTick((value) => value + 1), 20_000);
    return () => window.clearInterval(interval);
  }, []);

  if (loading && !data) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'No data available.'} onRetry={reload} />
      </div>
    );
  }

  const { liveMatch, upcomingMatches, featuredGuides, featuredClubs, table, news, season } = data;
  const best = getBestScore();

  return (
    <>
      <section className="hero">
        <div className="hero__texture" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">
              <span className="eyebrow__dot" />
              Beginner’s guide to the Premier League
            </span>
            <h1>
              Learn the league.
              <br />
              <span className="text-accent">Find your club.</span>
            </h1>
            <p className="hero__lede">
              PitchPass explains the rules, all 20 clubs, fixtures, results and how to choose
              a club to support.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/learn">
                Start with the basics
                <ArrowRight />
              </Link>
              <Link className="btn btn--ghost" to="/find-your-club">
                Find your club
              </Link>
            </div>
            <div className="hero__proof">
              <div>
                <strong>20</strong>
                <span>clubs</span>
              </div>
              <div>
                <strong>38</strong>
                <span>matchdays</span>
              </div>
              <div>
                <strong>380</strong>
                <span>matches a season</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__glow" aria-hidden="true" />
            {liveMatch ? (
              <LiveBoard match={liveMatch} />
            ) : (
              <div className="hero__empty-board">
                <span className="eyebrow">Live Hub</span>
                <h2>No live match</h2>
                <p>See the fixture list and league table.</p>
                <Link className="btn btn--accent btn--sm" to="/live">
                  Open Live Hub
                  <ArrowRight />
                </Link>
              </div>
            )}
            <div className="hero__floating hero__floating--rule">
              <span className="hero__floating-icon">
                <Flag />
              </span>
              <div>
                <strong>Level is onside.</strong>
                <span>Offside rule</span>
              </div>
            </div>
            <div className="hero__floating hero__floating--season">
              <span className="hero__floating-number">{season.matchday}</span>
              <div>
                <strong>Matchday {season.matchday}</strong>
                <span>of {season.totalMatchdays} this season</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Getting started" title="Start here" />
          <div className="path-grid">
            {startHere.map((item) => (
              <Link className="path-card" to={item.to} key={item.number}>
                <div className="path-card__top">
                  <span className="path-card__number">{item.number}</span>
                  <span className="path-card__icon" aria-hidden="true">
                    <PathIcon kind={item.kind} />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="path-card__cta">
                  Open
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Matchday"
            title="What it looks like"
            description="A few scenes from a Premier League weekend."
          />
          <div className="photo-band">
            {homePhotos.map((photo) => (
              <figure className="photo-band__item" key={photo.image.src}>
                <img
                  src={photo.image.thumb ?? photo.image.src}
                  alt={photo.image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <strong>{photo.title}</strong>
                  <span>{photo.copy}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Guides"
            title="Premier League basics"
            description="Short guides to the rules, league format and common terms."
            action={{ label: 'All guides', to: '/learn' }}
          />
          <div className="guide-grid guide-grid--four">
            {featuredGuides.slice(0, 4).map((guide, index) => (
              <GuideCard guide={guide} index={index} key={guide.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container">
          <div className="club-spotlight">
            <div className="club-spotlight__copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow__dot" />
                Club finder
              </span>
              <h2>Find a club to support</h2>
              <p>Answer five questions to get three suggested clubs.</p>
              <div className="club-spotlight__actions">
                <Link className="btn btn--accent" to="/find-your-club">
                  Open club finder
                  <ArrowRight />
                </Link>
                <Link className="btn btn--outline-light" to="/clubs">
                  Browse all clubs
                </Link>
              </div>
            </div>
            <div className="club-spotlight__crests">
              {featuredClubs.map((club) => (
                <Link className="club-spotlight__club" to={`/clubs/${club.id}`} key={club.id}>
                  <ClubCrest
                    name={club.name}
                    initials={club.initials}
                    colors={club.colors}
                    size="md"
                  />
                  <span>{club.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Live Hub"
            title="Fixtures and table"
            description={`Demo matchweek ${season.matchday}. Includes a simulated live match.`}
            action={{ label: 'Open Live Hub', to: '/live' }}
          />
          <div className="matchday-grid">
            <div className="panel">
              <div className="panel__head">
                <h3>Next up</h3>
                <span>Matchday {season.matchday + 1}</span>
              </div>
              <div className="fixture-list">
                {upcomingMatches.map((match) => (
                  <MatchCard match={match} key={match.id} />
                ))}
              </div>
            </div>

            <div className="panel">
              <div className="panel__head">
                <h3>Table snapshot</h3>
                <span>After matchday {season.matchday}</span>
              </div>
              <StandingsTable rows={table} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Articles"
            title="Latest articles"
            description="Short articles on rules, league format and football culture."
          />
          <div className="news-grid">
            {news.map((article) => (
              <NewsCard article={article} key={article.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--last">
        <div className="container">
          <div className="quiz-banner">
            <div className="quiz-banner__copy">
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow__dot" />
                Quiz
              </span>
              <h2>Premier League quiz</h2>
              <p>Ten questions on the rules, league and culture, with explanations.</p>
              <Link className="btn btn--accent" to="/quiz">
                Start the quiz
                <ArrowRight />
              </Link>
            </div>
            <div className="quiz-banner__score">
              <span className="quiz-banner__score-label">
                {best ? 'Your best' : 'Questions'}
              </span>
              <strong>
                {best ? `${best.score}/${best.total}` : '10'}
              </strong>
              <span>{best ? 'questions correct' : 'about 5 minutes'}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
