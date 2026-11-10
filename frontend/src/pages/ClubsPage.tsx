import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { ClubCard } from '../components/ClubCard';
import { ArrowRight, Search } from '../components/Icons';
import { PageHeader } from '../components/PageHeader';
import { EmptyState, ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';

export function ClubsPage() {
  const { data, loading, error, reload } = useApi(api.getClubs, []);
  const [search, setSearch] = useState('');

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Clubs could not be loaded.'} onRetry={reload} />
      </div>
    );
  }

  const query = search.trim().toLowerCase();
  const clubs = data.clubs.filter((club) =>
    !query
      ? true
      : [club.name, club.nickname, club.city, club.stadium, club.vibe, ...club.traits]
          .join(' ')
          .toLowerCase()
          .includes(query)
  );

  return (
    <>
      <PageHeader
        eyebrow="Club directory"
        title="Twenty clubs. One league."
        description="Every club has a place, a personality and a reason to support them. Use this directory as your scouting report."
      >
        <label className="search-field search-field--large">
          <Search />
          <span className="sr-only">Search clubs</span>
          <input
            type="search"
            placeholder="Search by club, city or vibe"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </PageHeader>

      <section className="section section--tight">
        <div className="container">
          <div className="results-row">
            <span>
              Showing {clubs.length} of {data.total} clubs
            </span>
            {query && (
              <button className="text-button" type="button" onClick={() => setSearch('')}>
                Clear search
              </button>
            )}
          </div>

          {clubs.length > 0 ? (
            <div className="club-grid">
              {clubs.map((club) => (
                <ClubCard club={club} key={club.id} />
              ))}
            </div>
          ) : (
            <EmptyState icon="search" title="No club found">
              Try a city like “London”, a nickname like “Gunners”, or a vibe like “underdog”.
            </EmptyState>
          )}

          <div className="inline-banner">
            <div>
              <span className="eyebrow">
                <span className="eyebrow__dot" />
                Still undecided?
              </span>
              <h2>Let the club finder do the narrowing.</h2>
              <p>Five questions about what you enjoy. Three clubs that might fit.</p>
            </div>
            <Link className="btn btn--primary" to="/find-your-club">
              Find my club
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
