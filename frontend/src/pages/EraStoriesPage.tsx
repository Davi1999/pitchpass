import { useMemo, useState } from 'react';
import { api } from '../api/client';
import { PageHeader } from '../components/PageHeader';
import { StoryCard } from '../components/StoryCard';
import { EmptyState, ErrorState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';

export function EraStoriesPage() {
  const { data, loading, error, reload } = useApi(api.getEraStories, []);
  const [category, setCategory] = useState('All');

  const stories = data?.stories ?? [];
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(stories.map((story) => story.category))).sort()],
    [stories]
  );

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Stories could not be loaded.'} onRetry={reload} />
      </div>
    );
  }

  const filtered = category === 'All' ? stories : stories.filter((story) => story.category === category);

  return (
    <>
      <PageHeader
        eyebrow="Modern era"
        title="Stories that explain the league"
        description="Bigger-picture reads on the title race, tactics, money, squad building and the culture around the modern Premier League."
      />

      <section className="section section--tight">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-chips" role="group" aria-label="Filter stories by category">
              {categories.map((name) => (
                <button
                  className={category === name ? 'chip is-active' : 'chip'}
                  type="button"
                  key={name}
                  onClick={() => setCategory(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="results-row">
            <span>
              {filtered.length} {filtered.length === 1 ? 'story' : 'stories'}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="story-grid">
              {filtered.map((story, index) => (
                <StoryCard story={story} featured={index === 0 && category === 'All'} key={story.slug} />
              ))}
            </div>
          ) : (
            <EmptyState icon="book" title="No stories found">
              Try a different category.
            </EmptyState>
          )}
        </div>
      </section>
    </>
  );
}
