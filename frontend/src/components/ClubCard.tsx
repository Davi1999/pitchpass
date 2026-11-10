import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Club } from '../types';
import { ClubCrest } from './ClubCrest';
import { ArrowUpRight } from './Icons';

export function ClubCard({ club }: { club: Club }) {
  const style = {
    '--club-primary': club.colors.primary,
    '--club-secondary': club.colors.secondary
  } as CSSProperties;

  return (
    <Link className="club-card" to={`/clubs/${club.id}`} style={style}>
      <div className="club-card__top">
        <ClubCrest
          name={club.name}
          initials={club.initials}
          colors={club.colors}
          size="md"
        />
        <span className="club-card__city">{club.city}</span>
      </div>
      <div className="club-card__body">
        <h3>{club.name}</h3>
        <p className="club-card__nickname">{club.nickname}</p>
        <p className="club-card__vibe">{club.vibe}</p>
      </div>
      <div className="club-card__footer">
        <div className="tag-row">
          {club.traits.slice(0, 2).map((trait) => (
            <span className="tag tag--soft" key={trait}>
              {trait.replace('-', ' ')}
            </span>
          ))}
        </div>
        <span className="club-card__arrow" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
