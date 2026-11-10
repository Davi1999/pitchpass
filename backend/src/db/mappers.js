function parseJson(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

export function mapClub(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    nickname: row.nickname,
    city: row.city,
    stadium: row.stadium,
    founded: row.founded,
    colors: {
      primary: row.primary_color,
      secondary: row.secondary_color,
      text: row.text_color
    },
    initials: row.initials,
    vibe: row.vibe,
    summary: row.summary,
    description: row.description,
    beginnerNote: row.beginner_note,
    traits: parseJson(row.traits, []),
    rivalry: row.rivalry,
    honours: parseJson(row.honours, []),
    funFact: row.fun_fact
  };
}

export function mapGuide(row) {
  if (!row) return null;
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    summary: row.summary,
    readTime: row.read_time,
    difficulty: row.difficulty,
    emoji: row.emoji,
    featured: Boolean(row.featured),
    sections: parseJson(row.sections, []),
    keyTerms: parseJson(row.key_terms, [])
  };
}

export function mapGuideSummary(row) {
  const guide = mapGuide(row);
  if (!guide) return null;
  const { sections, keyTerms, ...summary } = guide;
  return summary;
}

export function mapQuizQuestion(row, includeAnswer = false) {
  if (!row) return null;
  const question = {
    id: row.id,
    prompt: row.prompt,
    options: parseJson(row.options, []),
    category: row.category,
    difficulty: row.difficulty
  };
  if (includeAnswer) {
    question.correctIndex = row.correct_index;
    question.explanation = row.explanation;
  }
  return question;
}

export function mapStanding(row, club) {
  if (!row) return null;
  return {
    position: row.position,
    played: row.played,
    won: row.won,
    drawn: row.drawn,
    lost: row.lost,
    goalsFor: row.goals_for,
    goalsAgainst: row.goals_against,
    goalDifference: row.goals_for - row.goals_against,
    points: row.points,
    form: parseJson(row.form, []),
    team: club
  };
}

export function mapNews(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category,
    excerpt: row.excerpt,
    publishedAt: row.published_at,
    readTime: row.read_time,
    emoji: row.emoji,
    relatedGuideSlug: row.related_guide_slug
  };
}
