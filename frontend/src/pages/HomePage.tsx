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
import { getBestScore } from '../lib/progress';

const startHere = [
  {
    number: '01',
    title: 'Learn the league',
    description: 'Twenty clubs, 38 matchdays and three points for a win. Start with the simple stuff.',
    to: '/learn/premier-league-explained',
    kind: 'learn' as const
  },
  {
    number: '02',
    title: 'Meet the clubs',
    description: 'History, stadiums, rivalries and the vibe of every club in the league.',
    to: '/clubs',
    kind: 'clubs' as const
  },
  {
    number: '03',
    title: 'Find your club',
    description: 'Five quick questions. Three suggestions. Absolutely no commitment.',
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
              The Premier League, minus the confusion
            </span>
            <h1>
              Know the game.
              <br />
              <span className="text-accent">Find your club.</span>
            </h1>
            <p className="hero__lede">
              PitchPass is the beginner’s guide to English football. Learn the rules, meet
              all 20 clubs, follow the matchday drama — and pick a team to call your own.
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
                <h2>The next matchday is coming.</h2>
                <p>Check the fixture list and table while you wait.</p>
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
                <strong>Level = onside.</strong>
                <span>The one rule everyone argues about.</span>
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
          <SectionHeading
            eyebrow="Start here"
            title="Three ways to get up to speed"
            description="No prior knowledge needed. Pick a lane and go."
          />
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
                  Let’s go
                  <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The basics"
            title="Football, in plain English"
            description="Short guides for the rules, rituals and words you will hear every weekend."
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
                Find your people
              </span>
              <h2>Twenty clubs. One will feel like yours.</h2>
              <p>
                Big trophies or a proper local ground? A wall of noise or a smart underdog
                project? Answer five questions and we will narrow the field.
              </p>
              <div className="club-spotlight__actions">
                <Link className="btn btn--accent" to="/find-your-club">
                  Take the club finder
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
            eyebrow="The Live Hub"
            title="This week in the league"
            description={`Demo matchweek ${season.matchday} — the table, the fixtures and a simulated live game.`}
            action={{ label: 'Open the Live Hub', to: '/live' }}
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
            eyebrow="Good reads"
            title="Fresh from the touchline"
            description="Context for the conversations happening around you."
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
                Five-minute warm-up
              </span>
              <h2>Think you know the offside rule?</h2>
              <p>
                Ten questions on the league, the rules and the culture. Instant feedback,
                no judgment, bragging rights optional.
              </p>
              <Link className="btn btn--accent" to="/quiz">
                Take the quiz
                <ArrowRight />
              </Link>
            </div>
            <div className="quiz-banner__score">
              <span className="quiz-banner__score-label">
                {best ? 'Your best' : 'The challenge'}
              </span>
              <strong>
                {best ? `${best.score}/${best.total}` : '10'}
              </strong>
              <span>{best ? 'questions correct' : 'questions · 5 minutes'}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
