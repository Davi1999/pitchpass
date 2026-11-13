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

export type EraProfileKind = 'player' | 'manager';

export interface EraStat {
  label: string;
  value: string;
}

export interface EraMilestone {
  year: string;
  event: string;
}

export interface EraCallout {
  label: string;
  text: string;
}

export interface EraProfile {
  id: string;
  slug: string;
  kind: EraProfileKind;
  name: string;
  role: string;
  clubId: string | null;
  club: Club | null;
  nationality: string;
  born: string;
  summary: string;
  introduction: string;
  sections: GuideSection[];
  strengths: string[];
  stats: EraStat[];
  milestones: EraMilestone[];
  callout: EraCallout | null;
  honours: string[];
  relatedSlugs: string[];
  relatedGuideSlug: string | null;
  sortOrder: number;
  featured: boolean;
}

export interface EraStory {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: number;
  publishedAt: string;
  featured: boolean;
  sortOrder: number;
  sections: GuideSection[];
  takeaways: string[];
  relatedProfileSlugs: string[];
  relatedGuideSlug: string | null;
}

export interface EraSeasonTableRow {
  position: number;
  clubId: string;
  points: number;
  club: Club;
}

export interface EraSeason {
  id: string;
  slug: string;
  label: string;
  status: string;
  champion: string;
  championClubId: string | null;
  championClub: Club | null;
  runnerUp: string;
  runnerUpClubId: string | null;
  runnerUpClub: Club | null;
  topScorer: string;
  topScorerDetail: string;
  points: number;
  summary: string;
  featured: boolean;
  sortOrder: number;
  table: EraSeasonTableRow[];
}

export interface EraSeasonDetail extends EraSeason {
  sections: GuideSection[];
  moments: { label: string; text: string }[];
  takeaways: string[];
  relatedProfileSlugs: string[];
  relatedGuideSlug: string | null;
}

export interface EraTimelineEntry {
  year: string;
  title: string;
  body: string;
}

export interface EraMeta {
  label: string;
  title: string;
  seasons: string;
  updated: string;
  description: string;
  introduction: string;
  disclaimer: string;
  stats: EraStat[];
  timeline: EraTimelineEntry[];
  guideSlugs: string[];
}

export interface EraOverview {
  meta: EraMeta;
  players: EraProfile[];
  managers: EraProfile[];
  stories: EraStory[];
  seasons: EraSeason[];
  guides: GuideSummary[];
}

export interface EraProfileDetail {
  profile: EraProfile;
  relatedProfiles: EraProfile[];
  relatedStories: EraStory[];
  relatedGuide: GuideSummary | null;
}

export interface EraStoryDetail {
  story: EraStory;
  relatedProfiles: EraProfile[];
  relatedGuide: GuideSummary | null;
}

export interface EraSeasonDetailResponse {
  season: EraSeasonDetail;
  relatedProfiles: EraProfile[];
  relatedGuide: GuideSummary | null;
}
