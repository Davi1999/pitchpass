import { getDb, reseed } from './index.js';

if (process.argv.includes('--force')) {
  reseed();
  console.log('PitchPass demo data reseeded.');
} else {
  getDb();
  console.log('PitchPass database is ready.');
}
