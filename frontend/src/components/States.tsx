import type { ReactNode } from 'react';
import { AlertTriangle, BookOpen, Question, Refresh, Search } from './Icons';

export function PageSkeleton() {
  return (
    <div className="container page-skeleton" aria-label="Loading" role="status">
      <div className="skeleton skeleton--eyebrow" />
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--text" />
      <div className="skeleton-grid">
        <div className="skeleton skeleton--card" />
        <div className="skeleton skeleton--card" />
        <div className="skeleton skeleton--card" />
      </div>
    </div>
  );
}

export function ErrorState({
  message,
  onRetry
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div className="state-card state-card--error">
      <span className="state-card__icon state-card__icon--error">
        <AlertTriangle />
      </span>
      <h2>That did not load</h2>
      <p>{message}</p>
      {onRetry && (
        <button className="btn btn--primary btn--sm" type="button" onClick={onRetry}>
          <Refresh /> Try again
        </button>
      )}
    </div>
  );
}

const emptyIcons = {
  search: Search,
  question: Question,
  book: BookOpen
};

export function EmptyState({
  icon = 'search',
  title,
  children
}: {
  icon?: keyof typeof emptyIcons;
  title: string;
  children?: ReactNode;
}) {
  const Icon = emptyIcons[icon];

  return (
    <div className="state-card">
      <span className="state-card__icon">
        <Icon />
      </span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
