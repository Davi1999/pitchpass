import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api/client';
import { GuideCard } from '../components/GuideCard';
import { ArrowRight, Check, Clock, Search } from '../components/Icons';
import { GuideIcon } from '../components/Glyphs';
import { PageHeader } from '../components/PageHeader';
import { ErrorState, EmptyState, PageSkeleton } from '../components/States';
import { useApi } from '../hooks/useApi';
import { guideMedia } from '../lib/media';
import { getReadGuides } from '../lib/progress';

export function LearnPage() {
  const { data, loading, error, reload } = useApi(api.getGuides, []);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  if (loading) return <PageSkeleton />;
  if (error || !data) {
    return (
      <div className="container section">
        <ErrorState message={error ?? 'Guides could not be loaded.'} onRetry={reload} />
      </div>
    );
  }

  const read = getReadGuides();
  const readCount = data.guides.filter((guide) => read.includes(guide.slug)).length;
  const progress = Math.round((readCount / Math.max(1, data.guides.length)) * 100);
  const spotlight =
    data.guides.find((guide) => guide.slug === 'premier-league-explained') ?? data.guides[0];
  const spotlightMedia = spotlight ? guideMedia[spotlight.slug] : undefined;

  const filtered = data.guides.filter((guide) => {
    const matchesCategory = category === 'All' || guide.category === category;
    const query = search.trim().toLowerCase();
    const matchesSearch =
      !query ||
      [guide.title, guide.summary, guide.category].join(' ').toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="Football guides"
        description="Guides to the rules, league format and football culture."
      >
        <div className="reading-progress">
          <div className="reading-progress__top">
            <span>
              <Check /> {readCount} of {data.guides.length} read
            </span>
            <strong>{progress}%</strong>
          </div>
          <div className="reading-progress__bar">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </PageHeader>

      {category === 'All' && !search && spotlight && (
        <section className="section section--tight">
          <div className="container">
            <Link className="spotlight-guide" to={`/learn/${spotlight.slug}`}>
              {spotlightMedia ? (
                <span className="spotlight-guide__thumb" aria-hidden="true">
                  <img
                    src={spotlightMedia.banner.thumb ?? spotlightMedia.banner.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </span>
              ) : (
                <div className="spotlight-guide__icon" aria-hidden="true">
                  <GuideIcon slug={spotlight.slug} />
                </div>
              )}
              <div className="spotlight-guide__copy">
                <span className="spotlight-guide__label">Start here</span>
                <h2>{spotlight.title}</h2>
                <p>{spotlight.summary}</p>
                <span className="spotlight-guide__meta">
                  <Clock />
                  {spotlight.readTime} min read · {spotlight.difficulty}
                </span>
              </div>
              <span className="spotlight-guide__cta">
                Read the guide
                <ArrowRight />
              </span>
            </Link>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <div className="filter-bar">
            <div className="filter-chips" role="group" aria-label="Filter guides by category">
              <button
                className={category === 'All' ? 'chip is-active' : 'chip'}
                type="button"
                onClick={() => setCategory('All')}
              >
                All <span>{data.guides.length}</span>
              </button>
              {data.categories.map((item) => (
                <button
                  className={category === item.name ? 'chip is-active' : 'chip'}
                  type="button"
                  key={item.name}
                  onClick={() => setCategory(item.name)}
                >
                  {item.name} <span>{item.count}</span>
                </button>
              ))}
            </div>
            <label className="search-field">
              <Search />
              <span className="sr-only">Search guides</span>
              <input
                type="search"
                placeholder="Search guides"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="results-row">
            <span>
              {filtered.length} {filtered.length === 1 ? 'guide' : 'guides'}
            </span>
            {(category !== 'All' || search) && (
              <button
                className="text-button"
                type="button"
                onClick={() => {
                  setCategory('All');
                  setSearch('');
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="guide-grid">
              {filtered.map((guide, index) => (
                <GuideCard guide={guide} index={index} key={guide.slug} />
              ))}
            </div>
          ) : (
            <EmptyState icon="question" title="No guides found">
              Try a different search term or clear the filters.
            </EmptyState>
          )}
        </div>
      </section>
    </>
  );
}
