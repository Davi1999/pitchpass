export const guides = [
  {
    id: 'guide-league',
    slug: 'premier-league-explained',
    title: 'Premier League format',
    category: 'The basics',
    summary:
      'How the league works: 20 clubs, 38 matches per club, points, goal difference and relegation.',
    readTime: 6,
    difficulty: 'Starter',
    emoji: '🏟️',
    sortOrder: 1,
    featured: true,
    sections: [
      {
        heading: 'Clubs and matches',
        body:
          'The Premier League is the top division of English men’s football. It has 20 clubs, and every club plays every other club twice — once at home and once away. That makes 38 matches per club and 380 matches across the season.',
        bullets: [
          'A win is worth 3 points.',
          'A draw is worth 1 point to each team.',
          'A loss is worth 0 points.',
          'The team with the most points at the end of the season is champions.'
        ]
      },
      {
        heading: 'The table',
        body:
          'The league table is ranked by points first. If two clubs have the same points, goal difference decides who is higher — that is goals scored minus goals conceded. If goal difference is also equal, the tie goes to goals scored, then to head-to-head results.',
        bullets: [
          'Top four: a place in the Champions League (usually).',
          'Fifth: often a Europa League place.',
          'Bottom three: relegated to the Championship.'
        ]
      },
      {
        heading: 'There is no play-off for the title',
        body:
          'The Premier League does not finish with a play-off. The table after 38 matches is final. The three lowest clubs are relegated and replaced by three clubs promoted from the Championship, which is the division below.',
        bullets: [
          'The Championship promotes two clubs automatically and one via play-offs.',
          'Relegated clubs lose their Premier League broadcast income.',
          'Promoted clubs often spend heavily to try to stay up.'
        ]
      },
      {
        heading: 'The cups are separate competitions',
        body:
          'The Premier League is one of several competitions a club plays in. The FA Cup and EFL Cup are knockout tournaments, and the best clubs also play in European competitions. Winning a cup does not change your league position.',
        bullets: [
          'FA Cup: the oldest national knockout competition in world football.',
          'EFL Cup: also known as the Carabao Cup, open to clubs in the top four divisions.',
          'UEFA competitions: Champions League, Europa League and Conference League.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Matchday', definition: 'A round of fixtures. A Premier League season has 38 matchdays.' },
      { term: 'Goal difference', definition: 'Goals scored minus goals conceded. Used to split teams on equal points.' },
      { term: 'Relegation', definition: 'Dropping to the division below at the end of the season.' },
      { term: 'Champions League', definition: 'Europe’s top club competition, usually offering places to the top four.' }
    ]
  },
  {
    id: 'guide-offside',
    slug: 'offside-explained',
    title: 'Offside rule explained',
    category: 'Rules',
    summary:
      'The offside rule in three checks: position, the moment the ball is played and involvement in play.',
    readTime: 5,
    difficulty: 'Starter',
    emoji: '🚩',
    sortOrder: 2,
    featured: true,
    sections: [
      {
        heading: 'The short version',
        body:
          'A player is offside if they are in the opposition half, closer to the goal line than both the ball and the second-last opponent, and they become involved in play. The second-last opponent is usually the last defender, with the goalkeeper being the last opponent.',
        bullets: [
          'Being in an offside position is not an offence by itself.',
          'The player must be involved in active play to be penalised.',
          'You cannot be offside from a throw-in, goal kick or corner kick.'
        ]
      },
      {
        heading: 'Three questions the referee asks',
        body:
          'Offside is a sequence of checks. First: was the player ahead of the second-last opponent when the ball was played? Second: was the player in the opposition half? Third: did they get involved — by playing the ball, interfering with an opponent, or gaining an advantage?',
        bullets: [
          'If the answer to any question is no, there is no offside.',
          'If the player is level with the second-last opponent, they are onside.',
          'The moment that matters is when the ball is passed, not when it is received.'
        ]
      },
      {
        heading: 'Level is onside',
        body:
          'If any part of the attacker that can legally score is level with the defender, the attacker is onside. Officials and technology use very fine margins, so close calls can be difficult to judge on replay.',
        bullets: [
          '“Level” means level, not a little bit behind.',
          'Hands and arms are generally not considered for offside position.',
          'Semi-automated offside technology is being introduced to speed up decisions.'
        ]
      },
      {
        heading: 'Why the rule exists',
        body:
          'Without offside, attackers could stand next to the goalkeeper and wait for long passes. The rule keeps the game stretched, rewards timing and movement, and gives defenders a reason to hold a line.',
        bullets: [
          'Strikers practise timing runs to stay onside.',
          'Defenders practise stepping up together to catch attackers offside.',
          'A timed run in behind the defence is a common attacking move.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Offside position', definition: 'Being beyond the second-last opponent in the opposition half when the ball is played.' },
      { term: 'Active play', definition: 'Involvement in the move — playing the ball, challenging an opponent or gaining an advantage.' },
      { term: 'Second-last opponent', definition: 'Usually the last outfield defender; the goalkeeper is normally the last opponent.' }
    ]
  },
  {
    id: 'guide-var',
    slug: 'var-explained',
    title: 'VAR explained',
    category: 'Rules',
    summary:
      'What VAR can review, how a review works and why decisions can take time.',
    readTime: 5,
    difficulty: 'Getting there',
    emoji: '📺',
    sortOrder: 3,
    featured: false,
    sections: [
      {
        heading: 'What VAR is',
        body:
          'VAR stands for Video Assistant Referee. A team of officials watches the match from a video room and can advise the on-field referee when there has been a clear error or a missed serious incident. The on-field referee makes the final decision.',
        bullets: [
          'VAR does not review every decision.',
          'It only intervenes for specific, game-changing situations.',
          'The threshold is a “clear and obvious error” or a “serious missed incident”.'
        ]
      },
      {
        heading: 'The four reviewable categories',
        body:
          'VAR can only get involved in four areas. If an incident does not fit one of these categories, VAR cannot step in, even if the decision looks wrong.',
        bullets: [
          'Goals: was there an offence in the build-up, or was the ball out of play?',
          'Penalties: was a foul inside the area, or was the wrong decision given?',
          'Red cards: was a straight red card missed or incorrectly shown?',
          'Mistaken identity: was the wrong player cautioned or sent off?'
        ]
      },
      {
        heading: 'The pitch-side monitor',
        body:
          'For subjective decisions — a possible foul, handball or red card — the referee may be asked to look at the monitor themselves. This is called an on-field review. For factual decisions, such as offside or whether the ball crossed the line, the video team can decide without the referee leaving the pitch.',
        bullets: [
          'Factual: offside, ball out of play, goal-line technology.',
          'Subjective: fouls, handball, red-card severity.',
          'The final call belongs to the referee.'
        ]
      },
      {
        heading: 'Why reviews take time',
        body:
          'Checking multiple camera angles, identifying the exact moment of contact and applying the offside law can take time. Broadcasters often show replays before the officials have finished, so supporters in the stadium may wait without an explanation.',
        bullets: [
          'Semi-automated offside uses tracking technology to speed up line-drawing.',
          'Supporters often criticise the lack of in-stadium communication.',
          'The “clear and obvious” threshold is a frequent subject of debate.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Clear and obvious error', definition: 'The high threshold VAR uses before recommending a change to a decision.' },
      { term: 'On-field review', definition: 'When the referee watches the incident again on a pitch-side monitor.' },
      { term: 'Semi-automated offside', definition: 'Technology that tracks players’ limbs to help officials judge offside faster.' }
    ]
  },
  {
    id: 'guide-cards',
    slug: 'cards-and-fouls',
    title: 'Cards, fouls and penalties',
    category: 'Rules',
    summary:
      'Fouls, free kicks, yellow and red cards, and how penalty kicks work.',
    readTime: 4,
    difficulty: 'Starter',
    emoji: '🟨',
    sortOrder: 4,
    featured: false,
    sections: [
      {
        heading: 'Fouls and free kicks',
        body:
          'A foul is an unfair challenge or physical contact that the referee judges to be careless, reckless or excessive. Most fouls lead to a free kick. If the foul happens inside the penalty area, the attacking team gets a penalty instead.',
        bullets: [
          'Direct free kick: the ball can be shot straight into the goal.',
          'Indirect free kick: the ball must touch another player before a goal can be scored.',
          'The referee can play an advantage if the fouled team keeps a promising attack.'
        ]
      },
      {
        heading: 'Yellow cards',
        body:
          'A yellow card is a formal warning. It is shown for a reckless foul, delaying the restart, dissent or a deliberate tactical foul. Two yellow cards in the same match mean a red card and the player leaves the pitch.',
        bullets: [
          'Yellow cards accumulate across matches and can lead to suspension.',
          'A second yellow is shown as a red card, and the player is off.',
          'Not every foul is a yellow card.'
        ]
      },
      {
        heading: 'Red cards',
        body:
          'A red card means the player is sent off and their team plays with one fewer player. It is shown for serious foul play, violent conduct, spitting, denying an obvious goal-scoring opportunity, or a second yellow card.',
        bullets: [
          'A red card usually carries an automatic suspension.',
          'A team can never replace a sent-off player.',
          'If a goalkeeper is sent off, an outfield player may have to go in goal if all substitutions are used.'
        ]
      },
      {
        heading: 'The penalty area',
        body:
          'The penalty area is the large box around each goal. A direct free-kick offence by the defending team inside that box becomes a penalty kick from 12 yards. The goalkeeper must keep at least one foot on the line when the kick is taken.',
        bullets: [
          'A penalty is a free shot with only the goalkeeper to beat.',
          'Encroachment by other players can lead to a re-take.',
          'A penalty is taken from 12 yards.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Direct free kick', definition: 'A free kick from which a goal can be scored directly.' },
      { term: 'Penalty', definition: 'A free shot from 12 yards awarded for a foul inside the penalty area.' },
      { term: 'Second yellow', definition: 'A second caution in one match, which becomes a red card.' }
    ]
  },
  {
    id: 'guide-matchday',
    slug: 'matchday-basics',
    title: 'Matchday basics',
    category: 'Matchday',
    summary:
      'Match length, stoppage time, substitutions, home and away, and how to read the scoreboard.',
    readTime: 4,
    difficulty: 'Starter',
    emoji: '⏱️',
    sortOrder: 5,
    featured: true,
    sections: [
      {
        heading: 'The clock',
        body:
          'A match is two 45-minute halves. The clock keeps running when the ball goes out of play, and the referee adds stoppage time at the end of each half for injuries, substitutions and delays. A match usually lasts around 94 to 95 minutes of real time.',
        bullets: [
          'Half-time is a 15-minute break.',
          'Stoppage time is shown on the fourth official’s board.',
          'The referee decides exactly when the half ends.'
        ]
      },
      {
        heading: 'Eleven starters, five substitutes',
        body:
          'Each team starts with 11 players: one goalkeeper and ten outfield players. Clubs can name a bench of substitutes and make up to five changes during a match, usually across three substitution windows.',
        bullets: [
          'A substitute cannot re-enter once they have been replaced.',
          'Concussion substitutions are handled separately.',
          'A red card reduces the team to ten players; substitutions do not replace them.'
        ]
      },
      {
        heading: 'Home and away',
        body:
          'The home team plays at their own stadium. The away team travels. Home advantage comes from familiar surroundings, a supportive crowd and no travel.',
        bullets: [
          'Home teams generally win more often than away teams.',
          'Away goals are not worth extra points in the league.',
          'Away supporters are usually given a section of the ground.'
        ]
      },
      {
        heading: 'Reading the scoreboard',
        body:
          'A scoreboard shows the score, the time and often the scorers. If the score is 2–1, the first number is the home team. A blank against a team means zero. When a match finishes level, it is a draw and both teams get one point.',
        bullets: [
          'Clean sheet: a team concedes zero goals.',
          'Hat-trick: one player scores three goals.',
          'Own goal: a goal credited to the opposition after a defensive mistake.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Stoppage time', definition: 'Time added at the end of each half for delays.' },
      { term: 'Clean sheet', definition: 'A match in which a team concedes no goals.' },
      { term: 'Hat-trick', definition: 'Three goals scored by the same player in one match.' }
    ]
  },
  {
    id: 'guide-transfers',
    slug: 'transfer-windows',
    title: 'Transfer windows and deadline day',
    category: 'Beyond the league',
    summary:
      'When clubs can sign players, how fees and loans work, and which financial rules apply.',
    readTime: 5,
    difficulty: 'Getting there',
    emoji: '🔁',
    sortOrder: 7,
    featured: false,
    sections: [
      {
        heading: 'Two windows per season',
        body:
          'Clubs cannot sign players whenever they like. There are two registration windows: a longer summer window and a shorter January window. Outside those windows, clubs can generally only sign free agents or complete pre-arranged deals.',
        bullets: [
          'The summer window usually runs from June to early September.',
          'The January window runs through the month.',
          'Deadline day is the final day of a window.'
        ]
      },
      {
        heading: 'Fees, contracts and loans',
        body:
          'A transfer fee is paid to the selling club for the player’s registration. The player then agrees personal terms and a contract. A loan is a temporary move: the parent club keeps the player’s registration, while the borrowing club gets them for a set period, sometimes with an option or obligation to buy.',
        bullets: [
          'Free transfer: the player moves without a fee, usually at the end of a contract.',
          'Loan fee: a payment made to borrow a player.',
          'Release clause: a set fee that allows a club to buy out a contract.'
        ]
      },
      {
        heading: 'Financial rules',
        body:
          'Big fees are often paid in instalments, and accounting rules spread the cost across the contract. An £80m signing therefore does not necessarily appear as an £80m cost in one year. Financial rules also limit how much clubs can spend relative to their revenue.',
        bullets: [
          'Profit and Sustainability Rules (PSR) limit allowable losses.',
          'Squad cost rules cap spending on wages, fees and agents relative to revenue.',
          'Clubs can be sanctioned for breaching financial rules.'
        ]
      },
      {
        heading: 'Following transfer news',
        body:
          'Transfer news is a mix of reporting, negotiation leaks and unverified claims. Treat social media posts as leads, not facts. A transfer is official when the clubs announce it.',
        bullets: [
          'Look for club statements and league registration.',
          'Medical tests and work permits can delay announcements.',
          'Many deadline-day reports remain unconfirmed until a club announcement.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Transfer window', definition: 'A period when clubs can register new players.' },
      { term: 'Loan', definition: 'A temporary move where the parent club keeps the player’s registration.' },
      { term: 'Free agent', definition: 'A player without a club, free to sign outside a transfer window.' },
      { term: 'PSR', definition: 'Profit and Sustainability Rules — financial limits designed to keep clubs sustainable.' }
    ]
  },
  {
    id: 'guide-positions',
    slug: 'positions-explained',
    title: 'Positions explained',
    category: 'The basics',
    summary:
      'The role of each position, from goalkeeper to forward, and the most common formations.',
    readTime: 6,
    difficulty: 'Starter',
    emoji: '🧭',
    sortOrder: 6,
    featured: false,
    sections: [
      {
        heading: 'Goalkeeper (GK)',
        body:
          'The goalkeeper is the only player allowed to handle the ball inside their own penalty area. Their job is to stop shots, claim crosses and start attacks. Modern goalkeepers are also expected to be comfortable with the ball at their feet.',
        bullets: [
          'Must wear a different colour from outfield players.',
          'Can only handle the ball inside their own penalty area.',
          'Often acts as an extra passer when the team builds from the back.'
        ]
      },
      {
        heading: 'Defenders',
        body:
          'Defenders protect the goal and try to stop attacks. Centre-backs usually mark strikers and defend crosses; full-backs play on the left or right and often push forward to support attacks. Some teams use wing-backs, who cover the whole flank.',
        bullets: [
          'Centre-back (CB): central defender, strong in the air and in tackles.',
          'Full-back (LB/RB): wide defender who joins attacks.',
          'Wing-back (LWB/RWB): a more attacking wide defender in a back-three system.'
        ]
      },
      {
        heading: 'Midfielders',
        body:
          'Midfielders link defence and attack. A holding midfielder protects the back line; a central midfielder covers ground and keeps the ball moving; an attacking midfielder plays closer to the strikers and creates chances.',
        bullets: [
          'Defensive midfielder (DM): screens the defence and breaks up play.',
          'Central midfielder (CM): passes, presses and covers ground.',
          'Attacking midfielder (AM): plays between the lines and creates chances.'
        ]
      },
      {
        heading: 'Forwards',
        body:
          'Forwards score goals and stretch defences. A centre-forward leads the line; wingers attack from wide areas; a false nine is a striker who drops deep to create space for others rather than staying on the last defender.',
        bullets: [
          'Striker (ST): penalty-box finisher and focal point.',
          'Winger (LW/RW): wide attacker who dribbles, crosses or cuts inside.',
          'False nine (CF): a forward who drops into midfield to disrupt defenders.'
        ]
      },
      {
        heading: 'Formations',
        body:
          'A formation like 4-3-3 describes how players line up at kick-off: four defenders, three midfielders and three forwards. Teams shift during matches, with defenders overlapping, midfielders rotating and forwards pressing. The formation is the starting shape.',
        bullets: [
          '4-3-3: three midfielders and three forwards, often with wide attackers.',
          '4-2-3-1: two holding midfielders behind an attacking trio.',
          '3-5-2: three centre-backs with wing-backs providing width.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Formation', definition: 'The starting arrangement of a team, such as 4-3-3 or 4-2-3-1.' },
      { term: 'False nine', definition: 'A forward who drops into midfield instead of staying high.' },
      { term: 'Wing-back', definition: 'A wide defender expected to attack as well as defend.' }
    ]
  },
  {
    id: 'guide-cups',
    slug: 'cups-and-europe',
    title: 'Cups and European qualification',
    category: 'Beyond the league',
    summary:
      'The FA Cup, EFL Cup and European competitions, and how qualification places are awarded.',
    readTime: 6,
    difficulty: 'Getting there',
    emoji: '🏆',
    sortOrder: 8,
    featured: false,
    sections: [
      {
        heading: 'One season, several competitions',
        body:
          'A Premier League club can play in the league, two domestic cups and up to three European competitions. That means a busy calendar, squad rotation and a lot of travel. The league measures consistency across the season; the cups are knockout trophies.',
        bullets: [
          'Premier League: 38 matches, decided by the table.',
          'FA Cup: knockout competition open to clubs across the football pyramid.',
          'EFL Cup: knockout competition for the top four divisions.'
        ]
      },
      {
        heading: 'The FA Cup',
        body:
          'The FA Cup is the oldest national knockout competition in world football. It is a single-elimination tournament: lose and you are out. Lower-division clubs can host bigger teams in early rounds, which is where upsets often happen.',
        bullets: [
          'Draws are settled by a replay in some rounds, or extra time and penalties.',
          'The final is played at Wembley Stadium.',
          'Winning the FA Cup brings a place in the Europa League.'
        ]
      },
      {
        heading: 'The EFL Cup',
        body:
          'The EFL Cup, currently branded the Carabao Cup, is the other major domestic knockout trophy. Big clubs often use it to give younger players and squad players minutes, especially in the early rounds. The final is also at Wembley.',
        bullets: [
          'Two-legged semi-finals are used in some seasons.',
          'The winner qualifies for the Europa Conference League play-off round.',
          'It is a realistic trophy target for clubs outside the title race.'
        ]
      },
      {
        heading: 'European qualification',
        body:
          'The top clubs qualify for UEFA competitions based on league position and cup results. The Champions League is the highest tier; the Europa League and Conference League are the other two. The exact number of places can change based on English clubs’ performance in Europe.',
        bullets: [
          'Champions League: the top European competition, with a league phase.',
          'Europa League: the second tier of European competition.',
          'Conference League: the third tier, for clubs from across Europe.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Cup tie', definition: 'A knockout match. Lose and you are eliminated.' },
      { term: 'Aggregate', definition: 'The combined score across two legs of a tie.' },
      { term: 'Coefficient', definition: 'A ranking score used to allocate European places and seedings.' }
    ]
  },
  {
    id: 'guide-pick-club',
    slug: 'how-to-pick-a-club',
    title: 'How to pick a club',
    category: 'Culture',
    summary:
      'Factors to consider when choosing a Premier League club to support.',
    readTime: 5,
    difficulty: 'Starter',
    emoji: '💚',
    sortOrder: 9,
    featured: true,
    sections: [
      {
        heading: 'Common reasons for choosing a club',
        body:
          'People choose clubs for many reasons: geography, family, a player they liked, a shirt, a stadium or a single memorable match. There is no entrance exam. The main test is whether you enjoy following the club.',
        bullets: [
          'Local clubs offer the easiest connection and the best chance to attend games.',
          'Family ties are a common route into supporting a club.',
          'A player, a style of play or a colour can be a starting point.'
        ]
      },
      {
        heading: 'Watch matches first',
        body:
          'Watch a few full matches before deciding. Notice what you enjoy: a loud crowd, a passing team, an underdog or a big occasion. Full matches show the rhythm of a team better than highlights.',
        bullets: [
          'Watch a game with the sound on to hear the crowd.',
          'Try a neutral match and see which team you support naturally.',
          'Read about a club’s history and supporters before deciding.'
        ]
      },
      {
        heading: 'Decide what you want from following',
        body:
          'Some people want trophies and European matches. Others want a community club, a local ground or a team that develops young players. Being clear about what you enjoy will help you choose a club that fits.',
        bullets: [
          'Trophy-chasing brings expectation and pressure.',
          'Underdog clubs bring fewer trophies and a strong shared identity.',
          'A club with a distinct style gives you something to watch in a bad season.'
        ]
      },
      {
        heading: 'Take your time',
        body:
          'You can follow the league for a season before choosing a club. Use the club pages and a few matches to decide. The best club for you is one you want to keep following.',
        bullets: [
          'Use the club finder for a starting shortlist.',
          'Read the club pages and watch a match or two.',
          'Give it time. Supporting a club is a long-term interest.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Derby', definition: 'A match between two clubs with a local or historical rivalry.' },
      { term: 'Supporters’ trust', definition: 'A democratic organisation owned and run by a club’s fans.' },
      { term: 'Matchgoing', definition: 'Attending matches in person rather than watching on television.' }
    ]
  },
  {
    id: 'guide-derbies',
    slug: 'derbies-and-rivalries',
    title: 'Rivalries and derbies',
    category: 'Culture',
    summary:
      'What derbies are, notable English rivalries and what to expect from a derby match.',
    readTime: 4,
    difficulty: 'Getting there',
    emoji: '🔥',
    sortOrder: 10,
    featured: false,
    sections: [
      {
        heading: 'What makes a derby',
        body:
          'A derby is a match between clubs with a local or historical rivalry. Some are based on geography — two clubs from the same city. Others are built on class, religion, industry or a specific moment in history.',
        bullets: [
          'Local derbies reduce travel and increase local attention.',
          'Rivalries can continue through long periods without trophies.',
          'Derby results matter to supporters beyond the league position.'
        ]
      },
      {
        heading: 'English rivalries',
        body:
          'Every club has a rival, and some rivalries are known around the world. The north London derby between Arsenal and Tottenham is one of the longest-running. The Manchester derby is a local rivalry between United and City. Liverpool against Manchester United is a clash of two of England’s most successful clubs.',
        bullets: [
          'Arsenal vs Tottenham: north London derby.',
          'Manchester United vs Manchester City: Manchester derby.',
          'Liverpool vs Everton: Merseyside derby.',
          'Newcastle vs Sunderland: Tyne–Wear derby.'
        ]
      },
      {
        heading: 'Watching a derby',
        body:
          'Expect intensity, tackles and a loud crowd. Form can matter less than usual. Watch how the players react to the crowd and how the managers set up — derbies are often more cautious than they look because neither side wants to lose.',
        bullets: [
          'Rivalry games can be tight and tactical rather than open.',
          'Cards and flashpoints are more common.',
          'The crowd is usually louder than at a regular league match.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Derby', definition: 'A match between local or historical rivals.' },
      { term: 'Bragging rights', definition: 'The social reward that comes with beating a rival.' },
      { term: 'Tyne–Wear derby', definition: 'The rivalry between Newcastle United and Sunderland.' }
    ]
  },
  {
    id: 'guide-glossary',
    slug: 'football-glossary',
    title: 'Football glossary',
    category: 'Culture',
    summary:
      'Common terms used in Premier League commentary, statistics and transfer news.',
    readTime: 4,
    difficulty: 'Starter',
    emoji: '💬',
    sortOrder: 11,
    featured: false,
    sections: [
      {
        heading: 'Match basics',
        body: 'Common terms used in match commentary.',
        bullets: [
          'Clean sheet — conceding no goals in a match.',
          'Hat-trick — three goals by the same player.',
          'Brace — two goals by the same player.',
          'Stoppage time — time added at the end of a half.',
          'Own goal — a goal credited to the other team after a defensive error.',
          'Wonder goal — an especially spectacular goal.'
        ]
      },
      {
        heading: 'Tactics and stats',
        body: 'Common terms used in tactical analysis and statistics.',
        bullets: [
          'xG (expected goals) — a statistical estimate of how good a chance was.',
          'Pressing — closing down opponents quickly to win the ball back.',
          'Low block — defending deep and compact near your own goal.',
          'Counter-attack — a fast attack launched immediately after winning the ball.',
          'Possession — the share of time a team has the ball.',
          'Set piece — a planned move from a free kick, corner or throw-in.'
        ]
      },
      {
        heading: 'League and transfer talk',
        body: 'Terms used in news stories and table discussions.',
        bullets: [
          'Matchday — a round of fixtures.',
          'Goal difference — goals scored minus goals conceded.',
          'Relegation — dropping to the division below.',
          'Transfer window — a period when clubs can register new players.',
          'Loan — a temporary move to another club.',
          'Free agent — a player without a club.'
        ]
      }
    ],
    keyTerms: [
      { term: 'xG', definition: 'Expected goals — a model that estimates the likelihood a shot becomes a goal.' },
      { term: 'Low block', definition: 'A defensive approach where the team sits deep and compact.' },
      { term: 'Set piece', definition: 'A dead-ball situation such as a corner, free kick or throw-in.' }
    ]
  },
  {
    id: 'guide-players',
    slug: 'players-to-know',
    title: 'Players to know',
    category: 'The basics',
    summary:
      'Meet six players who show how modern Premier League teams are built, from finishers to deep midfielders.',
    readTime: 5,
    difficulty: 'Starter',
    emoji: '⭐',
    sortOrder: 12,
    featured: false,
    sections: [
      {
        heading: 'Why learn the players?',
        body:
          'You do not need to memorise every squad, but knowing a handful of players gives each match a story. You can follow a striker’s run, a midfielder’s passing or a defender’s positioning. Start with a few names and let the rest follow.',
        bullets: [
          'Players are often described by role: goalkeeper, defender, midfielder or forward.',
          'Commentators use names and nicknames; matching them to a shirt number helps.',
          'Form and injuries change the picture, so treat any list as a starting point.'
        ]
      },
      {
        heading: 'Forwards and creators',
        body:
          'The players most likely to decide a match are usually the forwards and attacking midfielders. They take shots, make the final pass and carry the pressure of scoring. Watch how they find space between defenders.',
        bullets: [
          'Mohamed Salah: a forward known for scoring and assisting from the right.',
          'Erling Haaland: a centre-forward whose movement in the box creates chances.',
          'Bukayo Saka: a wide attacker who dribbles, crosses and cuts inside.',
          'Cole Palmer: a creative attacker who can play as a number 10 or wide.'
        ]
      },
      {
        heading: 'Midfield control',
        body:
          'Midfielders link defence and attack. A deep midfielder can set the tempo, break up play and decide which side the team attacks. You will often see them receive the ball from the goalkeeper and start the move.',
        bullets: [
          'Rodri: a deep midfielder who controls possession and protects the back line.',
          'Declan Rice: a midfielder who covers ground and wins the ball back.',
          'A midfield pair often splits into one player holding and one player advancing.'
        ]
      },
      {
        heading: 'Defenders and goalkeepers',
        body:
          'Defenders and goalkeepers rarely get the headlines, but they decide whether a team can attack with confidence. Watch a centre-back’s positioning, a full-back’s runs and a goalkeeper’s distribution.',
        bullets: [
          'Virgil van Dijk: a centre-back known for reading the game and organising the defence.',
          'Goalkeepers are the only players who can use their hands inside the penalty area.',
          'Modern goalkeepers are expected to pass as well as save.'
        ]
      },
      {
        heading: 'How to follow players',
        body:
          'Pick one or two players to watch in a match. Notice where they start, how often they receive the ball and what they do when they lose it. That is a quicker way to learn than trying to memorise all 20 squads.',
        bullets: [
          'Use the club pages to see each club’s stadium and history.',
          'Watch a full match rather than only highlights.',
          'Give yourself time: the names become familiar after a few weeks.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Number 10', definition: 'An attacking midfielder who plays between the opposition’s midfield and defence.' },
      { term: 'False nine', definition: 'A forward who drops into midfield to create space for others.' },
      { term: 'Pressing forward', definition: 'A forward who closes down defenders to win the ball high up the pitch.' }
    ]
  }
];
