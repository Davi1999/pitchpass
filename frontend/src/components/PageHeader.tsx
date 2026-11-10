import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div className="container">
      <header className="page-header">
        <span className="eyebrow">
          <span className="eyebrow__dot" />
          {eyebrow}
        </span>
        <div className="page-header__row">
          <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
          </div>
          {children && <div className="page-header__actions">{children}</div>}
        </div>
      </header>
    </div>
  );
}
