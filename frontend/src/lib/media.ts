/**
 * Central registry for PitchPass imagery.
 *
 * Club badges are the official crests of their respective clubs and are used
 * here for identification in an educational, non-commercial prototype. They
 * are not licensed for reuse. Photographs and diagrams are from Wikimedia
 * Commons and are used under the licences noted on each item.
 */

export interface MediaCredit {
  author: string;
  license: string;
  source: string;
}

export interface MediaImage {
  src: string;
  alt: string;
  caption: string;
  credit: MediaCredit;
  /** Smaller version used in cards, grids and lists. */
  thumb?: string;
  /** Diagrams should be contained rather than cropped. */
  fit?: 'cover' | 'contain';
}

export interface GuideFigure {
  /** Zero-based index of the section after which the figure is shown. */
  afterSection: number;
  image: MediaImage;
}

export interface GuideMedia {
  banner: MediaImage;
  figures?: GuideFigure[];
}

export interface ClubBadge {
  src: string;
  source: string;
}

export interface GuidePlayer {
  name: string;
  role: string;
  club: string;
  blurb: string;
  image: MediaImage;
}

/** Official club crests, keyed by the club initials used throughout the API. */
export const clubBadges: Record<string, ClubBadge> = {
  ARS: { src: '/media/badges/arsenal.svg', source: 'https://en.wikipedia.org/wiki/File:Arsenal_FC.svg' },
  AVL: { src: '/media/badges/aston-villa.svg', source: 'https://en.wikipedia.org/wiki/File:Aston_Villa_FC_new_crest.svg' },
  BOU: { src: '/media/badges/bournemouth.svg', source: 'https://en.wikipedia.org/wiki/File:AFC_Bournemouth_(2013).svg' },
  BRE: { src: '/media/badges/brentford.svg', source: 'https://en.wikipedia.org/wiki/File:Brentford_FC_crest.svg' },
  BHA: { src: '/media/badges/brighton.svg', source: 'https://en.wikipedia.org/wiki/File:Brighton_and_Hove_Albion_FC_crest.svg' },
  BUR: { src: '/media/badges/burnley.svg', source: 'https://en.wikipedia.org/wiki/File:Burnley_FC_Logo.svg' },
  CHE: { src: '/media/badges/chelsea.svg', source: 'https://en.wikipedia.org/wiki/File:Chelsea_FC.svg' },
  CRY: { src: '/media/badges/crystal-palace.svg', source: 'https://en.wikipedia.org/wiki/File:Crystal_Palace_FC_logo_(2022).svg' },
  EVE: { src: '/media/badges/everton.svg', source: 'https://en.wikipedia.org/wiki/File:Everton_FC_logo.svg' },
  FUL: { src: '/media/badges/fulham.svg', source: 'https://en.wikipedia.org/wiki/File:Fulham_FC.svg' },
  LEE: { src: '/media/badges/leeds.svg', source: 'https://en.wikipedia.org/wiki/File:Leeds_United_F.C._logo.svg' },
  LIV: { src: '/media/badges/liverpool.svg', source: 'https://en.wikipedia.org/wiki/File:Liverpool_FC.svg' },
  MCI: { src: '/media/badges/man-city.svg', source: 'https://en.wikipedia.org/wiki/File:Manchester_City_FC_badge.svg' },
  MUN: { src: '/media/badges/man-united.svg', source: 'https://en.wikipedia.org/wiki/File:Manchester_United_FC_crest.svg' },
  NEW: { src: '/media/badges/newcastle.svg', source: 'https://en.wikipedia.org/wiki/File:Newcastle_United_FC_2026_crest.svg' },
  NFO: { src: '/media/badges/nottingham-forest.svg', source: 'https://en.wikipedia.org/wiki/File:Nottingham_Forest_F.C._logo.svg' },
  SUN: { src: '/media/badges/sunderland.svg', source: 'https://en.wikipedia.org/wiki/File:Logo_Sunderland.svg' },
  TOT: { src: '/media/badges/tottenham.svg', source: 'https://en.wikipedia.org/wiki/File:Spurs_2017_badge.svg' },
  WHU: { src: '/media/badges/west-ham.svg', source: 'https://en.wikipedia.org/wiki/File:West_Ham_United_FC_logo.svg' },
  WOL: { src: '/media/badges/wolves.svg', source: 'https://en.wikipedia.org/wiki/File:Wolverhampton_Wanderers_FC_crest.svg' }
};

export function badgeFor(initials: string): ClubBadge | undefined {
  return clubBadges[initials.toUpperCase()];
}

/** Banners and inline figures for each guide, keyed by guide slug. */
export const guideMedia: Record<string, GuideMedia> = {
  'premier-league-explained': {
    banner: {
      src: '/media/guides/guide-league-banner.jpg',
      thumb: '/media/guides/thumbs/guide-league-banner.jpg',
      alt: 'A packed Emirates Stadium behind the goal during an Arsenal match',
      caption:
        'A Premier League ground on matchday: full stands, a pristine pitch and 90 minutes ahead.',
      credit: {
        author: 'Ronnie Macdonald',
        license: 'CC BY 2.0',
        source: 'https://commons.wikimedia.org/wiki/File:Emirates_Stadium_behind_the_goal.jpg'
      }
    },
    figures: [
      {
        afterSection: 0,
        image: {
          src: '/media/guides/guide-league-inline.jpg',
          alt: 'Newcastle United supporters filling the Gallowgate End at St James’ Park',
          caption:
            'Every club has its own matchday culture. Home supporters behind the goal often set the tone.',
          credit: {
            author: 'Ardfern',
            license: 'CC BY-SA 4.0',
            source:
              'https://commons.wikimedia.org/wiki/File:Newcastle_United_vs_AFC_Bournemouth%2C_5_September_2026_%2802%29.jpg'
          }
        }
      }
    ]
  },
  'offside-explained': {
    banner: {
      src: '/media/guides/guide-offside-banner.jpg',
      thumb: '/media/guides/thumbs/guide-offside-banner.jpg',
      alt: 'An assistant referee holding up an offside flag',
      caption:
        'The assistant referee’s flag is the first signal that an offside may have occurred.',
      credit: {
        author: 'Mark Lee',
        license: 'CC BY 2.0',
        source: 'https://commons.wikimedia.org/wiki/File:M_IMG_9649_%2841534955641%29.jpg'
      }
    },
    figures: [
      {
        afterSection: 0,
        image: {
          src: '/media/guides/guide-offside-diagram.jpg',
          alt: 'A football pitch diagram showing attackers, defenders and the ball at an offside moment',
          caption:
            'The attacker in blue is beyond the second-last defender when the ball is played. Being in that position is not an offence until the player becomes involved in play.',
          fit: 'contain',
          credit: {
            author: 'Chemicznytomek',
            license: 'CC BY 3.0',
            source: 'https://commons.wikimedia.org/wiki/File:Spalony_01.jpg'
          }
        }
      }
    ]
  },
  'var-explained': {
    banner: {
      src: '/media/guides/guide-var-banner.jpg',
      thumb: '/media/guides/thumbs/guide-var-banner.jpg',
      alt: 'A referee watching a pitch-side VAR monitor',
      caption:
        'The pitch-side monitor lets the referee review subjective decisions himself.',
      credit: {
        author: 'SounderBruce',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Baldomero_Toledo_checks_VAR_-_Seattle_Sounders_vs._Sporting_Kansas_City.jpg'
      }
    }
  },
  'cards-and-fouls': {
    banner: {
      src: '/media/guides/guide-cards-banner.jpg',
      thumb: '/media/guides/thumbs/guide-cards-banner.jpg',
      alt: 'A referee showing a yellow card to a player',
      caption: 'A yellow card is a formal warning. Two in one match become a red.',
      credit: {
        author: 'Tadeáš Bednarz',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Yellow_card%2C_Czech_Rp.-Montenegro_EURO_2020_QR_10-06-2019.jpg'
      }
    },
    figures: [
      {
        afterSection: 0,
        image: {
          src: '/media/guides/guide-cards-inline.jpg',
          alt: 'Arsenal and Sunderland players forming a free-kick wall',
          caption:
            'Free kicks are one of the game’s set-piece moments: the wall, the run-up and the delivery all matter.',
          credit: {
            author: 'Ronnie Macdonald',
            license: 'CC BY 2.0',
            source: 'https://commons.wikimedia.org/wiki/File:Arsenal_free_kick_vs_Sunderland_2.jpg'
          }
        }
      }
    ]
  },
  'matchday-basics': {
    banner: {
      src: '/media/guides/guide-matchday-banner.jpg',
      thumb: '/media/guides/thumbs/guide-matchday-banner.jpg',
      alt: 'Tottenham Hotspur Stadium under floodlights before a match',
      caption:
        'A modern Premier League ground at night. The lights, the crowd and the pitch all signal matchday.',
      credit: {
        author: 'Bluejam',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Tottenham_Hotspur_Stadium_South_Stand.jpg'
      }
    },
    figures: [
      {
        afterSection: 2,
        image: {
          src: '/media/guides/guide-matchday-inline.jpg',
          alt: 'West Ham players applauding their supporters after a match',
          caption:
            'After the final whistle, players and supporters share the moment. Home crowds and away days are part of the ritual.',
          credit: {
            author: 'Egghead06',
            license: 'CC BY 4.0',
            source: 'https://commons.wikimedia.org/wiki/File:Benrahma_celebrates.jpeg'
          }
        }
      }
    ]
  },
  'transfer-windows': {
    banner: {
      src: '/media/guides/guide-transfers-banner.jpg',
      thumb: '/media/guides/thumbs/guide-transfers-banner.jpg',
      alt: 'Manchester City shirts hanging in the dressing room',
      caption:
        'Squad building: clubs register players in two windows and reshape the dressing room for the season.',
      credit: {
        author: 'Christian David',
        license: 'CC BY-SA 4.0',
        source: 'https://commons.wikimedia.org/wiki/File:Manchester_City_dressing_room_2022.jpg'
      }
    },
    figures: [
      {
        afterSection: 1,
        image: {
          src: '/media/guides/guide-transfers-inline.jpg',
          alt: 'Arsenal players training before a European final',
          caption:
            'New signings need time to train and settle. A transfer is only the start of the process.',
          credit: {
            author: 'Amir Hosseini',
            license: 'CC BY 4.0',
            source:
              'https://commons.wikimedia.org/wiki/File:Arsenal_players_training_before_2019_UEFA_Europa_League_final_06.jpg'
          }
        }
      }
    ]
  },
  'positions-explained': {
    banner: {
      src: '/media/guides/guide-positions-banner.jpg',
      thumb: '/media/guides/thumbs/guide-positions-banner.jpg',
      alt: 'A wide view of a Premier League match at White Hart Lane',
      caption:
        'Watch the shape: defenders, midfielders and forwards occupy different zones of the pitch.',
      credit: {
        author: 'Ungry Young Man',
        license: 'CC BY 2.0',
        source: 'https://commons.wikimedia.org/wiki/File:Tottenham_vs_Stoke_-_15_August_2015.jpg'
      }
    },
    figures: [
      {
        afterSection: 0,
        image: {
          src: '/media/guides/guide-positions-diagram.png',
          alt: 'A football pitch diagram labelling goalkeeper, defenders, midfielders and forwards',
          caption:
            'The basic positions. Modern teams often rotate, but the labels still help you follow who is doing what.',
          fit: 'contain',
          credit: {
            author: 'Badseed, using work by User:玖巧仔 and Chandler',
            license: 'CC BY-SA 4.0',
            source: 'https://commons.wikimedia.org/wiki/File:Football_positions.svg'
          }
        }
      }
    ]
  },
  'cups-and-europe': {
    banner: {
      src: '/media/guides/guide-cups-banner.jpg',
      thumb: '/media/guides/thumbs/guide-cups-banner.jpg',
      alt: 'West Ham United celebrate winning the Europa Conference League with their supporters',
      caption: 'Cup nights bring trophies, travel and a different kind of celebration.',
      credit: {
        author: 'Egghead06',
        license: 'CC BY 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:West_Ham_Europa_Conference_champions.jpeg'
      }
    },
    figures: [
      {
        afterSection: 1,
        image: {
          src: '/media/guides/guide-cups-inline.jpg',
          alt: 'The FA Cup trophy on display',
          caption: 'The FA Cup is the oldest national knockout competition in world football.',
          credit: {
            author: 'Ank Kumar',
            license: 'CC BY-SA 4.0',
            source:
              'https://commons.wikimedia.org/wiki/File:FA_Cup_Trophy_at_Manchester_National_Football_Museum_%28Ank_Kumar%29_01.jpg'
          }
        }
      }
    ]
  },
  'how-to-pick-a-club': {
    banner: {
      src: '/media/guides/guide-pick-banner.jpg',
      thumb: '/media/guides/thumbs/guide-pick-banner.jpg',
      alt: 'West Ham supporters in the stands',
      caption:
        'Supporting a club is about the people as much as the results. Find a crowd you enjoy spending time with.',
      credit: {
        author: 'joshjdss',
        license: 'CC BY 2.0',
        source: 'https://commons.wikimedia.org/wiki/File:West_Ham_Vs_Birkrikara_%2819934049062%29.jpg'
      }
    },
    figures: [
      {
        afterSection: 0,
        image: {
          src: '/media/guides/guide-pick-inline.jpg',
          alt: 'A giant Liverpool banner on the Kop at Anfield',
          caption:
            'Some clubs have a distinct matchday culture. A banner, a song or a stand can be the thing that makes a club feel like yours.',
          credit: {
            author: 'Kevin Walsh',
            license: 'CC BY 2.0',
            source: 'https://commons.wikimedia.org/wiki/File:Anfield_Road_Kop_End_2008.jpg'
          }
        }
      }
    ]
  },
  'derbies-and-rivalries': {
    banner: {
      src: '/media/guides/guide-derbies-banner.jpg',
      thumb: '/media/guides/thumbs/guide-derbies-banner.jpg',
      alt: 'Arsenal and Tottenham players during a north London derby',
      caption:
        'Derbies are about more than three points: local pride and bragging rights are at stake.',
      credit: {
        author: 'wonker',
        license: 'CC BY 2.0',
        source: 'https://commons.wikimedia.org/wiki/File:Arsenal_vs_Tottenham.jpg'
      }
    },
    figures: [
      {
        afterSection: 1,
        image: {
          src: '/media/guides/guide-derbies-inline.jpg',
          alt: 'A Merseyside derby between Liverpool and Everton',
          caption:
            'Form can go out of the window in a derby. Expect intensity and a loud crowd.',
          credit: {
            author: 'Nigel Wilson',
            license: 'CC BY 2.0',
            source: 'https://commons.wikimedia.org/wiki/File:Merseyside_derby.jpg'
          }
        }
      }
    ]
  },
  'football-glossary': {
    banner: {
      src: '/media/guides/guide-glossary-banner.jpg',
      thumb: '/media/guides/thumbs/guide-glossary-banner.jpg',
      alt: 'A defensive wall forms for a direct free kick',
      caption: 'Set piece, wall, delivery, clearance — the glossary in action.',
      credit: {
        author: 'Bjørn Erik Pedersen',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Wall_on_direct_free_kick%2C_Sogndal-Rosenborg_07-15-2017.jpg'
      }
    }
  },
  'players-to-know': {
    banner: {
      src: '/media/guides/guide-players-banner.jpg',
      thumb: '/media/guides/thumbs/guide-players-banner.jpg',
      alt: 'Liverpool and Chelsea players competing for the ball',
      caption:
        'The Premier League’s best players are the reason many new fans start watching.',
      credit: {
        author: 'Mehdi Bolourian',
        license: 'CC BY 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_30.jpg'
      }
    }
  },
  'modern-era-primer': {
    banner: {
      src: '/media/guides/guide-modern-era-banner.jpg',
      thumb: '/media/guides/thumbs/guide-modern-era-banner.jpg',
      alt: 'Manchester City and Burnley players line up before a Premier League match at the Etihad Stadium',
      caption:
        'The modern era: packed stands, tactical detail and a league that never stops moving.',
      credit: {
        author: 'Fra Casa',
        license: 'CC0',
        source: 'https://commons.wikimedia.org/wiki/File:Manchester_City_-_Burnley_31_Jan_2024.jpg'
      }
    }
  },
  'last-three-seasons': {
    banner: {
      src: '/media/guides/guide-recent-seasons-banner.jpg',
      thumb: '/media/guides/thumbs/guide-recent-seasons-banner.jpg',
      alt: 'The Premier League trophy on display in Singapore',
      caption:
        'Recent seasons have been defined by tight title races, deep squads and fine margins.',
      credit: {
        author: 'Pangalau',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Trophy_of_FA_Premier_League_in_Singapore,_2023.jpg'
      }
    }
  },
  'reading-a-season': {
    banner: {
      src: '/media/guides/guide-reading-season-banner.jpg',
      thumb: '/media/guides/thumbs/guide-reading-season-banner.jpg',
      alt: 'An aerial view of Anfield, home of Liverpool',
      caption:
        'A season is a long story: home form, away days, cup runs and the run-in all shape the table.',
      credit: {
        author: 'Arne Müseler',
        license: 'CC BY-SA 3.0 DE',
        source: 'https://commons.wikimedia.org/wiki/File:Liverpool_anfield_road_stadium.jpg'
      }
    }
  }
};

/** Player portraits used by the “Players to know” guide. */
export const guidePlayers: GuidePlayer[] = [
  {
    name: 'Mohamed Salah',
    role: 'Forward',
    club: 'Liverpool',
    blurb: 'A forward who has been one of the league’s defining goalscorers.',
    image: {
      src: '/media/players/salah.jpg',
      thumb: '/media/players/thumbs/salah.jpg',
      alt: 'Mohamed Salah',
      caption: 'Mohamed Salah',
      credit: {
        author: 'Bryan Berlin',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Mohamed_Salah_Argentina_v_Egypt_7_July_2026-163_%28cropped%29.jpg'
      }
    }
  },
  {
    name: 'Erling Haaland',
    role: 'Striker',
    club: 'Manchester City',
    blurb: 'A centre-forward known for his movement in the box and his finishing.',
    image: {
      src: '/media/players/haaland.jpg',
      thumb: '/media/players/thumbs/haaland.jpg',
      alt: 'Erling Haaland',
      caption: 'Erling Haaland',
      credit: {
        author: 'Bryan Berlin',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg'
      }
    }
  },
  {
    name: 'Bukayo Saka',
    role: 'Winger',
    club: 'Arsenal',
    blurb: 'A wide attacker who dribbles, crosses and cuts inside to create chances.',
    image: {
      src: '/media/players/saka.jpg',
      thumb: '/media/players/thumbs/saka.jpg',
      alt: 'Bukayo Saka',
      caption: 'Bukayo Saka',
      credit: {
        author: 'Bryan Berlin',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Bukayo_Saka_England_v_Ghana_23_June_2026-057_%28cropped%29.jpg'
      }
    }
  },
  {
    name: 'Cole Palmer',
    role: 'Attacking midfielder',
    club: 'Chelsea',
    blurb: 'A creative attacker who drifts between midfield and the front line.',
    image: {
      src: '/media/players/palmer.jpg',
      thumb: '/media/players/thumbs/palmer.jpg',
      alt: 'Cole Palmer',
      caption: 'Cole Palmer',
      credit: {
        author: 'Timmy96',
        license: 'CC0',
        source: 'https://commons.wikimedia.org/wiki/File:Cole_Palmer_20042025_%281%29.jpg'
      }
    }
  },
  {
    name: 'Rodri',
    role: 'Midfielder',
    club: 'Manchester City',
    blurb: 'A deep midfielder who controls tempo and protects the defence.',
    image: {
      src: '/media/players/rodri.jpg',
      thumb: '/media/players/thumbs/rodri.jpg',
      alt: 'Rodri',
      caption: 'Rodri',
      credit: {
        author: 'Bryan Berlin',
        license: 'CC BY-SA 4.0',
        source:
          'https://commons.wikimedia.org/wiki/File:Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg'
      }
    }
  },
  {
    name: 'Virgil van Dijk',
    role: 'Centre-back',
    club: 'Liverpool',
    blurb: 'A commanding defender known for reading the game and organising the back line.',
    image: {
      src: '/media/players/van-dijk.jpg',
      thumb: '/media/players/thumbs/van-dijk.jpg',
      alt: 'Virgil van Dijk',
      caption: 'Virgil van Dijk',
      credit: {
        author: 'Timmy96',
        license: 'CC0',
        source: 'https://commons.wikimedia.org/wiki/File:Virgil_van_Dijk_06042025_%281%29.jpg'
      }
    }
  }
];

const playerPortraits: Record<string, MediaImage> = Object.fromEntries(
  guidePlayers.map((player) => [
    player.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, ''),
    player.image
  ])
);

/** Additional player portraits used by the modern-era profiles. */
const extraPlayerPortraits: Record<string, MediaImage> = {
  'declan-rice': {
    src: '/media/players/declan-rice.jpg',
    thumb: '/media/players/thumbs/declan-rice.jpg',
    alt: 'Declan Rice in an England shirt',
    caption: 'Declan Rice',
    credit: {
      author: 'Bryan Berlin',
      license: 'CC BY-SA 4.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Declan_Rice_England_v_Ghana_23_June_2026-150.jpg'
    }
  },
  'alexander-isak': {
    src: '/media/players/alexander-isak.jpg',
    thumb: '/media/players/thumbs/alexander-isak.jpg',
    alt: 'Alexander Isak in a Sweden shirt',
    caption: 'Alexander Isak',
    credit: {
      author: 'Mikael Hervestad',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Alexander_Isak_-_Sweden_-_Greece21_(cropped).jpg'
    }
  },
  'bruno-fernandes': {
    src: '/media/players/bruno-fernandes.jpg',
    thumb: '/media/players/thumbs/bruno-fernandes.jpg',
    alt: 'Bruno Fernandes in a Portugal tracksuit',
    caption: 'Bruno Fernandes',
    credit: {
      author: 'Bryan Berlin',
      license: 'CC BY-SA 4.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_(cropped).jpg'
    }
  },
  'alisson-becker': {
    src: '/media/players/alisson-becker.jpg',
    thumb: '/media/players/thumbs/alisson-becker.jpg',
    alt: 'Alisson Becker in a Brazil goalkeeper shirt',
    caption: 'Alisson Becker',
    credit: {
      author: 'Bryan Berlin',
      license: 'CC BY-SA 4.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_(cropped).jpg'
    }
  },
  'kevin-de-bruyne': {
    src: '/media/players/kevin-de-bruyne.jpg',
    thumb: '/media/players/thumbs/kevin-de-bruyne.jpg',
    alt: 'Kevin De Bruyne in a Belgium tracksuit',
    caption: 'Kevin De Bruyne',
    credit: {
      author: 'Bryan Berlin',
      license: 'CC BY-SA 4.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Kevin_De_Bruyne_USMNT_v_Belgium_Mar_28_2026-64_(cropped).jpg'
    }
  },
  'anthony-gordon': {
    src: '/media/players/anthony-gordon.jpg',
    thumb: '/media/players/thumbs/anthony-gordon.jpg',
    alt: 'Anthony Gordon in an England training bib',
    caption: 'Anthony Gordon',
    credit: {
      author: 'Bryan Berlin',
      license: 'CC BY-SA 4.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Anthony_Gordon_England_v_Ghana_23_June_2026-017_(cropped).jpg'
    }
  }
};

/** Manager portraits used by the modern-era profiles. */
export const managerPortraits: Record<string, MediaImage> = {
  'mikel-arteta': {
    src: '/media/players/arteta.jpg',
    thumb: '/media/players/thumbs/arteta.jpg',
    alt: 'Mikel Arteta on the touchline at a stadium',
    caption: 'Mikel Arteta',
    credit: {
      author: 'Maryland GovPics',
      license: 'CC BY 2.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Arsenal_v_Everton_-_52223142689_(cropped).jpg'
    }
  },
  'pep-guardiola': {
    src: '/media/players/guardiola.jpg',
    thumb: '/media/players/thumbs/guardiola.jpg',
    alt: 'Pep Guardiola at a press conference',
    caption: 'Pep Guardiola',
    credit: {
      author: 'Steffen Prößdorf',
      license: 'CC BY-SA 4.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Josep_Guardiola_2023-10-04_Fu%C3%9Fball,_M%C3%A4nner,_UEFA_Champions_League,_RB_Leipzig_-_Manchester_City_FC_1DX_2797_(cropped).jpg'
    }
  },
  'arne-slot': {
    src: '/media/players/slot.jpg',
    thumb: '/media/players/thumbs/slot.jpg',
    alt: 'Arne Slot being interviewed',
    caption: 'Arne Slot',
    credit: {
      author: 'Carlo Bruil Fotografie',
      license: 'CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Arne_Slot_in_2024.jpg'
    }
  },
  'enzo-maresca': {
    src: '/media/players/maresca.jpg',
    thumb: '/media/players/thumbs/maresca.jpg',
    alt: 'Enzo Maresca on the touchline',
    caption: 'Enzo Maresca',
    credit: {
      author: 'Oscar0123',
      license: 'CC BY-SA 4.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Enzo_maresca_chelsea_gent_2024_(extracted).jpg'
    }
  },
  'eddie-howe': {
    src: '/media/players/howe.jpg',
    thumb: '/media/players/thumbs/howe.jpg',
    alt: 'Eddie Howe outside a stadium',
    caption: 'Eddie Howe',
    credit: {
      author: 'Timmy96',
      license: 'CC0',
      source: 'https://commons.wikimedia.org/wiki/File:Eddie_Howe_24052026_(1).jpg'
    }
  },
  'unai-emery': {
    src: '/media/players/emery.jpg',
    thumb: '/media/players/thumbs/emery.jpg',
    alt: 'Unai Emery in a suit',
    caption: 'Unai Emery',
    credit: {
      author: 'Aleksandr Osipov',
      license: 'CC BY-SA 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Unai_Emery_-_Sevilla_(cropped).jpg'
    }
  },
  'thomas-frank': {
    src: '/media/players/frank.jpg',
    thumb: '/media/players/thumbs/frank.jpg',
    alt: 'Thomas Frank speaking at a press event',
    caption: 'Thomas Frank',
    credit: {
      author: 'KICK-OFF (@KICK-OFF1) YouTube channel',
      license: 'CC BY 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Thomas_Frank_(cropped)_2.jpeg'
    }
  },
  'ruben-amorim': {
    src: '/media/players/amorim.png',
    thumb: '/media/players/thumbs/amorim.png',
    alt: 'Rúben Amorim at a press conference',
    caption: 'Rúben Amorim',
    credit: {
      author: 'Agência LUSA',
      license: 'CC BY 3.0',
      source:
        'https://commons.wikimedia.org/wiki/File:Ruben_Amorim,_January_2024_(cropped).png'
    }
  }
};

/**
 * All modern-era profile portraits, keyed by profile slug. Profiles without a
 * portrait fall back to a monogram in the UI.
 */
export const eraPortraits: Record<string, MediaImage> = {
  ...playerPortraits,
  ...extraPlayerPortraits,
  ...managerPortraits
};

/** Deduplicated list of every photo used on the site, for the credits page. */
export const photoCredits: MediaImage[] = (() => {
  const seen = new Set<string>();
  const images: MediaImage[] = [];

  for (const media of Object.values(guideMedia)) {
    const all = [media.banner, ...(media.figures?.map((figure) => figure.image) ?? [])];
    for (const image of all) {
      if (seen.has(image.src)) continue;
      seen.add(image.src);
      images.push(image);
    }
  }

  for (const player of guidePlayers) {
    if (seen.has(player.image.src)) continue;
    seen.add(player.image.src);
    images.push(player.image);
  }

  for (const portrait of Object.values(eraPortraits)) {
    if (seen.has(portrait.src)) continue;
    seen.add(portrait.src);
    images.push(portrait);
  }

  return images;
})();
