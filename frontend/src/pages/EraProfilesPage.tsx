import { useMemo, useState } from 'react';
import { api } from '../api/client';
import { ProfileCard } from '../components/ProfileCard';
import { PageHeader } from '../components/PageHeader';
import { Search } from '../components/Icons';
import { EmptyState, ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import type { EraProfile, EraProfileKind } from '../types';

export function EraProfilesPage({ kind }: { kind: EraProfileKind }) {
  const isPlayer = kind === 'player';
  const { data, loading, error, reload } = useApi<{ profiles: EraProfile[] }>(
    () =>
      isPlayer
        ? api.getEraPlayers().then((response) => ({ profiles: response.players }))
        : api.getEraManagers().then((response) => ({ profiles: response.managers })),
    [kind]
  );
  const [search, setSearch] = useState('');
  const [club, setClub] = useState('All');

  const profiles = data?.profiles ?? [];

  const clubs = useMemo(() => {
    const names = new Set<string>();
    for (const profile of profiles) {
      if (profile.club) names.add(profile.club.name);
    }
    return ['All', ...Array.from(names).sort()];
  }, [profiles]);

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState
          message={error ?? `The ${isPlayer ? 'player' : 'manager'} profiles could not be loaded.`}
          onRetry={reload}
        />
      </div>
    );
  }

  const query = search.trim().toLowerCase();
  const filtered = profiles.filter((profile) => {
    const matchesClub = club === 'All' || profile.club?.name === club;
    const matchesSearch =
      !query ||
      [profile.name, profile.role, profile.club?.name, profile.nationality, profile.summary]
        .join(' ')
        .toLowerCase()
        .includes(query);
    return matchesClub && matchesSearch;
  });

  return (
    <>
      <PageHeader
        eyebrow="Modern era"
        title={isPlayer ? 'Players to know' : 'Managers to know'}
        description={
          isPlayer
            ? 'Profiles of the forwards, creators, defenders and goalkeepers who have shaped the Premier League since 2022.'
            : 'The coaches behind the era: how they set up, what they changed and what to watch for on matchday.'
        }
      />

      <section className="section section--tight">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-chips" role="group" aria-label={`Filter ${isPlayer ? 'players' : 'managers'} by club`}>
              {clubs.map((name) => (
                <button
                  className={club === name ? 'chip is-active' : 'chip'}
                  type="button"
                  key={name}
                  onClick={() => setClub(name)}
                >
                  {name === 'All' ? 'All clubs' : name}
                </button>
              ))}
            </div>
            <label className="search-field">
              <Search />
              <span className="sr-only">Search profiles</span>
              <input
                type="search"
                placeholder={isPlayer ? 'Search players' : 'Search managers'}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="results-row">
            <span>
              {filtered.length} {filtered.length === 1 ? 'profile' : 'profiles'}
            </span>
            {(club !== 'All' || search) && (
              <button
                className="text-button"
                type="button"
                onClick={() => {
                  setClub('All');
                  setSearch('');
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="profile-grid">
              {filtered.map((profile) => (
                <ProfileCard profile={profile} key={profile.slug} />
              ))}
            </div>
          ) : (
            <EmptyState icon="search" title="No profiles found">
              Try a different search term or clear the filters.
            </EmptyState>
          )}
        </div>
      </section>
    </>
  );
}
