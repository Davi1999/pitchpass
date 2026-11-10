import { Router } from 'express';
import { findClubs, getDiscoveryQuestions, validateAnswers } from '../services/clubFinder.js';
import { getClub, listClubs } from '../repositories.js';

export const clubsRouter = Router();

clubsRouter.get('/find/questions', (req, res) => {
  res.json({ questions: getDiscoveryQuestions() });
});

clubsRouter.post('/find', (req, res) => {
  const error = validateAnswers(req.body?.answers);
  if (error) {
    res.status(400).json({ error });
    return;
  }

  res.json(findClubs(req.body.answers));
});

clubsRouter.get('/', (req, res) => {
  const search = typeof req.query.search === 'string' ? req.query.search : '';
  const clubs = listClubs({ search });
  res.json({ clubs, total: clubs.length });
});

clubsRouter.get('/:id', (req, res) => {
  const club = getClub(req.params.id);
  if (!club) {
    res.status(404).json({ error: 'Club not found.' });
    return;
  }

  res.json({ club });
});
