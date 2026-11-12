const now = new Date();

function daysAgo(days) {
  const date = new Date(now);
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

export const news = [
  {
    id: 'news-first-matchday',
    title: 'Matchday basics',
    slug: 'five-things-first-matchday',
    category: 'Matchday',
    excerpt:
      'The clock, stoppage time, substitutions and how to read the scoreboard.',
    publishedAt: daysAgo(1),
    readTime: 4,
    emoji: '🎟️',
    relatedGuideSlug: 'matchday-basics'
  },
  {
    id: 'news-offside-level',
    title: 'Offside: level is onside',
    slug: 'level-is-onside',
    category: 'Rules',
    excerpt:
      'An attacker level with the second-last defender is onside. Offside depends on when the ball is played and whether the player is involved.',
    publishedAt: daysAgo(2),
    readTime: 5,
    emoji: '🚩',
    relatedGuideSlug: 'offside-explained'
  },
  {
    id: 'news-table-race',
    title: 'How the league table works',
    slug: 'table-explained',
    category: 'League',
    excerpt:
      'Points, goal difference and what the top and bottom of the table mean.',
    publishedAt: daysAgo(3),
    readTime: 4,
    emoji: '📊',
    relatedGuideSlug: 'premier-league-explained'
  },
  {
    id: 'news-deadline-day',
    title: 'Transfer deadline day',
    slug: 'deadline-day-guide',
    category: 'Transfers',
    excerpt:
      'How transfer windows, loans and deadline-day announcements work.',
    publishedAt: daysAgo(4),
    readTime: 5,
    emoji: '🔁',
    relatedGuideSlug: 'transfer-windows'
  },
  {
    id: 'news-derby-day',
    title: 'What happens at a derby',
    slug: 'what-happens-at-a-derby',
    category: 'Culture',
    excerpt:
      'What a derby is and what to expect from a match between local rivals.',
    publishedAt: daysAgo(5),
    readTime: 4,
    emoji: '🔥',
    relatedGuideSlug: 'derbies-and-rivalries'
  },
  {
    id: 'news-club-finder',
    title: 'How the club finder works',
    slug: 'how-club-finder-works',
    category: 'Club finder',
    excerpt:
      'Five questions scored against all 20 clubs, with three suggested clubs.',
    publishedAt: daysAgo(6),
    readTime: 3,
    emoji: '💚',
    relatedGuideSlug: 'how-to-pick-a-club'
  }
];
