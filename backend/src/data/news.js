const now = new Date();

function daysAgo(days) {
  const date = new Date(now);
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

export const news = [
  {
    id: 'news-first-matchday',
    title: 'Five things to know before your first matchday',
    slug: 'five-things-first-matchday',
    category: 'Starter kit',
    excerpt:
      'The clock keeps running, the crowd sings for longer than you expect, and nobody agrees on the offside call. Here is what to expect.',
    publishedAt: daysAgo(1),
    readTime: 4,
    emoji: '🎟️',
    relatedGuideSlug: 'matchday-basics'
  },
  {
    id: 'news-offside-level',
    title: 'Why “level is onside” is the whole offside rule',
    slug: 'level-is-onside',
    category: 'Rules',
    excerpt:
      'Offside is not about where a player is standing. It is about where they were when the ball was played — and whether they got involved.',
    publishedAt: daysAgo(2),
    readTime: 5,
    emoji: '🚩',
    relatedGuideSlug: 'offside-explained'
  },
  {
    id: 'news-table-race',
    title: 'Goal difference, Europe and the table, explained',
    slug: 'table-explained',
    category: 'The league',
    excerpt:
      'Points first, goal difference second. A simple guide to what the table is actually telling you after 12 matchdays.',
    publishedAt: daysAgo(3),
    readTime: 4,
    emoji: '📊',
    relatedGuideSlug: 'premier-league-explained'
  },
  {
    id: 'news-deadline-day',
    title: 'A newcomer’s guide to deadline day',
    slug: 'deadline-day-guide',
    category: 'Transfers',
    excerpt:
      'Loans, release clauses and a lot of airport photos. Here is how to follow transfer news without getting fooled.',
    publishedAt: daysAgo(4),
    readTime: 5,
    emoji: '🔁',
    relatedGuideSlug: 'transfer-windows'
  },
  {
    id: 'news-derby-day',
    title: 'What actually happens at a derby?',
    slug: 'what-happens-at-a-derby',
    category: 'Culture',
    excerpt:
      'The table says one thing, the crowd says another. A short field guide to the loudest, strangest days of the season.',
    publishedAt: daysAgo(5),
    readTime: 4,
    emoji: '🔥',
    relatedGuideSlug: 'derbies-and-rivalries'
  },
  {
    id: 'news-club-finder',
    title: 'How the PitchPass club finder works',
    slug: 'how-club-finder-works',
    category: 'PitchPass',
    excerpt:
      'Five questions, 20 clubs and a lot of deliberate oversimplification. Find a club that fits the way you actually watch football.',
    publishedAt: daysAgo(6),
    readTime: 3,
    emoji: '💚',
    relatedGuideSlug: 'how-to-pick-a-club'
  }
];
