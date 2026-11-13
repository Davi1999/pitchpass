import { Link } from 'react-router-dom';
import type { EraSeason } from '../types';
import { ClubCrest } from './ClubCrest';
import { ArrowRight, Trophy } from './Icons';

export function SeasonCard({ season }: { season: EraSeason }) {
  return (
    <Link className="season-card" to={`/era/seasons/${season.slug}`}>
      <div className="season-card__top">
        <span className="season-card__label">{season.label}</span>
        <span className="tag tag--soft">{season.status}</span>
      </div>

      <div className="season-card__champion">
        {season.championClub ? (
          <ClubCrest
            name={season.championClub.name}
            initials={season.championClub.initials}
            colors={season.championClub.colors}
            size="md"
          />
        ) : (
          <span className="season-card__trophy" aria-hidden="true">
            <Trophy />
          </span>
        )}
        <div>
          <span>Champions</span>
          <strong>{season.champion}</strong>
        </div>
      </div>

      <p>{season.summary}</p>

      <div className="season-card__facts">
        <span>
          <strong>{season.points}</strong> points
        </span>
        <span>
          Top scorer: <strong>{season.topScorer}</strong>
        </span>
      </div>

      <span className="season-card__cta">
        Read the season recap
        <ArrowRight />
      </span>
    </Link>
  );
}
