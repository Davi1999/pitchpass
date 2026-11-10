import { Router } from 'express';
import { listNews } from '../repositories.js';

export const newsRouter = Router();

newsRouter.get('/', (req, res) => {
  const rawLimit = Number.parseInt(String(req.query.limit ?? ''), 10);
  const limit = Number.isFinite(rawLimit) ? rawLimit : undefined;
  res.json({ news: listNews({ limit }) });
});
