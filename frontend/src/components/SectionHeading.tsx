import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from './Icons';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; to: string };
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  children
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__copy">
        {eyebrow && (
          <span className="eyebrow">
            <span className="eyebrow__dot" />
            {eyebrow}
          </span>
        )}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {(action || children) && (
        <div className="section-heading__actions">
          {action && (
            <Link className="text-link" to={action.to}>
              {action.label}
              <ArrowRight />
            </Link>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
