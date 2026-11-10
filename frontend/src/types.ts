export interface ClubColors {
  primary: string;
  secondary: string;
  text: string;
}

export interface Club {
  id: string;
  name: string;
  nickname: string;
  city: string;
  stadium: string;
  founded: number;
  colors: ClubColors;
  initials: string;
  vibe: string;
  summary: string;
  description: string;
  beginnerNote: string;
  traits: string[];
  rivalry: string;
  honours: string[];
  funFact: string;
}

export interface StandingRow {
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: string[];
  team: Club;
}

export type MatchStatus = 'LIVE' | 'FT' | 'SCHEDULED';

export interface MatchEvent {
  minute: number;
  type: 'goal' | 'yellow' | 'red' | 'sub' | 'var';
  teamId: string;
  player: string;
  detail: string;
}

export interface Match {
  id: string;
  competition: string;
  matchday: number;
  kickoff: string;
  status: MatchStatus;
  minute: number | null;
  homeScore: number | null;
  awayScore: number | null;
  venue: string;
  homeTeam: Club;
  awayTeam: Club;
  events: MatchEvent[];
}

export interface GuideSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface KeyTerm {
  term: string;
  definition: string;
}

export interface GuideSummary {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: number;
  difficulty: string;
  emoji: string;
  featured: boolean;
}

export interface Guide extends GuideSummary {
  sections: GuideSection[];
  keyTerms: KeyTerm[];
}

export interface GuideCategory {
  name: string;
  count: number;
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  category: string;
  difficulty: string;
}

export interface QuizCheckResult {
  correct: boolean;
  correctIndex: number;
  explanation: string;
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  emoji: string;
  relatedGuideSlug: string | null;
}

export interface Season {
  label: string;
  matchday: number;
  totalMatchdays: number;
}

export interface HomeData {
  season: Season;
  liveMatch: Match | null;
  recentResults: Match[];
  upcomingMatches: Match[];
  featuredGuides: GuideSummary[];
  featuredClubs: Club[];
  table: StandingRow[];
  news: NewsItem[];
}

export interface ClubDetail extends Club {
  standing: StandingRow | null;
  recentMatches: Match[];
  upcomingMatches: Match[];
  guides: GuideSummary[];
}

export interface FindOption {
  label: string;
  description: string;
}

export interface FindQuestion {
  id: string;
  prompt: string;
  helper: string;
  options: FindOption[];
}

export interface FindResult {
  club: Club;
  matchScore: number;
  reasons: string[];
}

export interface FindResponse {
  results: FindResult[];
  alternatives: FindResult[];
}
