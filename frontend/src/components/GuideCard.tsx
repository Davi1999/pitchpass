import { Link } from 'react-router-dom';
import type { GuideSummary } from '../types';
import { Clock } from './Icons';
import { GuideIcon } from './Glyphs';

export function GuideCard({ guide, index }: { guide: GuideSummary; index?: number }) {
  return (
    <Link className="guide-card" to={`/learn/${guide.slug}`}>
      <div className="guide-card__top">
        <span className="guide-card__icon" aria-hidden="true">
          <GuideIcon slug={guide.slug} />
        </span>
        {index !== undefined && (
          <span className="guide-card__index">{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>
      <div className="guide-card__meta">
        <span>{guide.category}</span>
        <span className="meta-dot" />
        <span className="inline-meta">
          <Clock />
          {guide.readTime} min
        </span>
      </div>
      <h3>{guide.title}</h3>
      <p>{guide.summary}</p>
      <span className="guide-card__cta">
        Read the guide
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
