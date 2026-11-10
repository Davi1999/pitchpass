export const guides = [
  {
    id: 'guide-league',
    slug: 'premier-league-explained',
    title: 'The Premier League, explained',
    category: 'The basics',
    summary:
      'Twenty clubs, thirty-eight matchdays and one very simple points system. Here is the whole league in one guide.',
    readTime: 6,
    difficulty: 'Starter',
    emoji: '🏟️',
    sortOrder: 1,
    featured: true,
    sections: [
      {
        heading: 'One league, twenty clubs',
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
        heading: 'The table tells the story',
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
          'Unlike some leagues, the Premier League does not finish with a play-off. The table after 38 matches is final. The three lowest clubs are relegated and replaced by three clubs promoted from the Championship, which is the division below.',
        bullets: [
          'The Championship promotes two clubs automatically and one via play-offs.',
          'Relegated clubs lose their Premier League broadcast income — which is why survival matters so much.',
          'Promoted clubs often spend heavily to try to stay up.'
        ]
      },
      {
        heading: 'The cups are separate competitions',
        body:
          'The Premier League is only one of the competitions a club plays in. The FA Cup and EFL Cup are knockout tournaments, and the best clubs also play in European competitions. Winning a cup does not change your league position — it is a separate trophy.',
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
      { term: 'Champions League', definition: 'Europe’s elite club competition, usually offering places to the top four.' }
    ]
  },
  {
    id: 'guide-offside',
    slug: 'offside-explained',
    title: 'Offside, without the headache',
    category: 'Rules',
    summary:
      'The most misunderstood rule in football, broken into three simple questions.',
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
          'Think of offside as a sequence. First: was the player ahead of the second-last opponent when the ball was played? Second: was the player in the opposition half? Third: did they get involved — by playing the ball, interfering with an opponent, or gaining an advantage?',
        bullets: [
          'If the answer to any question is no, there is no offside.',
          'If the player is level with the second-last opponent, they are onside.',
          'The moment that matters is when the ball is passed — not when it is received.'
        ]
      },
      {
        heading: 'Level is onside',
        body:
          'This is the rule that trips people up most often. If any part of the attacker that can legally score is level with the defender, the attacker is onside. Officials and technology use very fine margins, which is why offside calls can look incredibly close on replay.',
        bullets: [
          '“Level” means level — not “a little bit behind”.',
          'Hands and arms are generally not considered for offside position.',
          'Semi-automated offside technology is gradually being introduced to speed up decisions.'
        ]
      },
      {
        heading: 'Why the rule exists',
        body:
          'Without offside, attackers could simply stand next to the goalkeeper and wait for long passes. The rule keeps the game stretched, rewards timing and movement, and gives defenders a reason to hold a line. It is imperfect, but it is fundamental.',
        bullets: [
          'Strikers practise timing runs to stay onside.',
          'Defenders practise stepping up together to catch attackers offside.',
          'A well-timed run in behind is one of the most exciting things in the sport.'
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
    title: 'VAR: what it can and cannot do',
    category: 'Rules',
    summary:
      'Video review was meant to remove obvious mistakes. Here is how it actually works — and why it still causes arguments.',
    readTime: 5,
    difficulty: 'Getting there',
    emoji: '📺',
    sortOrder: 3,
    featured: false,
    sections: [
      {
        heading: 'What VAR is',
        body:
          'VAR stands for Video Assistant Referee. A team of officials watches the match from a video room and can advise the on-field referee when there has been a clear error or a missed serious incident. The on-field referee still makes the final decision.',
        bullets: [
          'VAR does not review every decision.',
          'It only intervenes for specific, game-changing situations.',
          'The threshold is high: “clear and obvious error” or “serious missed incident”.'
        ]
      },
      {
        heading: 'The four reviewable categories',
        body:
          'VAR can only get involved in four areas. If an incident does not fit one of these categories, VAR cannot step in — even if the decision looks wrong.',
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
          'The final call always belongs to the referee.'
        ]
      },
      {
        heading: 'Why decisions still feel slow',
        body:
          'Checking multiple camera angles, identifying the exact moment of contact and applying the offside law can take time. Broadcasters often show replays before the officials have finished. The result is a strange experience: everyone in the stadium waits while a decision is made somewhere else.',
        bullets: [
          'Semi-automated offside uses tracking technology to speed up line-drawing.',
          'Supporters often criticise the lack of in-stadium communication.',
          'The rules are reviewed regularly, but the “clear and obvious” bar remains controversial.'
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
      'What the referee is actually doing when the whistle goes — and what yellow and red cards mean.',
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
          'A yellow card is a formal warning. It is shown for things like a reckless foul, delaying the restart, dissent or a deliberate tactical foul. Two yellow cards in the same match mean a red card and the player leaves the pitch.',
        bullets: [
          'Yellow cards accumulate across matches and can lead to suspension.',
          'A second yellow is shown as a red card — the player is off.',
          'The referee must still manage the game; not every foul is a yellow.'
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
          'Penalties are a huge momentum swing — and a very specific kind of pressure.'
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
    title: 'Your first matchday, decoded',
    category: 'Matchday',
    summary:
      'Ninety minutes, stoppage time, substitutions and the scoreboard — everything you need to follow a game.',
    readTime: 4,
    difficulty: 'Starter',
    emoji: '⏱️',
    sortOrder: 5,
    featured: true,
    sections: [
      {
        heading: 'The clock is not the whole story',
        body:
          'A match is two 45-minute halves. The clock keeps running when the ball goes out of play, and the referee adds stoppage time at the end of each half to account for injuries, substitutions and delays. So “90 minutes” usually means 94 or 95 minutes of real time.',
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
          'A red card reduces the team to ten players — substitutions do not replace them.'
        ]
      },
      {
        heading: 'Home and away',
        body:
          'The home team plays at their own stadium. The away team travels. Home advantage is real: familiar surroundings, a supportive crowd and no travel usually add up to a small but meaningful edge over a season.',
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
      'Why players can move in January but not March, what a loan actually is, and why “here we go” trends.',
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
          'Deadline day is the final day of a window — and a television event in its own right.'
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
        heading: 'Why money is complicated',
        body:
          'Big fees are often paid in instalments, and accounting rules spread the cost across the contract. That is why a £80m signing does not necessarily appear as an £80m hit in one year. Financial rules also limit how much clubs can spend relative to their revenue.',
        bullets: [
          'Profit and Sustainability Rules (PSR) limit allowable losses.',
          'Squad cost rules cap spending on wages, fees and agents relative to revenue.',
          'Clubs can be sanctioned for breaching financial rules.'
        ]
      },
      {
        heading: 'How to follow it without losing your mind',
        body:
          'Transfer news is a mix of genuine reporting, negotiation leaks and outright invention. Treat social media posts as leads, not facts. A transfer is official when the clubs announce it — not when an account with a blue tick says “here we go”.',
        bullets: [
          'Look for club statements and league registration.',
          'Medical tests and work permits can delay announcements.',
          'Deadline day produces plenty of noise and very few certainties.'
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
    title: 'Every position, simply explained',
    category: 'The basics',
    summary:
      'From goalkeeper to false nine — a beginner-friendly map of who does what on a football pitch.',
    readTime: 6,
    difficulty: 'Starter',
    emoji: '🧭',
    sortOrder: 6,
    featured: false,
    sections: [
      {
        heading: 'Goalkeeper (GK)',
        body:
          'The goalkeeper is the only player allowed to handle the ball inside their own penalty area. Their job is to stop shots, claim crosses and start attacks. Modern goalkeepers are expected to be comfortable with the ball at their feet.',
        bullets: [
          'Must wear a different colour from outfield players.',
          'Can only handle the ball inside their own penalty area.',
          'Often acts as an extra passer when the team builds from the back.'
        ]
      },
      {
        heading: 'Defenders',
        body:
          'Defenders protect the goal and try to stop attacks. Centre-backs usually mark strikers and defend crosses; full-backs play on the left or right and often push forward to support attacks. Some teams use wing-backs, who are expected to cover the whole flank.',
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
          'Central midfielder (CM): the engine room — passing, pressing and running.',
          'Attacking midfielder (AM): operates between the lines and creates.'
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
        heading: 'Formations are starting shapes',
        body:
          'A formation like 4-3-3 describes how players line up at kick-off: four defenders, three midfielders and three forwards. In reality, teams shift constantly — defenders overlap, midfielders rotate and forwards press. The formation is a starting point, not a cage.',
        bullets: [
          '4-3-3: balanced, wide and popular for pressing teams.',
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
    title: 'Cups, Europe and the rest of the season',
    category: 'Beyond the league',
    summary:
      'The FA Cup, the EFL Cup and European nights — how the other competitions fit together.',
    readTime: 6,
    difficulty: 'Getting there',
    emoji: '🏆',
    sortOrder: 8,
    featured: false,
    sections: [
      {
        heading: 'One season, several competitions',
        body:
          'A Premier League club can play in the league, two domestic cups and up to three European competitions. That means a busy calendar, squad rotation and a lot of travel. Winning any trophy is an achievement, but the league is the measure of consistency.',
        bullets: [
          'Premier League: 38 matches, decided by the table.',
          'FA Cup: knockout competition open to clubs across the football pyramid.',
          'EFL Cup: knockout competition for the top four divisions.'
        ]
      },
      {
        heading: 'The FA Cup',
        body:
          'The FA Cup is the oldest national knockout competition in world football. It is a single-elimination tournament: lose and you are out. Lower-division clubs host bigger teams in early rounds, which is where the famous “giant-killing” upsets happen.',
        bullets: [
          'Draws are settled by a replay in some rounds, or extra time and penalties.',
          'The final is played at Wembley Stadium.',
          'Winning the FA Cup brings a place in the Europa League.'
        ]
      },
      {
        heading: 'The EFL Cup',
        body:
          'The EFL Cup, currently branded the Carabao Cup, is the other major domestic knockout trophy. It is often used by big clubs to give younger players and squad players minutes, especially in the early rounds. The final is also at Wembley.',
        bullets: [
          'Two-legged semi-finals are used in some seasons.',
          'The winner qualifies for the Europa Conference League play-off round.',
          'It is a realistic trophy target for clubs outside the title race.'
        ]
      },
      {
        heading: 'European qualification',
        body:
          'The top clubs qualify for UEFA competitions based on league position and cup results. The Champions League is the biggest prize; the Europa League and Conference League are the other two tiers. The exact number of places can change based on English clubs’ performance in Europe.',
        bullets: [
          'Champions League: the elite competition, recently expanded to a larger league phase.',
          'Europa League: a major European trophy with a long history.',
          'Conference League: a newer competition for clubs from across Europe.'
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
    title: 'How to pick a club (without overthinking it)',
    category: 'Culture',
    summary:
      'Your club does not have to be your local one, the biggest one or the one your friend supports. Here is how to choose.',
    readTime: 5,
    difficulty: 'Starter',
    emoji: '💚',
    sortOrder: 9,
    featured: true,
    sections: [
      {
        heading: 'You do not need a perfect reason',
        body:
          'People choose clubs for all sorts of reasons: geography, family, a player they liked, a shirt, a stadium, a single memorable match. There is no entrance exam. The only real test is whether you enjoy following them.',
        bullets: [
          'Local clubs offer the easiest connection and the best chance to attend games.',
          'Family ties are powerful — supporting the same club as a parent is a classic route in.',
          'A player, a style of play or even a colour can be a perfectly good starting point.'
        ]
      },
      {
        heading: 'Start with the matchday experience',
        body:
          'Watch a few full matches before committing. Notice what you enjoy: a loud crowd, a clever passing team, a scrappy underdog, a big occasion? Your answer will point you toward certain clubs. Highlights are fun, but full matches show you the real rhythm of a team.',
        bullets: [
          'Watch a game with the sound on to feel the atmosphere.',
          'Try a neutral match and see which team you naturally root for.',
          'Read about a club’s history and supporters before deciding.'
        ]
      },
      {
        heading: 'Think about what you want from following',
        body:
          'Some people want trophies and big European nights. Others want a community club, a local ground or a team that develops young players. Neither is better. Being honest about what you enjoy will save you from picking a club that does not fit.',
        bullets: [
          'Trophy-hunting brings expectation and pressure.',
          'Underdog clubs bring scarcity of success but a strong sense of shared identity.',
          'A club with a distinct style gives you something to watch even in a bad season.'
        ]
      },
      {
        heading: 'Do not rush it',
        body:
          'You can follow the league for a season before choosing. Nobody is keeping score. The best club for you is the one you keep thinking about after the final whistle — not the one with the biggest social media following.',
        bullets: [
          'Take the PitchPass club finder for a starting shortlist.',
          'Read the club pages and watch a match or two.',
          'Give it time. Supporting a club is a long relationship.'
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
    title: 'Why football rivalries matter',
    category: 'Culture',
    summary:
      'Derbies are about more than three points. Here is what makes them so intense — and how to enjoy one.',
    readTime: 4,
    difficulty: 'Getting there',
    emoji: '🔥',
    sortOrder: 10,
    featured: false,
    sections: [
      {
        heading: 'What makes a derby',
        body:
          'A derby is a match between clubs with a local or historical rivalry. Some are based on geography — two clubs from the same city. Others are built on class, religion, industry or a specific moment in history. The shared ingredient is that losing hurts more than usual.',
        bullets: [
          'Local derbies reduce travel and intensify bragging rights.',
          'Rivalries can be one-sided in trophies but never in feeling.',
          'Derby results can define a season even if the table says otherwise.'
        ]
      },
      {
        heading: 'Famous English rivalries',
        body:
          'Every club has a rival, and some rivalries are known around the world. The north London derby between Arsenal and Tottenham is one of the fiercest. The Manchester derby has become a title-race fixture. Liverpool against Manchester United is a clash of two of England’s most successful clubs.',
        bullets: [
          'Arsenal vs Tottenham: north London derby.',
          'Manchester United vs Manchester City: Manchester derby.',
          'Liverpool vs Everton: Merseyside derby.',
          'Newcastle vs Sunderland: Tyne–Wear derby.'
        ]
      },
      {
        heading: 'How to watch a derby',
        body:
          'Expect intensity, tackles and a loud crowd. Form often goes out of the window. Watch how the players react to the crowd and how the managers set up — derbies are often more cautious than they look, precisely because nobody wants to lose.',
        bullets: [
          'Rivalry games can be tight and tactical rather than open.',
          'Emotions run high; cards and flashpoints are common.',
          'The atmosphere is usually the best part. Watch the crowd during the warm-up.'
        ]
      }
    ],
    keyTerms: [
      { term: 'Derby', definition: 'A match between local or historical rivals.' },
      { term: 'Bragging rights', definition: 'The social prize that comes with beating a rival.' },
      { term: 'Tyne–Wear derby', definition: 'The rivalry between Newcastle United and Sunderland.' }
    ]
  },
  {
    id: 'guide-glossary',
    slug: 'football-glossary',
    title: 'The football words everyone uses',
    category: 'Culture',
    summary:
      'A plain-English glossary of the terms you will hear on commentary, in group chats and on the terraces.',
    readTime: 4,
    difficulty: 'Starter',
    emoji: '💬',
    sortOrder: 11,
    featured: false,
    sections: [
      {
        heading: 'Match basics',
        body:
          'These are the words you will hear in almost every broadcast. Learn them and the commentary suddenly makes sense.',
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
        body:
          'Modern coverage is full of numbers. You do not need all of them, but these are the ones worth knowing.',
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
        body:
          'These terms appear in news stories and table discussions. They are useful for following the season beyond a single match.',
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
  }
];
