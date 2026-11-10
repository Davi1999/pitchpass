import { Link } from 'react-router-dom';
import type { Match } from '../types';
import { formatKickoff } from '../lib/format';
import { ClubCrest } from './ClubCrest';

export function MatchStatus({ match }: { match: Match }) {
  if (match.status === 'LIVE') {
    return (
      <span className="status-pill status-pill--live">
        <span className="pulse-dot" />
        Live {match.minute}'
      </span>
    );
  }
  if (match.status === 'FT') {
    return <span className="status-pill">Full time</span>;
  }
  return <span className="status-pill status-pill--upcoming">Upcoming</span>;
}

export function MatchCard({ match, showVenue = true }: { match: Match; showVenue?: boolean }) {
  return (
    <article className={`match-card${match.status === 'LIVE' ? ' match-card--live' : ''}`}>
      <div className="match-card__top">
        <MatchStatus match={match} />
        <span className="match-card__date">{formatKickoff(match.kickoff)}</span>
      </div>

      <div className="match-card__teams">
        <Link className="match-team" to={`/clubs/${match.homeTeam.id}`}>
          <ClubCrest
            name={match.homeTeam.name}
            initials={match.homeTeam.initials}
            colors={match.homeTeam.colors}
            size="sm"
          />
          <span className="match-team__name">{match.homeTeam.name}</span>
          <span className="match-team__score">{match.homeScore ?? '–'}</span>
        </Link>
        <Link className="match-team" to={`/clubs/${match.awayTeam.id}`}>
          <ClubCrest
            name={match.awayTeam.name}
            initials={match.awayTeam.initials}
            colors={match.awayTeam.colors}
            size="sm"
          />
          <span className="match-team__name">{match.awayTeam.name}</span>
          <span className="match-team__score">{match.awayScore ?? '–'}</span>
        </Link>
      </div>

      {showVenue && (
        <div className="match-card__bottom">
          <span>{match.venue}</span>
          <span>MD {match.matchday}</span>
        </div>
      )}
    </article>
  );
}
