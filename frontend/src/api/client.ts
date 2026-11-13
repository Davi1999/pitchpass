import type {
  Club,
  ClubDetail,
  EraOverview,
  EraProfile,
  EraProfileDetail,
  EraSeason,
  EraSeasonDetailResponse,
  EraStory,
  EraStoryDetail,
  FindQuestion,
  FindResponse,
  Guide,
  GuideCategory,
  GuideSummary,
  HomeData,
  Match,
  MatchStatus,
  NewsItem,
  QuizCheckResult,
  QuizQuestion,
  StandingRow
} from '../types';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      ...(init?.body ? { 'content-type': 'application/json' } : {}),
      ...init?.headers
    }
  });

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    try {
      const body = (await response.json()) as { error?: string };
      if (body.error) message = body.error;
    } catch {
      // Keep the fallback message.
    }
    throw new ApiError(message, response.status);
  }

  return (await response.json()) as T;
}

function queryString(params: Record<string, string | number | undefined>) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== '') search.set(key, String(value));
  }
  const query = search.toString();
  return query ? `?${query}` : '';
}

export const api = {
  getHome: () => request<HomeData>('/api/home'),

  getClubs: (search?: string) =>
    request<{ clubs: Club[]; total: number }>(`/api/clubs${queryString({ search })}`),

  getClub: (id: string) => request<{ club: ClubDetail }>(`/api/clubs/${id}`),

  getGuides: (params: { category?: string; search?: string } = {}) =>
    request<{ guides: GuideSummary[]; categories: GuideCategory[] }>(
      `/api/guides${queryString(params)}`
    ),

  getGuide: (slug: string) => request<{ guide: Guide }>(`/api/guides/${slug}`),

  getQuiz: (limit = 10, category?: string) =>
    request<{ questions: QuizQuestion[] }>(`/api/quiz${queryString({ limit, category })}`),

  checkAnswer: (questionId: string, answerIndex: number) =>
    request<{ result: QuizCheckResult }>('/api/quiz/check', {
      method: 'POST',
      body: JSON.stringify({ questionId, answerIndex })
    }),

  getMatches: (params: { status?: MatchStatus; team?: string; limit?: number } = {}) =>
    request<{ matches: Match[] }>(`/api/matches${queryString(params)}`),

  getStandings: () => request<{ standings: StandingRow[] }>('/api/standings'),

  getNews: (limit?: number) =>
    request<{ news: NewsItem[] }>(`/api/news${queryString({ limit })}`),

  getEra: () => request<EraOverview>('/api/era'),

  getEraPlayers: () => request<{ players: EraProfile[] }>('/api/era/players'),

  getEraPlayer: (slug: string) =>
    request<EraProfileDetail>(`/api/era/players/${slug}`),

  getEraManagers: () => request<{ managers: EraProfile[] }>('/api/era/managers'),

  getEraManager: (slug: string) =>
    request<EraProfileDetail>(`/api/era/managers/${slug}`),

  getEraStories: () => request<{ stories: EraStory[] }>('/api/era/stories'),

  getEraStory: (slug: string) =>
    request<EraStoryDetail>(`/api/era/stories/${slug}`),

  getEraSeasons: () => request<{ seasons: EraSeason[] }>('/api/era/seasons'),

  getEraSeason: (slug: string) =>
    request<EraSeasonDetailResponse>(`/api/era/seasons/${slug}`),

  getFindQuestions: () =>
    request<{ questions: FindQuestion[] }>('/api/clubs/find/questions'),

  findClubs: (answers: Record<string, number>) =>
    request<FindResponse>('/api/clubs/find', {
      method: 'POST',
      body: JSON.stringify({ answers })
    })
};
