import { getDb } from './db/index.js';
import {
  mapClub,
  mapGuide,
  mapGuideSummary,
  mapQuizQuestion,
  mapStanding,
  mapNews
} from './db/mappers.js';
import { getLiveMinute, isLiveDemoFinished } from './services/liveClock.js';

const FEATURED_CLUB_IDS = [
  'arsenal',
  'liverpool',
  'man-city',
  'newcastle',
  'brighton',
  'aston-villa',
  'crystal-palace',
  'sunderland'
];

function clubMap() {
  const rows = getDb().prepare('SELECT * FROM clubs').all();
  return new Map(rows.map((row) => [row.id, mapClub(row)]));
}

function matchFromRow(row, teams, liveMinute) {
  const homeTeam = teams.get(row.home_team_id) ?? null;
  const awayTeam = teams.get(row.away_team_id) ?? null;
  const events = JSON.parse(row.events || '[]');

  let status = row.status;
  let minute = null;
  let homeScore = row.home_score;
  let awayScore = row.away_score;
  let visibleEvents = events;

  if (status === 'LIVE') {
    const finished = isLiveDemoFinished() || liveMinute >= 90;
    minute = finished ? null : liveMinute;
    status = finished ? 'FT' : 'LIVE';
    visibleEvents = events.filter((event) => event.minute <= liveMinute);
    homeScore = visibleEvents.filter(
      (event) => event.type === 'goal' && event.teamId === row.home_team_id
    ).length;
    awayScore = visibleEvents.filter(
      (event) => event.type === 'goal' && event.teamId === row.away_team_id
    ).length;
  }

  return {
    id: row.id,
    competition: row.competition,
    matchday: row.matchday,
    kickoff: row.kickoff,
    status,
    minute,
    homeScore,
    awayScore,
    venue: row.venue,
    homeTeam,
    awayTeam,
    events: visibleEvents.sort((a, b) => a.minute - b.minute)
  };
}

export function listClubs({ search = '' } = {}) {
  const query = search.trim().toLowerCase();
  const teams = clubMap();
  let clubs = [...teams.values()].sort((a, b) => a.name.localeCompare(b.name));

  if (query) {
    clubs = clubs.filter((club) =>
      [club.name, club.nickname, club.city, club.stadium, club.vibe, ...club.traits]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );
  }

  return clubs;
}

export function getClub(id) {
  const row = getDb().prepare('SELECT * FROM clubs WHERE id = ?').get(id);
  if (!row) return null;

  const club = mapClub(row);
  const matches = listMatches({ team: id });
  const recentMatches = matches
    .filter((match) => match.status === 'FT')
    .sort((a, b) => new Date(b.kickoff) - new Date(a.kickoff))
    .slice(0, 3);
  const upcomingMatches = matches
    .filter((match) => match.status === 'SCHEDULED')
    .sort((a, b) => new Date(a.kickoff) - new Date(b.kickoff))
    .slice(0, 2);
  const standing = listStandings().find((row) => row.team?.id === id) ?? null;
  const guideSlugs = ['how-to-pick-a-club', 'derbies-and-rivalries'];
  const clubGuides = guideSlugs
    .map((slug) => getGuide(slug))
    .filter(Boolean)
    .map((guide) => {
      const { sections, keyTerms, ...summary } = guide;
      return summary;
    });

  return {
    ...club,
    standing,
    recentMatches,
    upcomingMatches,
    guides: clubGuides
  };
}

export function listGuides({ category = '', search = '', featured } = {}) {
  const query = search.trim().toLowerCase();
  let rows = getDb().prepare('SELECT * FROM guides ORDER BY sort_order ASC, title ASC').all();

  if (featured !== undefined) {
    rows = rows.filter((row) => Boolean(row.featured) === featured);
  }

  let guides = rows.map(mapGuideSummary);

  if (category) {
    guides = guides.filter((guide) => guide.category === category);
  }

  if (query) {
    guides = guides.filter((guide) =>
      [guide.title, guide.summary, guide.category].join(' ').toLowerCase().includes(query)
    );
  }

  return guides;
}

export function listGuideCategories() {
  const rows = getDb().prepare('SELECT category, COUNT(*) as count FROM guides GROUP BY category ORDER BY category').all();
  return rows.map((row) => ({ name: row.category, count: row.count }));
}

export function getGuide(slug) {
  const row = getDb().prepare('SELECT * FROM guides WHERE slug = ?').get(slug);
  return row ? mapGuide(row) : null;
}

export function listQuizQuestions({ limit, category } = {}) {
  let rows = getDb().prepare('SELECT * FROM quiz_questions ORDER BY rowid').all();

  if (category) {
    rows = rows.filter((row) => row.category === category);
  }

  const questions = rows.map((row) => mapQuizQuestion(row));
  return Number.isInteger(limit) && limit > 0 ? questions.slice(0, limit) : questions;
}

export function checkQuizAnswer(questionId, answerIndex) {
  const row = getDb().prepare('SELECT * FROM quiz_questions WHERE id = ?').get(questionId);
  if (!row) return null;

  return {
    correct: row.correct_index === answerIndex,
    correctIndex: row.correct_index,
    explanation: row.explanation
  };
}

export function listMatches({ status, team, limit } = {}) {
  const teams = clubMap();
  const liveMinute = getLiveMinute();
  let matches = getDb()
    .prepare('SELECT * FROM matches ORDER BY kickoff ASC')
    .all()
    .map((row) => matchFromRow(row, teams, liveMinute));

  if (status) {
    matches = matches.filter((match) => match.status === status);
  }

  if (team) {
    matches = matches.filter(
      (match) => match.homeTeam?.id === team || match.awayTeam?.id === team
    );
  }

  if (Number.isInteger(limit) && limit > 0) {
    matches = matches.slice(0, limit);
  }

  return matches;
}

export function listStandings() {
  const teams = clubMap();
  return getDb()
    .prepare('SELECT * FROM standings ORDER BY position ASC')
    .all()
    .map((row) => mapStanding(row, teams.get(row.team_id) ?? null));
}

export function listNews({ limit } = {}) {
  const rows = getDb().prepare('SELECT * FROM news ORDER BY published_at DESC').all();
  const articles = rows.map(mapNews);
  return Number.isInteger(limit) && limit > 0 ? articles.slice(0, limit) : articles;
}

export function getHomeData() {
  const teams = clubMap();
  const liveMatch = listMatches({ status: 'LIVE', limit: 1 })[0] ?? null;
  const recentResults = [...listMatches({ status: 'FT' })]
    .sort((a, b) => new Date(b.kickoff) - new Date(a.kickoff))
    .slice(0, 4);
  const upcomingMatches = listMatches({ status: 'SCHEDULED', limit: 4 });
  const featuredGuides = listGuides({ featured: true }).slice(0, 4);
  const featuredClubs = FEATURED_CLUB_IDS.map((id) => teams.get(id)).filter(Boolean);
  const table = listStandings().slice(0, 5);
  const news = listNews({ limit: 4 });

  return {
    season: {
      label: '2025/26 demo season',
      matchday: 13,
      totalMatchdays: 38
    },
    liveMatch,
    recentResults,
    upcomingMatches,
    featuredGuides,
    featuredClubs,
    table,
    news
  };
}

export function getHealth() {
  const db = getDb();
  const clubCount = db.prepare('SELECT COUNT(*) AS count FROM clubs').get().count;
  const guideCount = db.prepare('SELECT COUNT(*) AS count FROM guides').get().count;

  return {
    status: 'ok',
    database: 'sqlite',
    demoData: true,
    clubs: clubCount,
    guides: guideCount,
    liveMinute: getLiveMinute(),
    time: new Date().toISOString()
  };
}
