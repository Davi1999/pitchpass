import { Router } from 'express';
import {
  getEraOverview,
  getEraProfile,
  getEraSeason,
  getEraStory,
  listEraProfiles,
  listEraSeasons,
  listEraStories
} from '../repositories.js';

export const eraRouter = Router();

eraRouter.get('/', (req, res) => {
  res.json(getEraOverview());
});

eraRouter.get('/players', (req, res) => {
  res.json({ players: listEraProfiles({ kind: 'player' }) });
});

eraRouter.get('/managers', (req, res) => {
  res.json({ managers: listEraProfiles({ kind: 'manager' }) });
});

eraRouter.get('/stories', (req, res) => {
  res.json({ stories: listEraStories() });
});

eraRouter.get('/seasons', (req, res) => {
  res.json({ seasons: listEraSeasons() });
});

eraRouter.get('/players/:slug', (req, res) => {
  const data = getEraProfile(req.params.slug);
  if (!data || data.profile.kind !== 'player') {
    res.status(404).json({ error: 'Player profile not found.' });
    return;
  }
  res.json(data);
});

eraRouter.get('/managers/:slug', (req, res) => {
  const data = getEraProfile(req.params.slug);
  if (!data || data.profile.kind !== 'manager') {
    res.status(404).json({ error: 'Manager profile not found.' });
    return;
  }
  res.json(data);
});

eraRouter.get('/stories/:slug', (req, res) => {
  const data = getEraStory(req.params.slug);
  if (!data) {
    res.status(404).json({ error: 'Story not found.' });
    return;
  }
  res.json(data);
});

eraRouter.get('/seasons/:slug', (req, res) => {
  const data = getEraSeason(req.params.slug);
  if (!data) {
    res.status(404).json({ error: 'Season recap not found.' });
    return;
  }
  res.json(data);
});
