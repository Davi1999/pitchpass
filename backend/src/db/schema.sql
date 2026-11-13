CREATE TABLE IF NOT EXISTS app_meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS clubs (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  nickname TEXT NOT NULL,
  city TEXT NOT NULL,
  stadium TEXT NOT NULL,
  founded INTEGER NOT NULL,
  primary_color TEXT NOT NULL,
  secondary_color TEXT NOT NULL,
  text_color TEXT NOT NULL,
  initials TEXT NOT NULL,
  vibe TEXT NOT NULL,
  summary TEXT NOT NULL,
  description TEXT NOT NULL,
  beginner_note TEXT NOT NULL,
  traits TEXT NOT NULL,
  rivalry TEXT NOT NULL,
  honours TEXT NOT NULL,
  fun_fact TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS guides (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  summary TEXT NOT NULL,
  read_time INTEGER NOT NULL,
  difficulty TEXT NOT NULL,
  emoji TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  featured INTEGER NOT NULL DEFAULT 0,
  sections TEXT NOT NULL,
  key_terms TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS quiz_questions (
  id TEXT PRIMARY KEY,
  prompt TEXT NOT NULL,
  options TEXT NOT NULL,
  correct_index INTEGER NOT NULL,
  explanation TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS matches (
  id TEXT PRIMARY KEY,
  competition TEXT NOT NULL,
  matchday INTEGER NOT NULL,
  home_team_id TEXT NOT NULL REFERENCES clubs(id),
  away_team_id TEXT NOT NULL REFERENCES clubs(id),
  kickoff TEXT NOT NULL,
  status TEXT NOT NULL,
  home_score INTEGER,
  away_score INTEGER,
  venue TEXT NOT NULL,
  events TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_matches_status ON matches(status);
CREATE INDEX IF NOT EXISTS idx_matches_kickoff ON matches(kickoff);

CREATE TABLE IF NOT EXISTS standings (
  team_id TEXT PRIMARY KEY REFERENCES clubs(id),
  position INTEGER NOT NULL,
  played INTEGER NOT NULL,
  won INTEGER NOT NULL,
  drawn INTEGER NOT NULL,
  lost INTEGER NOT NULL,
  goals_for INTEGER NOT NULL,
  goals_against INTEGER NOT NULL,
  points INTEGER NOT NULL,
  form TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS news (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  published_at TEXT NOT NULL,
  read_time INTEGER NOT NULL,
  emoji TEXT NOT NULL,
  related_guide_slug TEXT
);

CREATE TABLE IF NOT EXISTS era_profiles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  kind TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  club_id TEXT REFERENCES clubs(id),
  nationality TEXT NOT NULL,
  born TEXT NOT NULL,
  summary TEXT NOT NULL,
  introduction TEXT NOT NULL,
  sections TEXT NOT NULL,
  strengths TEXT NOT NULL,
  stats TEXT NOT NULL,
  milestones TEXT NOT NULL,
  callout TEXT NOT NULL,
  honours TEXT NOT NULL,
  related_slugs TEXT NOT NULL,
  related_guide_slug TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  featured INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_era_profiles_kind ON era_profiles(kind);

CREATE TABLE IF NOT EXISTS era_stories (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  summary TEXT NOT NULL,
  read_time INTEGER NOT NULL,
  published_at TEXT NOT NULL,
  featured INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  sections TEXT NOT NULL,
  takeaways TEXT NOT NULL,
  related_profile_slugs TEXT NOT NULL,
  related_guide_slug TEXT
);

CREATE TABLE IF NOT EXISTS era_seasons (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  label TEXT NOT NULL,
  status TEXT NOT NULL,
  champion TEXT NOT NULL,
  champion_club_id TEXT REFERENCES clubs(id),
  runner_up TEXT NOT NULL,
  runner_up_club_id TEXT REFERENCES clubs(id),
  top_scorer TEXT NOT NULL,
  top_scorer_detail TEXT NOT NULL,
  points INTEGER NOT NULL,
  summary TEXT NOT NULL,
  featured INTEGER NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  sections TEXT NOT NULL,
  moments TEXT NOT NULL,
  table_rows TEXT NOT NULL,
  takeaways TEXT NOT NULL,
  related_profile_slugs TEXT NOT NULL,
  related_guide_slug TEXT
);
