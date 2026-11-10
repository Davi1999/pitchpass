import { Router } from 'express';
import { getGuide, listGuideCategories, listGuides } from '../repositories.js';

export const guidesRouter = Router();

guidesRouter.get('/', (req, res) => {
  const category = typeof req.query.category === 'string' ? req.query.category : '';
  const search = typeof req.query.search === 'string' ? req.query.search : '';

  res.json({
    guides: listGuides({ category, search }),
    categories: listGuideCategories()
  });
});

guidesRouter.get('/:slug', (req, res) => {
  const guide = getGuide(req.params.slug);
  if (!guide) {
    res.status(404).json({ error: 'Guide not found.' });
    return;
  }

  res.json({ guide });
});
