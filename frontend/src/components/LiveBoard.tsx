import { Link } from 'react-router-dom';
import type { Match, MatchEvent } from '../types';
import { formatKickoff } from '../lib/format';
import { ClubCrest } from './ClubCrest';
import { EventIcon } from './Glyphs';

function eventTeam(match: Match, event: MatchEvent) {
  return event.teamId === match.homeTeam.id ? match.homeTeam : match.awayTeam;
}

export function LiveBoard({
  match,
  expanded = false
}: {
  match: Match;
  expanded?: boolean;
}) {
  const isLive = match.status === 'LIVE';
  const timeline = [...match.events].reverse().slice(0, expanded ? 7 : 4);

  return (
    <div className={`live-board${expanded ? ' live-board--expanded' : ''}`}>
      <div className="live-board__top">
        {isLive ? (
          <span className="status-pill status-pill--live">
            <span className="pulse-dot" />
            Live {match.minute}'
          </span>
        ) : (
          <span className="status-pill">{match.status === 'FT' ? 'Full time' : 'Upcoming'}</span>
        )}
        <span className="live-board__venue">{match.venue}</span>
      </div>

      <div className="live-board__score">
        <div className="live-board__team">
          <ClubCrest
            name={match.homeTeam.name}
            initials={match.homeTeam.initials}
            colors={match.homeTeam.colors}
            size={expanded ? 'xl' : 'lg'}
          />
          <span className="live-board__team-name">{match.homeTeam.name}</span>
          <span className="live-board__nickname">{match.homeTeam.nickname}</span>
        </div>

        <div className="live-board__numbers" aria-label={`${match.homeScore ?? 0} to ${match.awayScore ?? 0}`}>
          <span>{match.homeScore ?? '–'}</span>
          <span className="live-board__colon">:</span>
          <span>{match.awayScore ?? '–'}</span>
        </div>

        <div className="live-board__team live-board__team--away">
          <ClubCrest
            name={match.awayTeam.name}
            initials={match.awayTeam.initials}
            colors={match.awayTeam.colors}
            size={expanded ? 'xl' : 'lg'}
          />
          <span className="live-board__team-name">{match.awayTeam.name}</span>
          <span className="live-board__nickname">{match.awayTeam.nickname}</span>
        </div>
      </div>

      <div className="live-board__meta">
        <span>{match.competition}</span>
        <span>Matchday {match.matchday}</span>
        <span>{formatKickoff(match.kickoff)}</span>
      </div>

      {timeline.length > 0 && (
        <div className="live-board__timeline">
          {timeline.map((event, index) => {
            const team = eventTeam(match, event);
            return (
              <div className="timeline-event" key={`${event.minute}-${event.player}-${index}`}>
                <span className="timeline-event__minute">{event.minute}'</span>
                <span
                  className={`timeline-event__icon timeline-event__icon--${event.type}`}
                  aria-hidden="true"
                >
                  <EventIcon type={event.type} />
                </span>
                <ClubCrest
                  name={team.name}
                  initials={team.initials}
                  colors={team.colors}
                  size="xs"
                />
                <span className="timeline-event__text">
                  <strong>{event.player}</strong>
                  <span>{event.detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div className="live-board__footer">
        <span className="demo-note">
          <span className="demo-note__dot" />
          Demo live feed — simulated clock
        </span>
        <span>{isLive ? 'Updates every 20 seconds' : 'Demo data'}</span>
      </div>
    </div>
  );
}
