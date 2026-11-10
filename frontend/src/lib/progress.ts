const READ_KEY = 'pitchpass:guides-read';
const BEST_KEY = 'pitchpass:quiz-best';
const CLUB_KEY = 'pitchpass:my-club';

function readJson<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private mode; the app still works.
  }
}

export function getReadGuides(): string[] {
  return readJson<string[]>(READ_KEY, []);
}

export function isGuideRead(slug: string): boolean {
  return getReadGuides().includes(slug);
}

export function toggleGuideRead(slug: string): string[] {
  const read = getReadGuides();
  const next = read.includes(slug) ? read.filter((item) => item !== slug) : [...read, slug];
  writeJson(READ_KEY, next);
  return next;
}

export interface BestScore {
  score: number;
  total: number;
  date: string;
}

export function getBestScore(): BestScore | null {
  return readJson<BestScore | null>(BEST_KEY, null);
}

export function saveBestScore(score: number, total: number): BestScore {
  const current = getBestScore();
  const isBetter = !current || score > current.score;
  const best = isBetter ? { score, total, date: new Date().toISOString() } : current;
  writeJson(BEST_KEY, best);
  return best;
}

export function getMyClub(): string | null {
  try {
    return localStorage.getItem(CLUB_KEY);
  } catch {
    return null;
  }
}

export function saveMyClub(clubId: string) {
  try {
    localStorage.setItem(CLUB_KEY, clubId);
  } catch {
    // Ignore storage failures.
  }
}
