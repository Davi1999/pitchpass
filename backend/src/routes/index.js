import { Router } from 'express';
import { getHealth, getHomeData } from '../repositories.js';
import { clubsRouter } from './clubs.js';
import { guidesRouter } from './guides.js';
import { matchesRouter, standingsRouter } from './matches.js';
import { newsRouter } from './news.js';
import { quizRouter } from './quiz.js';

export const apiRouter = Router();

apiRouter.get('/health', (req, res) => {
  res.json(getHealth());
});

apiRouter.get('/home', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json(getHomeData());
});

apiRouter.use('/clubs', clubsRouter);
apiRouter.use('/guides', guidesRouter);
apiRouter.use('/quiz', quizRouter);
apiRouter.use('/matches', matchesRouter);
apiRouter.use('/standings', standingsRouter);
apiRouter.use('/news', newsRouter);
