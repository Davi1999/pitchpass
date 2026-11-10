const now = new Date();

function inDays(days, hour = 15, minute = 0) {
  const date = new Date(now);
  date.setDate(date.getDate() + days);
  date.setHours(hour, minute, 0, 0);
  return date.toISOString();
}

/**
 * A demo matchweek. The live fixture uses a relative clock in the API so the
 * Live Hub has something moving to show. Scores for finished games are static.
 */
export const matches = [
  {
    id: 'liv-mci',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'liverpool',
    awayTeamId: 'man-city',
    kickoff: new Date(Date.now() - 34 * 60 * 1000).toISOString(),
    status: 'LIVE',
    venue: 'Anfield',
    events: [
      { minute: 12, type: 'goal', teamId: 'liverpool', player: 'Mohamed Salah', detail: 'Assist: Alexis Mac Allister' },
      { minute: 24, type: 'yellow', teamId: 'man-city', player: 'Rodri', detail: 'Tactical foul' },
      { minute: 34, type: 'goal', teamId: 'man-city', player: 'Erling Haaland', detail: 'Assist: Phil Foden' },
      { minute: 35, type: 'var', teamId: 'man-city', player: 'VAR check', detail: 'Goal confirmed — no offside' },
      { minute: 52, type: 'goal', teamId: 'liverpool', player: 'Cody Gakpo', detail: 'Assist: Mohamed Salah' },
      { minute: 61, type: 'sub', teamId: 'man-city', player: 'Jack Grealish', detail: 'On for Phil Foden' },
      { minute: 68, type: 'yellow', teamId: 'liverpool', player: 'Alexis Mac Allister', detail: 'Late challenge' },
      { minute: 76, type: 'goal', teamId: 'man-city', player: 'Erling Haaland', detail: 'Assist: Bernardo Silva' },
      { minute: 84, type: 'sub', teamId: 'liverpool', player: 'Darwin Núñez', detail: 'On for Cody Gakpo' },
      { minute: 88, type: 'yellow', teamId: 'man-city', player: 'Rúben Dias', detail: 'Stopping a counter' }
    ]
  },
  {
    id: 'ars-eve',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'arsenal',
    awayTeamId: 'everton',
    kickoff: inDays(-1, 15),
    status: 'FT',
    homeScore: 2,
    awayScore: 0,
    venue: 'Emirates Stadium',
    events: []
  },
  {
    id: 'bha-che',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'brighton',
    awayTeamId: 'chelsea',
    kickoff: inDays(-1, 15),
    status: 'FT',
    homeScore: 1,
    awayScore: 1,
    venue: 'Amex Stadium',
    events: []
  },
  {
    id: 'mun-new',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'man-united',
    awayTeamId: 'newcastle',
    kickoff: inDays(-1, 15),
    status: 'FT',
    homeScore: 1,
    awayScore: 2,
    venue: 'Old Trafford',
    events: []
  },
  {
    id: 'tot-bre',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'tottenham',
    awayTeamId: 'brentford',
    kickoff: inDays(-2, 15),
    status: 'FT',
    homeScore: 3,
    awayScore: 1,
    venue: 'Tottenham Hotspur Stadium',
    events: []
  },
  {
    id: 'whu-avl',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'west-ham',
    awayTeamId: 'aston-villa',
    kickoff: inDays(-2, 15),
    status: 'FT',
    homeScore: 0,
    awayScore: 2,
    venue: 'London Stadium',
    events: []
  },
  {
    id: 'wol-lee',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'wolves',
    awayTeamId: 'leeds',
    kickoff: inDays(-2, 15),
    status: 'FT',
    homeScore: 1,
    awayScore: 1,
    venue: 'Molineux',
    events: []
  },
  {
    id: 'bou-bur',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'bournemouth',
    awayTeamId: 'burnley',
    kickoff: inDays(-3, 15),
    status: 'FT',
    homeScore: 2,
    awayScore: 1,
    venue: 'Vitality Stadium',
    events: []
  },
  {
    id: 'ful-sun',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'fulham',
    awayTeamId: 'sunderland',
    kickoff: inDays(-3, 15),
    status: 'FT',
    homeScore: 0,
    awayScore: 0,
    venue: 'Craven Cottage',
    events: []
  },
  {
    id: 'cry-nfo',
    competition: 'Premier League',
    matchday: 13,
    homeTeamId: 'crystal-palace',
    awayTeamId: 'nottingham-forest',
    kickoff: inDays(-3, 15),
    status: 'FT',
    homeScore: 1,
    awayScore: 2,
    venue: 'Selhurst Park',
    events: []
  },
  {
    id: 'mci-ars',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'man-city',
    awayTeamId: 'arsenal',
    kickoff: inDays(3, 17, 30),
    status: 'SCHEDULED',
    venue: 'Etihad Stadium',
    events: []
  },
  {
    id: 'liv-tot',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'liverpool',
    awayTeamId: 'tottenham',
    kickoff: inDays(4, 15),
    status: 'SCHEDULED',
    venue: 'Anfield',
    events: []
  },
  {
    id: 'che-mun',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'chelsea',
    awayTeamId: 'man-united',
    kickoff: inDays(4, 17, 30),
    status: 'SCHEDULED',
    venue: 'Stamford Bridge',
    events: []
  },
  {
    id: 'new-bha',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'newcastle',
    awayTeamId: 'brighton',
    kickoff: inDays(5, 14),
    status: 'SCHEDULED',
    venue: "St James' Park",
    events: []
  },
  {
    id: 'avl-whu',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'aston-villa',
    awayTeamId: 'west-ham',
    kickoff: inDays(5, 16, 30),
    status: 'SCHEDULED',
    venue: 'Villa Park',
    events: []
  },
  {
    id: 'eve-cry',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'everton',
    awayTeamId: 'crystal-palace',
    kickoff: inDays(6, 20),
    status: 'SCHEDULED',
    venue: 'Hill Dickinson Stadium',
    events: []
  },
  {
    id: 'nfo-ful',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'nottingham-forest',
    awayTeamId: 'fulham',
    kickoff: inDays(7, 15),
    status: 'SCHEDULED',
    venue: 'City Ground',
    events: []
  },
  {
    id: 'bre-bou',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'brentford',
    awayTeamId: 'bournemouth',
    kickoff: inDays(7, 15),
    status: 'SCHEDULED',
    venue: 'Gtech Community Stadium',
    events: []
  },
  {
    id: 'lee-wol',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'leeds',
    awayTeamId: 'wolves',
    kickoff: inDays(8, 14),
    status: 'SCHEDULED',
    venue: 'Elland Road',
    events: []
  },
  {
    id: 'sun-bur',
    competition: 'Premier League',
    matchday: 14,
    homeTeamId: 'sunderland',
    awayTeamId: 'burnley',
    kickoff: inDays(8, 16, 30),
    status: 'SCHEDULED',
    venue: 'Stadium of Light',
    events: []
  }
];
