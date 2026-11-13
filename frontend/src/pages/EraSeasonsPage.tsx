import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { PageHeader } from '../components/PageHeader';
import { SeasonCard } from '../components/SeasonCard';
import { ArrowRight } from '../components/Icons';
import { ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';

export function EraSeasonsPage() {
  const { data, loading, error, reload } = useApi(api.getEraSeasons, []);

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Season recaps could not be loaded.'} onRetry={reload} />
      </div>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Modern era"
        title="The last four seasons"
        description="Quick recaps of 2022/23, 2023/24, 2024/25 and the current 2025/26 demo season — who won, who challenged and what changed."
      />

      <section className="section section--tight">
        <div className="container">
          <div className="season-grid">
            {data.seasons.map((season) => (
              <SeasonCard season={season} key={season.slug} />
            ))}
          </div>

          <div className="era-note">
            <strong>A note on the current season.</strong>
            <p>
              The 2025/26 season on PitchPass is seeded demo data. Use the recaps to understand how
              the league works, then check official sources for live results and tables.
            </p>
          </div>

          <div className="inline-banner era-cta">
            <div>
              <span className="eyebrow">
                <span className="eyebrow__dot" />
                Keep going
              </span>
              <h2>Meet the people behind the seasons</h2>
              <p>
                Player and manager profiles explain the styles, decisions and personalities that
                shaped these results.
              </p>
            </div>
            <div className="era-cta__actions">
              <Link className="btn btn--primary" to="/era/players">
                Player profiles
                <ArrowRight />
              </Link>
              <Link className="btn btn--ghost" to="/era/managers">
                Manager profiles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
