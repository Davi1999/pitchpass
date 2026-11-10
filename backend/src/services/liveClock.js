/**
 * The live fixture is a demo, not a real feed. It starts at 34 minutes when the
 * API boots and advances one minute per real minute. This gives the Live Hub
 * something genuinely moving to display without pretending to be live data.
 */
const BASE_MINUTE = 34;
const startedAt = Date.now();

export function getLiveMinute() {
  const elapsedMinutes = Math.max(0, Math.floor((Date.now() - startedAt) / 60_000));
  return Math.min(90, BASE_MINUTE + elapsedMinutes);
}

export function isLiveDemoFinished() {
  return getLiveMinute() >= 90;
}
