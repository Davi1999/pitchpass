import { Router } from 'express';
import { checkQuizAnswer, listQuizQuestions } from '../repositories.js';

export const quizRouter = Router();

quizRouter.get('/', (req, res) => {
  const rawLimit = Number.parseInt(String(req.query.limit ?? ''), 10);
  const limit = Number.isFinite(rawLimit) ? rawLimit : undefined;
  const category = typeof req.query.category === 'string' ? req.query.category : '';

  res.json({ questions: listQuizQuestions({ limit, category }) });
});

quizRouter.post('/check', (req, res) => {
  const { questionId, answerIndex } = req.body ?? {};

  if (typeof questionId !== 'string' || !Number.isInteger(answerIndex)) {
    res.status(400).json({ error: 'questionId and an integer answerIndex are required.' });
    return;
  }

  const result = checkQuizAnswer(questionId, answerIndex);
  if (!result) {
    res.status(404).json({ error: 'Question not found.' });
    return;
  }

  res.json({ result });
});
