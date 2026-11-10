import 'dotenv/config';
import { createApp } from './app.js';
import { closeDb, databaseInfo, getDb } from './db/index.js';

const port = Number(process.env.PORT) || 4000;

getDb();
const app = createApp();

const server = app.listen(port, () => {
  console.log(`PitchPass API listening on http://localhost:${port}`);
  console.log(`Database: ${databaseInfo().path}`);
});

function shutdown(signal) {
  console.log(`\n${signal} received, shutting down.`);
  server.close(() => {
    closeDb();
    process.exit(0);
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
