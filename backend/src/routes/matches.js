import { Router } from 'express';
import { listMatches, listStandings } from '../repositories.js';

export const matchesRouter = Router();

matchesRouter.get('/', (req, res) => {
  const status = typeof req.query.status === 'string' ? req.query.status.toUpperCase() : undefined;
  const team = typeof req.query.team === 'string' ? req.query.team : undefined;
  const rawLimit = Number.parseInt(String(req.query.limit ?? ''), 10);
  const limit = Number.isFinite(rawLimit) ? rawLimit : undefined;
  const allowedStatuses = ['LIVE', 'FT', 'SCHEDULED'];

  if (status && !allowedStatuses.includes(status)) {
    res.status(400).json({ error: `status must be one of: ${allowedStatuses.join(', ')}` });
    return;
  }

  res.set('Cache-Control', 'no-store');
  res.json({ matches: listMatches({ status, team, limit }) });
});

export const standingsRouter = Router();

standingsRouter.get('/', (req, res) => {
  res.json({ standings: listStandings() });
});
