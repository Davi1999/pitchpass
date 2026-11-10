import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { once } from 'node:events';

let server;
let baseUrl;
let tempDir;

before(async () => {
  tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pitchpass-test-'));
  process.env.NODE_ENV = 'test';
  process.env.DATABASE_PATH = path.join(tempDir, 'pitchpass.sqlite');
  process.env.CORS_ORIGIN = 'http://localhost:5173';

  const { createApp } = await import('../src/app.js');
  const { getDb } = await import('../src/db/index.js');
  getDb();

  server = createApp().listen(0);
  await once(server, 'listening');
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
  const { closeDb } = await import('../src/db/index.js');
  closeDb();
  if (tempDir) fs.rmSync(tempDir, { recursive: true, force: true });
});

async function api(pathname, options) {
  const response = await fetch(`${baseUrl}${pathname}`, options);
  const body = await response.json();
  return { response, body };
}

test('health reports a seeded demo database', async () => {
  const { response, body } = await api('/api/health');
  assert.equal(response.status, 200);
  assert.equal(body.status, 'ok');
  assert.equal(body.demoData, true);
  assert.equal(body.clubs, 20);
  assert.equal(body.guides, 11);
});

test('club directory lists and searches all 20 clubs', async () => {
  const all = await api('/api/clubs');
  assert.equal(all.response.status, 200);
  assert.equal(all.body.total, 20);
  assert.equal(all.body.clubs.length, 20);

  const london = await api('/api/clubs?search=london');
  assert.equal(london.body.total, 7);
  assert.ok(london.body.clubs.every((club) => club.city === 'London'));
});

test('club detail includes table position and related fixtures', async () => {
  const { response, body } = await api('/api/clubs/arsenal');
  assert.equal(response.status, 200);
  assert.equal(body.club.name, 'Arsenal');
  assert.equal(body.club.standing.position, 1);
  assert.ok(Array.isArray(body.club.recentMatches));
  assert.ok(body.club.guides.length >= 2);
});

test('unknown club returns a JSON 404', async () => {
  const { response, body } = await api('/api/clubs/not-a-club');
  assert.equal(response.status, 404);
  assert.match(body.error, /not found/i);
});

test('guides expose categories and full content', async () => {
  const list = await api('/api/guides');
  assert.equal(list.body.guides.length, 11);
  assert.equal(list.body.guides[0].slug, 'premier-league-explained');
  assert.ok(list.body.categories.some((category) => category.name === 'Rules'));

  const offside = await api('/api/guides/offside-explained');
  assert.equal(offside.response.status, 200);
  assert.equal(offside.body.guide.title, 'Offside, without the headache');
  assert.ok(offside.body.guide.sections.length >= 4);
  assert.ok(offside.body.guide.keyTerms.length >= 3);
});

test('quiz endpoints never leak answers before submission', async () => {
  const list = await api('/api/quiz?limit=5');
  assert.equal(list.response.status, 200);
  assert.equal(list.body.questions.length, 5);
  assert.equal(list.body.questions[0].correctIndex, undefined);
  assert.equal(list.body.questions[0].explanation, undefined);

  const correct = await api('/api/quiz/check', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ questionId: 'q-clubs', answerIndex: 2 })
  });
  assert.equal(correct.response.status, 200);
  assert.equal(correct.body.result.correct, true);
  assert.ok(correct.body.result.explanation);

  const wrong = await api('/api/quiz/check', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ questionId: 'q-clubs', answerIndex: 0 })
  });
  assert.equal(wrong.body.result.correct, false);
  assert.equal(wrong.body.result.correctIndex, 2);
});

test('quiz validation rejects malformed submissions', async () => {
  const { response } = await api('/api/quiz/check', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ questionId: 'q-clubs', answerIndex: 'two' })
  });
  assert.equal(response.status, 400);
});

test('club finder returns ranked results from five answers', async () => {
  const questions = await api('/api/clubs/find/questions');
  assert.equal(questions.body.questions.length, 5);

  const answers = {
    mood: 0,
    place: 1,
    story: 1,
    football: 2,
    values: 1
  };
  const { response, body } = await api('/api/clubs/find', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ answers })
  });

  assert.equal(response.status, 200);
  assert.equal(body.results.length, 3);
  assert.equal(body.alternatives.length, 2);
  assert.ok(body.results[0].matchScore > 0);
  assert.ok(body.results[0].reasons.length > 0);
  assert.equal(body.results[0].club.name, 'Sunderland');
});

test('club finder validates answers', async () => {
  const { response } = await api('/api/clubs/find', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ answers: { mood: 0 } })
  });
  assert.equal(response.status, 400);
});

test('standings contain all clubs in order', async () => {
  const { body } = await api('/api/standings');
  assert.equal(body.standings.length, 20);
  assert.equal(body.standings[0].team.name, 'Arsenal');
  assert.equal(body.standings[0].goalDifference, 15);
  assert.equal(body.standings[19].team.name, 'Wolverhampton Wanderers');
});

test('matches include a live demo fixture and upcoming games', async () => {
  const live = await api('/api/matches?status=LIVE');
  assert.equal(live.body.matches.length, 1);
  assert.equal(live.body.matches[0].homeTeam.name, 'Liverpool');
  assert.equal(live.body.matches[0].minute, 34);
  assert.equal(live.body.matches[0].homeScore, 1);
  assert.equal(live.body.matches[0].awayScore, 1);

  const scheduled = await api('/api/matches?status=SCHEDULED&limit=4');
  assert.equal(scheduled.body.matches.length, 4);
  assert.ok(scheduled.body.matches.every((match) => match.status === 'SCHEDULED'));
});

test('home payload has everything the landing page needs', async () => {
  const { response, body } = await api('/api/home');
  assert.equal(response.status, 200);
  assert.ok(body.liveMatch);
  assert.equal(body.featuredGuides.length, 4);
  assert.equal(body.featuredClubs.length, 8);
  assert.equal(body.upcomingMatches.length, 4);
  assert.equal(body.table.length, 5);
  assert.equal(body.news.length, 4);
  assert.equal(body.season.matchday, 13);
});

test('unknown API routes return JSON rather than the SPA', async () => {
  const { response, body } = await api('/api/nope');
  assert.equal(response.status, 404);
  assert.match(body.error, /API route not found/);
});
