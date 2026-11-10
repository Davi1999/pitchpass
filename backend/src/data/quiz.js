export const quizQuestions = [
  {
    id: 'q-clubs',
    prompt: 'How many clubs play in the Premier League?',
    options: ['16', '18', '20', '24'],
    correctIndex: 2,
    explanation:
      'There are 20 clubs. Each plays the other 19 twice — home and away — for 38 matches per club.',
    category: 'The league',
    difficulty: 'Starter'
  },
  {
    id: 'q-points',
    prompt: 'How many points does a team get for a win?',
    options: ['1', '2', '3', '4'],
    correctIndex: 2,
    explanation:
      'A win is worth 3 points, a draw is worth 1 point and a loss is worth 0.',
    category: 'The league',
    difficulty: 'Starter'
  },
  {
    id: 'q-relegation',
    prompt: 'What happens to the bottom three clubs at the end of the season?',
    options: [
      'They enter the play-offs',
      'They are relegated to the Championship',
      'They lose their stadium',
      'They get extra points'
    ],
    correctIndex: 1,
    explanation:
      'The bottom three are relegated to the Championship. Three clubs come up from the Championship to replace them.',
    category: 'The league',
    difficulty: 'Starter'
  },
  {
    id: 'q-offside-level',
    prompt: 'An attacker is exactly level with the last defender. Are they offside?',
    options: ['Yes', 'No', 'Only from a corner', 'Only in the box'],
    correctIndex: 1,
    explanation:
      'Level is onside. An attacker is only in an offside position if they are beyond the second-last opponent when the ball is played.',
    category: 'Rules',
    difficulty: 'Getting there'
  },
  {
    id: 'q-var',
    prompt: 'Which of these can VAR NOT review?',
    options: [
      'A possible penalty',
      'A possible red card',
      'A throw-in given the wrong way',
      'A goal in the build-up'
    ],
    correctIndex: 2,
    explanation:
      'VAR can review goals, penalties, red cards and mistaken identity. It cannot intervene for a throw-in or a normal free kick.',
    category: 'Rules',
    difficulty: 'Getting there'
  },
  {
    id: 'q-clean-sheet',
    prompt: 'What is a “clean sheet”?',
    options: [
      'A match with no yellow cards',
      'A team conceding zero goals',
      'A 0–0 draw',
      'A goalkeeper making ten saves'
    ],
    correctIndex: 1,
    explanation:
      'A clean sheet means a team conceded no goals in a match. It is not the same as a 0–0 draw — a team can win 2–0 and keep a clean sheet.',
    category: 'Matchday',
    difficulty: 'Starter'
  },
  {
    id: 'q-goal-difference',
    prompt: 'How is goal difference calculated?',
    options: [
      'Goals scored minus goals conceded',
      'Goals scored plus goals conceded',
      'Points minus wins',
      'Away goals minus home goals'
    ],
    correctIndex: 0,
    explanation:
      'Goal difference is goals scored minus goals conceded. It is the first tiebreaker when two clubs have the same number of points.',
    category: 'The league',
    difficulty: 'Starter'
  },
  {
    id: 'q-matches',
    prompt: 'How many league matches does each club play in a season?',
    options: ['19', '34', '38', '42'],
    correctIndex: 2,
    explanation:
      'Each club plays 38 matches: 19 at home and 19 away. Across the division, that is 380 matches in total.',
    category: 'The league',
    difficulty: 'Starter'
  },
  {
    id: 'q-fa-cup',
    prompt: 'Which competition is the oldest national knockout cup in world football?',
    options: ['The EFL Cup', 'The FA Cup', 'The Champions League', 'The Community Shield'],
    correctIndex: 1,
    explanation:
      'The FA Cup, first played in 1871/72, is the oldest national knockout football competition in the world.',
    category: 'History',
    difficulty: 'Getting there'
  },
  {
    id: 'q-derby',
    prompt: 'What is a “derby”?',
    options: [
      'A match played in the rain',
      'A match between local or historical rivals',
      'A match with no goals',
      'A cup final'
    ],
    correctIndex: 1,
    explanation:
      'A derby is a match between clubs with a local or historical rivalry. Examples include Arsenal vs Tottenham and Newcastle vs Sunderland.',
    category: 'Culture',
    difficulty: 'Starter'
  },
  {
    id: 'q-yellow',
    prompt: 'What happens if a player receives two yellow cards in the same match?',
    options: [
      'They are warned again',
      'They are substituted',
      'They are sent off',
      'The team loses a point'
    ],
    correctIndex: 2,
    explanation:
      'Two yellow cards become a red card. The player is sent off and their team plays with one fewer player.',
    category: 'Rules',
    difficulty: 'Starter'
  },
  {
    id: 'q-hattrick',
    prompt: 'What is a hat-trick?',
    options: [
      'Three saves in a row',
      'Three goals by the same player',
      'Three substitutions',
      'A 3–0 win'
    ],
    correctIndex: 1,
    explanation:
      'A hat-trick is three goals scored by the same player in a single match. Two goals is called a brace.',
    category: 'Matchday',
    difficulty: 'Starter'
  }
];
