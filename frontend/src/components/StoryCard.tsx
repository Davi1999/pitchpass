import { Link } from 'react-router-dom';
import type { EraStory } from '../types';
import { formatPublished } from '../lib/format';
import { ArrowUpRight, Clock } from './Icons';

export function StoryCard({ story, featured = false }: { story: EraStory; featured?: boolean }) {
  return (
    <Link
      className={featured ? 'story-card story-card--featured' : 'story-card'}
      to={`/era/stories/${story.slug}`}
    >
      <div className="story-card__top">
        <span className="tag tag--accent">{story.category}</span>
        <span className="story-card__meta">
          <Clock />
          {story.readTime} min
        </span>
      </div>
      <h3>{story.title}</h3>
      <p>{story.summary}</p>
      <div className="story-card__footer">
        <span>{formatPublished(story.publishedAt)}</span>
        <span className="story-card__arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
