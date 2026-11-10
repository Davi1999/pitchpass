import { Link } from 'react-router-dom';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="logo" to="/" aria-label="PitchPass home">
      <span className="logo__mark" aria-hidden="true">
        <span className="logo__dot" />
      </span>
      {!compact && (
        <span className="logo__word">
          Pitch<span>Pass</span>
        </span>
      )}
    </Link>
  );
}
