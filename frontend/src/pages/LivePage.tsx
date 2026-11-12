import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { ArrowRight, Refresh } from '../components/Icons';
import { DemoIcon } from '../components/Glyphs';
import { LiveBoard } from '../components/LiveBoard';
import { MatchCard } from '../components/MatchCard';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { StandingsTable } from '../components/StandingsTable';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';

export function LivePage() {
  const [tick, setTick] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(() => new Date());
  const matchesState = useApi(api.getMatches, [tick]);
  const standingsState = useApi(api.getStandings, []);

  useEffect(() => {
    const interval = window.setInterval(() => setTick((value) => value + 1), 20_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (matchesState.data) setLastUpdated(new Date());
  }, [matchesState.data]);

  if (matchesState.loading && !matchesState.data) return <PageSkeleton />;
  if (matchesState.error || !matchesState.data) {
    return (
      <div className="container section">
        <ErrorState
          message={matchesState.error ?? 'The Live Hub could not be loaded.'}
          onRetry={matchesState.reload}
        />
      </div>
    );
  }

  const matches = matchesState.data.matches;
  const liveMatch = matches.find((match) => match.status === 'LIVE') ?? null;
  const results = [...matches]
    .filter((match) => match.status === 'FT')
    .sort((a, b) => new Date(b.kickoff).getTime() - new Date(a.kickoff).getTime());
  const upcoming = matches
    .filter((match) => match.status === 'SCHEDULED')
    .sort((a, b) => new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime());
  const displayMatch = liveMatch ?? results[0] ?? upcoming[0] ?? null;
  const table = standingsState.data?.standings ?? [];

  function handleRefresh() {
    matchesState.reload();
    setLastUpdated(new Date());
  }

  return (
    <>
      <PageHeader
        eyebrow="Live Hub"
        title="Fixtures, results and table"
        description="Premier League fixtures, results and the table. The live match is a simulated demo feed, updated every 20 seconds."
      >
        <div className="live-header-actions">
          <span className="demo-pill">
            <span className="demo-pill__dot" />
            Demo data
          </span>
          <span className="updated-at">
            Updated{' '}
            {lastUpdated.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
          </span>
          <button className="btn btn--ghost btn--sm" type="button" onClick={handleRefresh}>
            <Refresh /> Refresh
          </button>
        </div>
      </PageHeader>

      <section className="section section--tight">
        <div className="container">
          <div className="live-layout">
            <div className="live-main">
              {displayMatch ? (
                <>
                  <div className="live-stage__head">
                    <h2>{liveMatch ? 'Live match' : 'Latest result'}</h2>
                    {!liveMatch && (
                      <span className="small-note">
                        The simulated match has finished. The next one starts when the API restarts.
                      </span>
                    )}
                  </div>
                  <LiveBoard match={displayMatch} expanded />

                  {results.length > 0 && (
                    <div className="panel live-results-panel">
                      <div className="panel__head">
                        <h3>Matchday {results[0]?.matchday ?? 13} so far</h3>
                        <span>{results.length} results</span>
                      </div>
                      <div className="live-results-grid">
                        {results.slice(0, 4).map((match) => (
                          <MatchCard match={match} showVenue={false} key={match.id} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="panel">
                  <h2>No match to show</h2>
                  <p className="muted-copy">The next demo fixture will appear here.</p>
                </div>
              )}
            </div>

            <aside className="live-aside">
              <div className="panel panel--dark">
                <div className="panel__head panel__head--light">
                  <h3>Next up</h3>
                  <span>Matchday {upcoming[0]?.matchday ?? 14}</span>
                </div>
                <div className="fixture-list fixture-list--dark">
                  {upcoming.slice(0, 4).map((match) => (
                    <MatchCard match={match} showVenue={false} key={match.id} />
                  ))}
                </div>
                <Link className="text-link text-link--light" to="/clubs">
                  All clubs
                  <ArrowRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Table"
            title="League table"
            description="Top four: European places. Bottom three: relegation. Goal difference is the first tiebreaker."
          />
          {standingsState.loading && !table.length ? (
            <div className="panel">
              <p className="muted-copy">Loading the table…</p>
            </div>
          ) : standingsState.error ? (
            <ErrorState message={standingsState.error} onRetry={standingsState.reload} />
          ) : (
            <StandingsTable rows={table} />
          )}
        </div>
      </section>

      <section className="section section--tight section--last">
        <div className="container">
          <div className="demo-disclaimer">
            <span className="demo-disclaimer__icon">
              <DemoIcon />
            </span>
            <div>
              <strong>This is a prototype, not a live score service.</strong>
              <p>
                Scores, fixtures and the table are demo data. The Liverpool–Manchester City
                clock starts at 34 minutes when the API starts and advances with real time.
              </p>
            </div>
            <Link className="text-link" to="/learn">
              Learn the league
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
