export const discoveryQuestions = [
  {
    id: 'mood',
    prompt: 'What do you want from a matchday?',
    helper: 'Choose the option closest to what you enjoy.',
    options: [
      {
        label: 'Loud home support',
        description: 'The loudest stand in the ground.',
        weights: { atmosphere: 3, community: 1 }
      },
      {
        label: 'Big matches and trophies',
        description: 'Major trophies, large crowds and European competition.',
        weights: { glory: 3, history: 1 }
      },
      {
        label: 'A club with its own approach',
        description: 'Clubs that do things differently.',
        weights: { innovation: 3, underdog: 1 }
      }
    ]
  },
  {
    id: 'place',
    prompt: 'Where should your club be from?',
    helper: 'Choose a region.',
    options: [
      {
        label: 'London',
        description: 'Seven Premier League clubs are in London.',
        weights: { london: 3, global: 1 }
      },
      {
        label: 'The north',
        description: 'Football towns with large, long-established supports.',
        weights: { north: 3, tradition: 1 }
      },
      {
        label: 'The coast and the south',
        description: 'Bournemouth and Brighton are on the south coast.',
        weights: { south: 3, community: 1 }
      },
      {
        label: 'The Midlands',
        description: 'Aston Villa, Wolves and Nottingham Forest are in the Midlands.',
        weights: { midlands: 3, tradition: 1 }
      }
    ]
  },
  {
    id: 'story',
    prompt: 'Which club history interests you?',
    helper: 'Choose the history you would follow.',
    options: [
      {
        label: 'Trophies and European competition',
        description: 'Clubs with major trophies and European matches.',
        weights: { glory: 3, history: 1 }
      },
      {
        label: 'An underdog club',
        description: 'Clubs that have climbed the divisions or compete with smaller budgets.',
        weights: { underdog: 3, community: 1 }
      },
      {
        label: 'A club with its own approach',
        description: 'Clubs known for recruitment or a distinct style.',
        weights: { innovation: 3, value: 2 }
      }
    ]
  },
  {
    id: 'football',
    prompt: 'What style of football do you prefer?',
    helper: 'Choose the style you most enjoy watching.',
    options: [
      {
        label: 'Fast, attacking football',
        description: 'Pace, pressing and chances at both ends.',
        weights: { attacking: 3, possession: 1 }
      },
      {
        label: 'Possession football',
        description: 'Patient build-up and control of the ball.',
        weights: { possession: 3, innovation: 1 }
      },
      {
        label: 'Physical, hard-working football',
        description: 'Hard running, strong tackles and earned wins.',
        weights: { grit: 3, tradition: 1 }
      }
    ]
  },
  {
    id: 'values',
    prompt: 'What matters most off the pitch?',
    helper: 'Choose the club identity that appeals most.',
    options: [
      {
        label: 'History and tradition',
        description: 'Old grounds, long histories and established routines.',
        weights: { history: 3, tradition: 2 }
      },
      {
        label: 'Community and belonging',
        description: 'A club connected to its local area.',
        weights: { community: 3, atmosphere: 1 }
      },
      {
        label: 'Global support and big names',
        description: 'Worldwide supporters and high-profile players.',
        weights: { global: 3, glory: 1 }
      },
      {
        label: 'Innovation',
        description: 'A modern club with its own approach.',
        weights: { innovation: 2, underdog: 2, value: 1 }
      }
    ]
  }
];

export const traitLabels = {
  atmosphere: 'atmosphere',
  community: 'community',
  history: 'history',
  glory: 'trophies',
  innovation: 'innovation',
  underdog: 'underdog club',
  london: 'London',
  north: 'northern England',
  south: 'southern England',
  midlands: 'the Midlands',
  tradition: 'tradition',
  attacking: 'attacking football',
  grit: 'physical football',
  possession: 'possession football',
  global: 'global support',
  value: 'recruitment'
};
