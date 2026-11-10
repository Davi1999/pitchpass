export const discoveryQuestions = [
  {
    id: 'mood',
    prompt: 'What do you want from a matchday?',
    helper: 'There is no wrong answer. Pick the scene that sounds most like you.',
    options: [
      {
        label: 'A wall of noise',
        description: 'Give me the loudest stand in the ground.',
        weights: { atmosphere: 3, community: 1 }
      },
      {
        label: 'The biggest stage',
        description: 'I want trophies, drama and global occasion.',
        weights: { glory: 3, history: 1 }
      },
      {
        label: 'Something a bit different',
        description: 'I like clubs that do things their own way.',
        weights: { innovation: 3, underdog: 1 }
      }
    ]
  },
  {
    id: 'place',
    prompt: 'Where should your club be from?',
    helper: 'Geography is one of the simplest ways into a club.',
    options: [
      {
        label: 'London',
        description: 'Seven clubs, endless derbies, big-city energy.',
        weights: { london: 3, global: 1 }
      },
      {
        label: 'The north',
        description: 'Football towns, old grounds and serious pride.',
        weights: { north: 3, tradition: 1 }
      },
      {
        label: 'The coast and the south',
        description: 'Seaside air, shorter queues, a different pace.',
        weights: { south: 3, community: 1 }
      },
      {
        label: 'The Midlands',
        description: 'Heartland clubs with deep roots and proper history.',
        weights: { midlands: 3, tradition: 1 }
      }
    ]
  },
  {
    id: 'story',
    prompt: 'Which story pulls you in?',
    helper: 'Every club has a narrative. Choose the one you would follow.',
    options: [
      {
        label: 'Trophies and famous nights',
        description: 'I want to see silverware and European football.',
        weights: { glory: 3, history: 1 }
      },
      {
        label: 'The underdog breaking through',
        description: 'I love a club punching above its weight.',
        weights: { underdog: 3, community: 1 }
      },
      {
        label: 'A club with its own way',
        description: 'Smart recruitment, bold ideas, no copycats.',
        weights: { innovation: 3, value: 2 }
      }
    ]
  },
  {
    id: 'football',
    prompt: 'How do you like your football?',
    helper: 'Think about what you enjoy watching, not what sounds smart.',
    options: [
      {
        label: 'Quick and on the front foot',
        description: 'Pace, pressing and chances at both ends.',
        weights: { attacking: 3, possession: 1 }
      },
      {
        label: 'Control the game',
        description: 'Calm passing, patient build-up, chess on grass.',
        weights: { possession: 3, innovation: 1 }
      },
      {
        label: 'Grit and graft',
        description: 'Hard running, strong tackles and earned wins.',
        weights: { grit: 3, tradition: 1 }
      }
    ]
  },
  {
    id: 'values',
    prompt: 'What matters most off the pitch?',
    helper: 'The best club for you is the one whose identity you actually enjoy.',
    options: [
      {
        label: 'History and tradition',
        description: 'Old grounds, famous names and stories passed down.',
        weights: { history: 3, tradition: 2 }
      },
      {
        label: 'Community and belonging',
        description: 'A club that feels woven into its neighbourhood.',
        weights: { community: 3, atmosphere: 1 }
      },
      {
        label: 'Global reach and big names',
        description: 'Worldwide fans, superstar players, huge occasions.',
        weights: { global: 3, glory: 1 }
      },
      {
        label: 'Brave and different',
        description: 'A modern project with its own identity.',
        weights: { innovation: 2, underdog: 2, value: 1 }
      }
    ]
  }
];

export const traitLabels = {
  atmosphere: 'big-match atmosphere',
  community: 'community spirit',
  history: 'history',
  glory: 'trophy pedigree',
  innovation: 'a fresh approach',
  underdog: 'underdog energy',
  london: 'London life',
  north: 'northern football culture',
  south: 'a southern setting',
  midlands: 'Midlands roots',
  tradition: 'tradition',
  attacking: 'attacking football',
  grit: 'grit and graft',
  possession: 'possession football',
  global: 'global reach',
  value: 'smart recruitment'
};
