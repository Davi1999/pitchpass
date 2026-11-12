import { Link } from 'react-router-dom';
import type { StandingRow } from '../types';
import { ClubCrest } from './ClubCrest';

function FormBadge({ result }: { result: string }) {
  return (
    <span className={`form-badge form-badge--${result.toLowerCase()}`} title={result}>
      {result}
    </span>
  );
}

export function StandingsTable({
  rows,
  compact = false
}: {
  rows: StandingRow[];
  compact?: boolean;
}) {
  return (
    <div className="standings-wrap">
      <div className="standings-scroll">
        <table className={`standings${compact ? ' standings--compact' : ''}`}>
          <thead>
            <tr>
              <th className="col-pos" scope="col">
                #
              </th>
              <th scope="col">Club</th>
              {!compact && (
                <>
                  <th scope="col">P</th>
                  <th scope="col">W</th>
                  <th scope="col">D</th>
                  <th scope="col">L</th>
                  <th scope="col">GF</th>
                  <th scope="col">GA</th>
                </>
              )}
              <th scope="col">GD</th>
              <th scope="col">Pts</th>
              <th className="col-form" scope="col">
                Form
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const zone =
                row.position <= 4
                  ? 'standings-row--europe'
                  : row.position >= 18
                    ? 'standings-row--relegation'
                    : '';
              return (
                <tr className={zone} key={row.team.id}>
                  <td className="col-pos">{row.position}</td>
                  <td>
                    <Link className="table-club" to={`/clubs/${row.team.id}`}>
                      <ClubCrest
                        name={row.team.name}
                        initials={row.team.initials}
                        colors={row.team.colors}
                        size="xs"
                      />
                      <span>{row.team.name}</span>
                    </Link>
                  </td>
                  {!compact && (
                    <>
                      <td>{row.played}</td>
                      <td>{row.won}</td>
                      <td>{row.drawn}</td>
                      <td>{row.lost}</td>
                      <td>{row.goalsFor}</td>
                      <td>{row.goalsAgainst}</td>
                    </>
                  )}
                  <td>{row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}</td>
                  <td className="col-points">{row.points}</td>
                  <td className="col-form">
                    <span className="form-row">
                      {row.form.map((result, index) => (
                        <FormBadge key={`${result}-${index}`} result={result} />
                      ))}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-legend">
        <span>
          <i className="legend-dot legend-dot--europe" /> European places
        </span>
        <span>
          <i className="legend-dot legend-dot--relegation" /> Relegation zone
        </span>
        <span className="table-legend__note">Demo table</span>
      </div>
    </div>
  );
}
