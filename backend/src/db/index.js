import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

import { clubs } from '../data/clubs.js';
import { guides } from '../data/guides.js';
import { quizQuestions } from '../data/quiz.js';
import { matches } from '../data/matches.js';
import { standings } from '../data/standings.js';
import { news } from '../data/news.js';
import { eraProfiles, eraSeasons, eraStories } from '../data/era.js';

const backendRoot = fileURLToPath(new URL('../../', import.meta.url));
const SEED_VERSION = '2026-11-14.1';
const schemaPath = path.join(backendRoot, 'src/db/schema.sql');

let db;

function resolveDatabasePath() {
  const configured = process.env.DATABASE_PATH ?? './data/pitchpass.sqlite';
  return path.isAbsolute(configured) ? configured : path.resolve(backendRoot, configured);
}

function getMeta(database, key) {
  const row = database.prepare('SELECT value FROM app_meta WHERE key = ?').get(key);
  return row?.value ?? null;
}

function setMeta(database, key, value) {
  database
    .prepare('INSERT INTO app_meta (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value')
    .run(key, value);
}

function applySchema(database) {
  const schema = fs.readFileSync(schemaPath, 'utf8');
  database.exec(schema);
  migrate(database);
}

function migrate(database) {
  // CREATE TABLE IF NOT EXISTS does not add columns to an existing prototype DB.
  const guideColumns = database.prepare('PRAGMA table_info(guides)').all();
  if (!guideColumns.some((column) => column.name === 'sort_order')) {
    database.exec('ALTER TABLE guides ADD COLUMN sort_order INTEGER NOT NULL DEFAULT 0');
  }
}

function runSeed(database) {
  database.exec('BEGIN');
  try {
    database.exec('DELETE FROM era_seasons');
    database.exec('DELETE FROM era_stories');
    database.exec('DELETE FROM era_profiles');
    database.exec('DELETE FROM standings');
    database.exec('DELETE FROM matches');
    database.exec('DELETE FROM guides');
    database.exec('DELETE FROM quiz_questions');
    database.exec('DELETE FROM news');
    database.exec('DELETE FROM clubs');

    const insertClub = database.prepare(`
      INSERT INTO clubs (
        id, name, nickname, city, stadium, founded, primary_color, secondary_color,
        text_color, initials, vibe, summary, description, beginner_note, traits,
        rivalry, honours, fun_fact
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const club of clubs) {
      insertClub.run(
        club.id,
        club.name,
        club.nickname,
        club.city,
        club.stadium,
        club.founded,
        club.colors.primary,
        club.colors.secondary,
        club.colors.text,
        club.initials,
        club.vibe,
        club.summary,
        club.description,
        club.beginnerNote,
        JSON.stringify(club.traits),
        club.rivalry,
        JSON.stringify(club.honours),
        club.funFact
      );
    }

    const insertGuide = database.prepare(`
      INSERT INTO guides (
        id, slug, title, category, summary, read_time, difficulty, emoji,
        sort_order, featured, sections, key_terms
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const guide of guides) {
      insertGuide.run(
        guide.id,
        guide.slug,
        guide.title,
        guide.category,
        guide.summary,
        guide.readTime,
        guide.difficulty,
        guide.emoji,
        guide.sortOrder ?? 0,
        guide.featured ? 1 : 0,
        JSON.stringify(guide.sections),
        JSON.stringify(guide.keyTerms)
      );
    }

    const insertQuestion = database.prepare(`
      INSERT INTO quiz_questions (
        id, prompt, options, correct_index, explanation, category, difficulty
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    for (const question of quizQuestions) {
      insertQuestion.run(
        question.id,
        question.prompt,
        JSON.stringify(question.options),
        question.correctIndex,
        question.explanation,
        question.category,
        question.difficulty
      );
    }

    const insertMatch = database.prepare(`
      INSERT INTO matches (
        id, competition, matchday, home_team_id, away_team_id, kickoff,
        status, home_score, away_score, venue, events
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const match of matches) {
      insertMatch.run(
        match.id,
        match.competition,
        match.matchday,
        match.homeTeamId,
        match.awayTeamId,
        match.kickoff,
        match.status,
        match.homeScore ?? null,
        match.awayScore ?? null,
        match.venue,
        JSON.stringify(match.events)
      );
    }

    const insertStanding = database.prepare(`
      INSERT INTO standings (
        team_id, position, played, won, drawn, lost, goals_for,
        goals_against, points, form
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const row of standings) {
      insertStanding.run(
        row.teamId,
        row.position,
        row.played,
        row.won,
        row.drawn,
        row.lost,
        row.goalsFor,
        row.goalsAgainst,
        row.points,
        JSON.stringify(row.form)
      );
    }

    const insertNews = database.prepare(`
      INSERT INTO news (
        id, title, slug, category, excerpt, published_at, read_time, emoji, related_guide_slug
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const article of news) {
      insertNews.run(
        article.id,
        article.title,
        article.slug,
        article.category,
        article.excerpt,
        article.publishedAt,
        article.readTime,
        article.emoji,
        article.relatedGuideSlug ?? null
      );
    }

    const insertEraProfile = database.prepare(`
      INSERT INTO era_profiles (
        id, slug, kind, name, role, club_id, nationality, born, summary,
        introduction, sections, strengths, stats, milestones, callout,
        honours, related_slugs, related_guide_slug, sort_order, featured
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const profile of eraProfiles) {
      insertEraProfile.run(
        profile.id,
        profile.slug,
        profile.kind,
        profile.name,
        profile.role,
        profile.clubId ?? null,
        profile.nationality,
        profile.born,
        profile.summary,
        profile.introduction,
        JSON.stringify(profile.sections),
        JSON.stringify(profile.strengths),
        JSON.stringify(profile.stats),
        JSON.stringify(profile.milestone),
        JSON.stringify(profile.callout),
        JSON.stringify(profile.honours),
        JSON.stringify(profile.relatedSlugs),
        profile.relatedGuideSlug ?? null,
        profile.sortOrder ?? 0,
        profile.featured ? 1 : 0
      );
    }

    const insertEraStory = database.prepare(`
      INSERT INTO era_stories (
        id, slug, title, category, summary, read_time, published_at, featured,
        sort_order, sections, takeaways, related_profile_slugs, related_guide_slug
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const story of eraStories) {
      insertEraStory.run(
        story.id,
        story.slug,
        story.title,
        story.category,
        story.summary,
        story.readTime,
        story.publishedAt,
        story.featured ? 1 : 0,
        story.sortOrder ?? 0,
        JSON.stringify(story.sections),
        JSON.stringify(story.takeaways),
        JSON.stringify(story.relatedProfileSlugs),
        story.relatedGuideSlug ?? null
      );
    }

    const insertEraSeason = database.prepare(`
      INSERT INTO era_seasons (
        id, slug, label, status, champion, champion_club_id, runner_up,
        runner_up_club_id, top_scorer, top_scorer_detail, points, summary,
        featured, sort_order, sections, moments, table_rows, takeaways,
        related_profile_slugs, related_guide_slug
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const season of eraSeasons) {
      insertEraSeason.run(
        season.id,
        season.slug,
        season.label,
        season.status,
        season.champion,
        season.championClubId ?? null,
        season.runnerUp,
        season.runnerUpClubId ?? null,
        season.topScorer,
        season.topScorerDetail,
        season.points,
        season.summary,
        season.featured ? 1 : 0,
        season.sortOrder ?? 0,
        JSON.stringify(season.sections),
        JSON.stringify(season.moments),
        JSON.stringify(season.table),
        JSON.stringify(season.takeaways),
        JSON.stringify(season.relatedProfileSlugs),
        season.relatedGuideSlug ?? null
      );
    }

    setMeta(database, 'seed_version', SEED_VERSION);
    setMeta(database, 'seeded_at', new Date().toISOString());
    database.exec('COMMIT');
  } catch (error) {
    database.exec('ROLLBACK');
    throw error;
  }
}

function refreshLiveKickoff(database) {
  // The demo live fixture always starts 34 minutes ago when the API boots.
  const kickoff = new Date(Date.now() - 34 * 60 * 1000).toISOString();
  database.prepare("UPDATE matches SET kickoff = ? WHERE status = 'LIVE'").run(kickoff);
}

function refreshDemoSchedule(database) {
  // Keep the demo's "Next up" fixtures in the future even if the DB has been
  // sitting around for a while. Spacing between matches is preserved.
  const rows = database
    .prepare("SELECT id, kickoff FROM matches WHERE status = 'SCHEDULED' ORDER BY kickoff ASC")
    .all();

  if (rows.length === 0) return;

  const earliest = new Date(rows[0].kickoff).getTime();
  const threshold = Date.now() + 2 * 24 * 60 * 60 * 1000;
  if (earliest >= threshold) return;

  const shift = threshold - earliest;
  const update = database.prepare('UPDATE matches SET kickoff = ? WHERE id = ?');
  for (const row of rows) {
    const nextKickoff = new Date(new Date(row.kickoff).getTime() + shift).toISOString();
    update.run(nextKickoff, row.id);
  }
}

export function getDb() {
  if (db) return db;

  const databasePath = resolveDatabasePath();
  fs.mkdirSync(path.dirname(databasePath), { recursive: true });

  db = new DatabaseSync(databasePath);
  db.exec('PRAGMA journal_mode = WAL;');
  db.exec('PRAGMA foreign_keys = ON;');
  applySchema(db);

  if (getMeta(db, 'seed_version') !== SEED_VERSION) {
    runSeed(db);
  }
  refreshLiveKickoff(db);
  refreshDemoSchedule(db);

  return db;
}

export function reseed() {
  runSeed(getDb());
  refreshLiveKickoff(getDb());
  refreshDemoSchedule(getDb());
}

export function closeDb() {
  if (db) {
    db.close();
    db = undefined;
  }
}

export function databaseInfo() {
  return {
    path: resolveDatabasePath(),
    seedVersion: SEED_VERSION
  };
}
