import { Link } from 'react-router-dom';
import { ArrowRight, Ball } from '../components/Icons';

export function NotFoundPage() {
  return (
    <div className="container not-found">
      <span className="not-found__ball" aria-hidden="true">
        <Ball />
      </span>
      <span className="eyebrow">
        <span className="eyebrow__dot" />
        404
      </span>
      <h1>Page not found</h1>
      <p>The link may be old or mistyped.</p>
      <div className="not-found__actions">
        <Link className="btn btn--primary" to="/">
          Back to home
          <ArrowRight />
        </Link>
        <Link className="btn btn--ghost" to="/learn">
          Browse the guides
        </Link>
      </div>
    </div>
  );
}
