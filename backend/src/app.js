import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import { apiRouter } from './routes/index.js';

const frontendDist = fileURLToPath(new URL('../../frontend/dist', import.meta.url));

export function createApp() {
  const app = express();
  app.disable('x-powered-by');

  const configuredOrigins = (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.use(cors({ origin: configuredOrigins }));
  app.use(express.json({ limit: '32kb' }));

  app.use((req, res, next) => {
    const started = Date.now();
    res.on('finish', () => {
      if (process.env.NODE_ENV !== 'test') {
        const duration = Date.now() - started;
        console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
      }
    });
    next();
  });

  app.use('/api', apiRouter);

  // Anything under /api that was not matched is a JSON 404, never index.html.
  app.use('/api', (req, res) => {
    res.status(404).json({ error: 'API route not found.' });
  });

  if (fs.existsSync(frontendDist)) {
    app.use(express.static(frontendDist, { maxAge: '1h', index: false }));
    app.use((req, res, next) => {
      if (req.method === 'GET' && req.accepts('html')) {
        res.sendFile(path.join(frontendDist, 'index.html'));
        return;
      }
      next();
    });
  }

  app.use((req, res) => {
    res.status(404).json({ error: 'Not found.' });
  });

  app.use((error, req, res, next) => {
    if (res.headersSent) {
      next(error);
      return;
    }
    console.error(error);
    res.status(500).json({ error: 'Something went wrong on our side.' });
  });

  return app;
}
