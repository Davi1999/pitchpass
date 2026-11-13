/**
 * The modern era: profiles, stories and season recaps for the 2022/23 – 2025/26
 * span used by the PitchPass demo. The 2025/26 season is a seeded demo season,
 * so its table, form and matchday details are not live data.
 */

const now = new Date();

function daysAgo(days) {
  const date = new Date(now);
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

export const eraMeta = {
  label: 'The modern era',
  title: 'The Premier League since 2022',
  seasons: '2022/23 – 2025/26',
  updated: 'Demo season 2025/26 · matchday 13',
  description:
    'The players, managers and stories that define the league you are watching now — plus the context that makes the last few seasons make sense.',
  introduction:
    'A lot has changed since 2022. Manchester City turned dominance into a treble, Arsenal became a genuine title challenger, Liverpool changed manager and won the league again, and the rest of the division got faster, deeper and more data-driven. This section is a newcomer’s guide to that era: who the key people are, what the big stories mean and how the modern season actually works.',
  disclaimer:
    'The 2025/26 table, form and fixtures on PitchPass are seeded demo data. Player and manager profiles are written as an educational snapshot of the era, not a live database. Check official club and Premier League sources for current information.',
  stats: [
    { label: 'Seasons covered', value: '4' },
    { label: 'Title winners', value: '2' },
    { label: 'Clubs in the league', value: '20' },
    { label: 'Matchdays per season', value: '38' }
  ],
  timeline: [
    {
      year: '2022/23',
      title: 'City’s treble and Haaland’s first season',
      body:
        'Erling Haaland scored 36 league goals in his first Premier League season as Manchester City won the title, the FA Cup and the Champions League.'
    },
    {
      year: '2023/24',
      title: 'Four in a row',
      body:
        'City held off Arsenal and Liverpool in a three-way race to become the first club to win four consecutive Premier League titles.'
    },
    {
      year: '2024/25',
      title: 'Liverpool’s new era',
      body:
        'Arne Slot replaced Jürgen Klopp and won the title in his first season, while the cup competitions produced a spread of different winners.'
    },
    {
      year: '2025/26',
      title: 'The current demo season',
      body:
        'Arsenal lead the seeded demo table after 12 matchdays, with Liverpool and Manchester City close behind. This part of the site is demo data.'
    }
  ],
  guideSlugs: ['modern-era-primer', 'last-three-seasons', 'reading-a-season']
};

export const eraProfiles = [
  {
    id: 'era-erling-haaland',
    slug: 'erling-haaland',
    kind: 'player',
    name: 'Erling Haaland',
    role: 'Striker',
    clubId: 'man-city',
    nationality: 'Norway',
    born: '2000',
    summary:
      'A centre-forward whose movement, power and finishing turned Manchester City’s attack into a record-breaking machine.',
    introduction:
      'Haaland is the simplest kind of superstar to explain: he scores an extraordinary number of goals. The interesting part is how he does it. He is not a midfielder who drops deep or a winger who beats three players. He is a runner, a finisher and a penalty-box problem that defenders have to solve for 90 minutes.',
    sections: [
      {
        heading: 'The movement comes first',
        body:
          'Haaland’s best work often happens before the ball arrives. He checks away from a defender, then accelerates into the space behind. He attacks the near post, the back post and the space between centre-back and full-back. City’s midfielders know exactly when to play the pass.',
        bullets: [
          'Watch his first two steps when a cross is about to be delivered.',
          'He often starts behind a defender, then moves in front of them at the last moment.',
          'His runs are designed to give the passer a clear target, not just to find space.'
        ]
      },
      {
        heading: 'A finisher with very few wasted touches',
        body:
          'Haaland does not need many touches to change a match. A first-time finish, a header from six yards or a penalty is often enough. That efficiency is why his goal totals look almost unreasonable: City create a lot of chances, and he converts a high share of the good ones.',
        bullets: [
          'He is strong enough to hold off a defender and finish with either foot.',
          'His size makes him a target for crosses, but he is also quick across the ground.',
          'Penalties are part of the package — a reliable source of goals in tight games.'
        ]
      },
      {
        heading: 'Why the 2022/23 season mattered',
        body:
          'Haaland scored 36 league goals in 2022/23, a record for a 38-match Premier League season. City won the league, the FA Cup and the Champions League. It was the clearest example yet of how a single specialist can sharpen an already excellent team.',
        bullets: [
          'The goals came inside a system built to create high-quality chances.',
          'City could play direct when teams pressed them and patient when teams sat deep.',
          'The treble turned a great side into a historic one.'
        ]
      },
      {
        heading: 'What to watch as a new fan',
        body:
          'Do not only watch the shot. Watch the five seconds before it. Is he pointing where he wants the pass? Is he dragging a defender away from a team-mate? Is he waiting at the back post? That is where the goals come from.',
        bullets: [
          'A striker’s best skill is often repetition: making the same run until the pass arrives.',
          'If City are struggling, look at whether Haaland is being isolated from the midfield.',
          'Goals change games, but his movement changes how the whole defence behaves.'
        ]
      }
    ],
    strengths: ['Movement in the box', 'Finishing', 'Aerial threat', 'Penalties'],
    stats: [
      { label: 'League goals in 2022/23', value: '36' },
      { label: 'Premier League titles', value: '2' },
      { label: 'Champions League', value: '1' },
      { label: 'Golden Boots', value: '2' }
    ],
    milestone: [
      { year: '2022', event: 'Joins Manchester City from Borussia Dortmund.' },
      { year: '2023', event: 'Scores 36 league goals and wins the treble.' },
      { year: '2024', event: 'Wins a second consecutive Premier League title.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A striker is not judged only on goals. Watch how much space he creates for the players around him — and how often defenders have to follow him.'
    },
    relatedSlugs: ['kevin-de-bruyne', 'mohamed-salah', 'pep-guardiola'],
    relatedGuideSlug: 'positions-explained',
    honours: ['Premier League: 2022/23, 2023/24', 'Champions League: 2022/23', 'FA Cup: 2022/23'],
    sortOrder: 1,
    featured: true
  },
  {
    id: 'era-mohamed-salah',
    slug: 'mohamed-salah',
    kind: 'player',
    name: 'Mohamed Salah',
    role: 'Forward',
    clubId: 'liverpool',
    nationality: 'Egypt',
    born: '1992',
    summary:
      'Liverpool’s right-sided forward and one of the most consistent goalscorers in Premier League history.',
    introduction:
      'Salah has been central to Liverpool’s story for almost a decade. He starts on the right, but he is not a traditional winger. He scores, assists, presses and drifts inside to become a second striker. When people talk about the modern wide forward, Salah is the template.',
    sections: [
      {
        heading: 'The inside-forward role',
        body:
          'Salah begins on the right touchline and moves into the penalty area as the attack develops. The full-back overlaps outside him, the midfielder covers behind and the centre-forward occupies the middle. That structure gives Salah a one-on-one against the left-back or a run into the space between defender and goalkeeper.',
        bullets: [
          'He likes to receive the ball on his left foot and curl it towards the far corner.',
          'His runs in behind are timed to beat the defensive line, not just to get closer to goal.',
          'He is a reliable penalty taker and a regular source of assists.'
        ]
      },
      {
        heading: 'Longevity is the superpower',
        body:
          'Many forwards have one brilliant season. Salah has kept producing across different managers, team-mates and tactical systems. That consistency comes from professionalism, availability and an ability to adapt his game as his body and the team around him change.',
        bullets: [
          'He has won multiple Golden Boots and reached double figures for assists in several seasons.',
          'His pressing work from the front helps Liverpool win the ball in dangerous areas.',
          'He remains a leader for a squad that has gone through a rebuild.'
        ]
      },
      {
        heading: 'The 2024/25 title season',
        body:
          'Under Arne Slot, Liverpool won the league again in 2024/25. Salah was central to it, scoring 29 league goals and carrying the attack through the run-in. It was a different kind of title from the heavy-metal football of the late 2010s: more control, fewer transitions, but the same decisive output from the right wing.',
        bullets: [
          'The team attacked with more patience and used Salah as the main finishing threat.',
          'His movement became even more selective: fewer wasted sprints, more dangerous arrivals.',
          'The title win underlined how valuable a reliable goalscorer is in a long season.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Follow Salah when Liverpool win the ball. His first thought is usually to run at the defender. If the team is building slowly, watch him drift infield to create a passing angle. The best wide forwards alternate between hugging the touchline and appearing in the box.',
        bullets: [
          'Look for the overlap that creates space for him to cut inside.',
          'Notice how often he is already moving when the pass is played.',
          'His body shape when receiving the ball tells you whether he will shoot or cross.'
        ]
      }
    ],
    strengths: ['Goalscoring', 'Movement off the right', 'Pressing', 'Penalties'],
    stats: [
      { label: 'League goals in 2024/25', value: '29' },
      { label: 'Premier League titles', value: '2' },
      { label: 'Champions League', value: '1' },
      { label: 'Golden Boots', value: '4' }
    ],
    milestone: [
      { year: '2017', event: 'Joins Liverpool and immediately becomes a title-level scorer.' },
      { year: '2019', event: 'Wins the Champions League with Liverpool.' },
      { year: '2025', event: 'Helps Liverpool win the 2024/25 Premier League title.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A “winger” in modern football is often a forward. Salah’s starting position is wide, but his job is to score. Do not be surprised to see him in the box when a cross comes in.'
    },
    relatedSlugs: ['erling-haaland', 'virgil-van-dijk', 'arne-slot'],
    relatedGuideSlug: 'positions-explained',
    honours: ['Premier League: 2019/20, 2024/25', 'Champions League: 2018/19', 'Club World Cup: 2019'],
    sortOrder: 2,
    featured: true
  },
  {
    id: 'era-bukayo-saka',
    slug: 'bukayo-saka',
    kind: 'player',
    name: 'Bukayo Saka',
    role: 'Winger',
    clubId: 'arsenal',
    nationality: 'England',
    born: '2001',
    summary:
      'Arsenal’s homegrown right winger, a creative outlet and a symbol of the club’s rebuild under Mikel Arteta.',
    introduction:
      'Saka came through Arsenal’s academy and became one of the first names on the team sheet. He is a winger who can beat a defender, cross, shoot and take set pieces. He also represents something bigger: the academy pathway that Arsenal have leaned on while rebuilding the squad.',
    sections: [
      {
        heading: 'The right-side combination',
        body:
          'Arsenal’s right side is a well-drilled partnership. Saka holds the width, the right-back overlaps or underlaps, and the central midfielders rotate to create passing lanes. When it works, Saka receives the ball facing goal with space to attack.',
        bullets: [
          'He is comfortable going outside for a cross or cutting inside for a shot.',
          'His link-up with the right-back is one of Arsenal’s most reliable attacking patterns.',
          'He draws fouls in dangerous areas, which turns into set-piece chances.'
        ]
      },
      {
        heading: 'More than a dribbler',
        body:
          'Saka’s value is not just in beating players one-on-one. He makes good decisions in the final third, tracks back, and takes responsibility for set pieces. That all-round contribution is why managers trust him in big matches even when his form dips.',
        bullets: [
          'He can play as a wide midfielder or a forward depending on the game plan.',
          'His delivery from corners and wide free kicks is a genuine weapon.',
          'He has become a leader in a young squad despite his age.'
        ]
      },
      {
        heading: 'The Arteta era',
        body:
          'Saka’s rise has run alongside Mikel Arteta’s rebuild. Arsenal went from a team fighting for the top four to a title challenger. Saka’s development, along with the signings around him, turned the right wing into a consistent source of chances.',
        bullets: [
          'Arsenal finished second in 2022/23 and 2023/24 as City’s closest challenger.',
          'The team’s control of games improved as the squad matured.',
          'Saka’s durability became a talking point: Arsenal are a different team without him.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch the first touch. If Saka receives the ball with space in front of him, he will attack the defender. If the defender shows him inside, he will look for the combination with the full-back. His decision-making in those first two seconds is the key to Arsenal’s attack.',
        bullets: [
          'Notice how often he starts wide and ends up in the penalty area.',
          'A quiet first half can still become a decisive second half if the game opens up.',
          'Set-piece deliveries are worth watching even when the ball is not in play.'
        ]
      }
    ],
    strengths: ['Dribbling', 'Final-third decisions', 'Set-piece delivery', 'Work rate'],
    stats: [
      { label: 'Academy', value: 'Arsenal' },
      { label: 'Premier League debut', value: '2018/19' },
      { label: 'FA Cup', value: '1' },
      { label: 'England caps', value: 'Regular' }
    ],
    milestone: [
      { year: '2018', event: 'Makes his senior Arsenal debut as a teenager.' },
      { year: '2020', event: 'Wins the FA Cup with Arsenal.' },
      { year: '2023', event: 'Becomes a central figure in Arsenal’s title challenge.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Academy players are not just cheap squad filler. Saka is proof that a homegrown player can become the creative centre of a title-chasing team.'
    },
    relatedSlugs: ['declan-rice', 'cole-palmer', 'mikel-arteta'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['FA Cup: 2019/20', 'Community Shield: 2020, 2023'],
    sortOrder: 3,
    featured: true
  },
  {
    id: 'era-cole-palmer',
    slug: 'cole-palmer',
    kind: 'player',
    name: 'Cole Palmer',
    role: 'Attacking midfielder',
    clubId: 'chelsea',
    nationality: 'England',
    born: '2002',
    summary:
      'A calm, creative attacker who turned a move from Manchester City into a starring role at Chelsea.',
    introduction:
      'Palmer is the kind of player who makes the game look slower than it is. He receives the ball in tight spaces, waits for the defender to commit, then finds the pass or shot that others miss. His move from Manchester City to Chelsea in 2023 gave him the regular minutes he needed to show it.',
    sections: [
      {
        heading: 'The left-footed playmaker',
        body:
          'Palmer likes to start on the right and drift inside onto his left foot. From there he can shoot, slide a pass through the defence or combine with the striker. Chelsea have built parts of their attack around giving him the ball in those areas.',
        bullets: [
          'His first touch is designed to create space for the next action.',
          'He is a reliable penalty taker, which adds a steady stream of goals.',
          'He can play centrally or wide, which makes him hard to mark.'
        ]
      },
      {
        heading: 'Composure is the standout skill',
        body:
          'Palmer rarely looks rushed. In the box, he waits for the goalkeeper to move before finishing. In midfield, he holds the ball until a team-mate becomes available. That patience is unusual in a young attacker and it is why coaches trust him in big moments.',
        bullets: [
          'He draws fouls because defenders have to dive in when he slows the play down.',
          'His shooting technique is clean, especially from the edge of the area.',
          'He is comfortable taking responsibility for set pieces and penalties.'
        ]
      },
      {
        heading: 'From squad player to main man',
        body:
          'At City, Palmer was part of a deep squad competing for every trophy. At Chelsea, he became a focal point. The move showed how important regular starts are for young players, and how quickly a good run can change a career.',
        bullets: [
          'His 2023/24 season established him as a Premier League-level creator.',
          'Chelsea’s squad became younger and more reliant on flexible attackers.',
          'His output made him one of the first names in the England conversation.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Palmer before he gets the ball. He checks his shoulder, finds the defender’s position and decides what he wants to do next. When the pass arrives, the plan is already in place. That is why he looks so composed.',
        bullets: [
          'Notice how often he receives the ball on the half-turn.',
          'His body shape invites the defender to commit, then he moves past them.',
          'He is a good example of why “attacking midfielder” is a broad label.'
        ]
      }
    ],
    strengths: ['Composure', 'Final pass', 'Penalties', 'Shooting'],
    stats: [
      { label: 'League goals in 2023/24', value: '22' },
      { label: 'Chelsea move', value: '2023' },
      { label: 'Conference League', value: '1' },
      { label: 'England', value: 'Regular' }
    ],
    milestone: [
      { year: '2023', event: 'Joins Chelsea from Manchester City.' },
      { year: '2024', event: 'Becomes one of Chelsea’s key attackers.' },
      { year: '2025', event: 'Wins the Conference League with Chelsea.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Do not confuse “attacking midfielder” with “centre midfielder”. Palmer’s job is to create and score, not to sit in front of the defence.'
    },
    relatedSlugs: ['bukayo-saka', 'bruno-fernandes', 'enzo-maresca'],
    relatedGuideSlug: 'positions-explained',
    honours: ['Conference League: 2024/25', 'Club World Cup: 2025'],
    sortOrder: 4,
    featured: true
  },
  {
    id: 'era-rodri',
    slug: 'rodri',
    kind: 'player',
    name: 'Rodri',
    role: 'Midfielder',
    clubId: 'man-city',
    nationality: 'Spain',
    born: '1996',
    summary:
      'The deep midfielder who controls Manchester City’s tempo and protects the space in front of the defence.',
    introduction:
      'Rodri is the player who makes City’s star attackers possible. He sits in front of the defence, receives the ball under pressure and decides whether the team should speed up or slow down. He is also a physical presence who wins second balls and covers counter-attacks.',
    sections: [
      {
        heading: 'The controller',
        body:
          'A deep midfielder’s job is to connect the defence to the attack. Rodri does that by finding space behind the opposition’s first line of pressure. Once he receives the ball, he can turn and play forward, or recycle possession to a free team-mate.',
        bullets: [
          'He rarely gives the ball away in dangerous areas.',
          'He positions himself to offer a passing option when the centre-backs have the ball.',
          'His tempo control helps City keep games under control.'
        ]
      },
      {
        heading: 'Defensive positioning',
        body:
          'Rodri is not a flashy tackler. His strength is anticipation. He reads where the counter-attack is going and arrives there first. That allows City’s full-backs and midfielders to push forward with less risk.',
        bullets: [
          'He covers the space behind the attacking full-backs.',
          'He wins headers in midfield and defends set pieces.',
          'His discipline keeps the team’s shape when possession is lost.'
        ]
      },
      {
        heading: 'The big-moment goals',
        body:
          'Rodri has a habit of scoring important goals despite playing deep. His late equaliser in the 2023 Champions League final is the most famous example. It underlined how a defensive midfielder can decide a trophy without being the main attacking threat.',
        bullets: [
          'He arrives late in the box when the defence is focused on the forwards.',
          'His shooting from distance is a useful Plan B against a low block.',
          'Big goals from deep midfielders often come from set pieces or second balls.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'The ball is not always with Rodri, but he is always close to it. Watch how he scans before receiving, how he opens his body and how quickly he switches the play. Those small details are why he is so hard to press.',
        bullets: [
          'Count how many times he checks over his shoulder before a pass.',
          'Notice when he drops between the centre-backs to start the attack.',
          'When City lose the ball, look for Rodri first — he is usually the insurance.'
        ]
      }
    ],
    strengths: ['Positioning', 'Passing range', 'Tempo control', 'Defensive cover'],
    stats: [
      { label: 'Ballon d’Or', value: '2024' },
      { label: 'Premier League titles', value: '4' },
      { label: 'Champions League', value: '1' },
      { label: 'Position', value: 'Deep midfielder' }
    ],
    milestone: [
      { year: '2019', event: 'Joins Manchester City from Atlético Madrid.' },
      { year: '2023', event: 'Scores the Champions League final equaliser.' },
      { year: '2024', event: 'Wins the Ballon d’Or.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'The “number 6” is the player in front of the defence. If you want to understand why a team controls a game, watch the number 6, not just the striker.'
    },
    relatedSlugs: ['declan-rice', 'erling-haaland', 'pep-guardiola'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['Premier League: 2020/21, 2021/22, 2022/23, 2023/24', 'Champions League: 2022/23', 'Ballon d’Or: 2024'],
    sortOrder: 5,
    featured: true
  },
  {
    id: 'era-virgil-van-dijk',
    slug: 'virgil-van-dijk',
    kind: 'player',
    name: 'Virgil van Dijk',
    role: 'Centre-back',
    clubId: 'liverpool',
    nationality: 'Netherlands',
    born: '1991',
    summary:
      'A commanding centre-back and captain who organises Liverpool’s defence and sets the tone for the team.',
    introduction:
      'Van Dijk is the defender who changed how people talk about defending in the Premier League. He is fast enough to defend big spaces, strong enough to win aerial duels and calm enough to start attacks from the back. He is also Liverpool’s captain and one of the loudest organisers on the pitch.',
    sections: [
      {
        heading: 'Defending the space, not just the player',
        body:
          'Van Dijk’s best quality is his positioning. He rarely has to make a desperate tackle because he is already in the right place. He reads the pass before it is played and steps across to intercept, or drops deeper to protect the space behind the defence.',
        bullets: [
          'His speed lets Liverpool defend with a high line.',
          'He is dominant in the air, especially from goal kicks and crosses.',
          'He communicates constantly, moving the defenders around him.'
        ]
      },
      {
        heading: 'The captain’s role',
        body:
          'As captain, Van Dijk sets the emotional temperature of the team. When Liverpool are under pressure, he slows things down. When they need a goal, he pushes the team forward. That leadership is part of why the 2024/25 title run felt so controlled.',
        bullets: [
          'He manages the referee and the game’s tempo without losing focus.',
          'He is a role model for young defenders in the squad.',
          'His fitness and availability have been central to Liverpool’s success.'
        ]
      },
      {
        heading: 'Building from the back',
        body:
          'Modern centre-backs have to pass. Van Dijk can switch play with a long diagonal, step into midfield with the ball or play a simple pass to the full-back. That range makes it harder for opponents to press Liverpool.',
        bullets: [
          'His long passing can turn defence into attack in one ball.',
          'He stays calm when pressed, which helps the team keep its shape.',
          'He often starts the move that ends with a Salah or Haaland-style chance at the other end.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Do not just watch the tackles. Watch where Van Dijk stands when the opponent has the ball. Is he covering the space behind the full-back? Is he tight to the striker? Is he pointing at a team-mate? That is defending in its modern form.',
        bullets: [
          'Look at the distance between him and the other centre-back.',
          'Notice how he angles his body to force the attacker one way.',
          'His headers from attacking corners are a bonus threat.'
        ]
      }
    ],
    strengths: ['Positioning', 'Aerial duels', 'Leadership', 'Passing'],
    stats: [
      { label: 'Premier League titles', value: '2' },
      { label: 'Champions League', value: '1' },
      { label: 'UEFA Men’s Player', value: '2019' },
      { label: 'Liverpool captain', value: '2023–' }
    ],
    milestone: [
      { year: '2018', event: 'Joins Liverpool from Southampton.' },
      { year: '2019', event: 'Wins the Champions League and UEFA Men’s Player of the Year.' },
      { year: '2025', event: 'Captains Liverpool to the 2024/25 Premier League title.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A great defender is not just a tackler. Van Dijk spends most of the match organising, covering and passing — the tackle is often the last resort.'
    },
    relatedSlugs: ['mohamed-salah', 'alisson-becker', 'arne-slot'],
    relatedGuideSlug: 'positions-explained',
    honours: ['Premier League: 2019/20, 2024/25', 'Champions League: 2018/19', 'UEFA Men’s Player of the Year: 2019'],
    sortOrder: 6,
    featured: true
  },
  {
    id: 'era-declan-rice',
    slug: 'declan-rice',
    kind: 'player',
    name: 'Declan Rice',
    role: 'Midfielder',
    clubId: 'arsenal',
    nationality: 'England',
    born: '1999',
    summary:
      'A box-to-box midfielder whose energy, tackling and set-piece delivery made him central to Arsenal’s title push.',
    introduction:
      'Rice is the midfielder who does the things that do not always show up in highlights: covering ground, winning the ball back, taking responsibility for set pieces and linking the defence to the attack. His move from West Ham to Arsenal in 2023 made him one of the most discussed transfers of the era.',
    sections: [
      {
        heading: 'The box-to-box engine',
        body:
          'Rice can play as a defensive midfielder or push further forward. In Arsenal’s system, he often starts deep and arrives in the box later in moves. That late running is hard to defend because opponents are already tracking the forwards.',
        bullets: [
          'He covers a huge amount of ground without losing his position.',
          'His tackling and interceptions break up opposition attacks.',
          'He can carry the ball forward when Arsenal need to break a press.'
        ]
      },
      {
        heading: 'Set pieces and leadership',
        body:
          'Rice’s delivery from corners and free kicks is one of Arsenal’s most important weapons. He also brings a vocal, front-foot personality to the team. When Arsenal need a goal, he is often the player urging the team forward.',
        bullets: [
          'His corners are a major part of Arsenal’s set-piece threat.',
          'He is comfortable taking responsibility in big matches.',
          'His England experience helped him settle quickly at a title-chasing club.'
        ]
      },
      {
        heading: 'Why the price tag mattered',
        body:
          'Arsenal paid a club-record fee to sign Rice from West Ham. That kind of transfer brings pressure, but it also signals intent. Rice’s arrival was part of a broader shift: Arsenal were no longer building for the future, they were trying to win now.',
        bullets: [
          'The move made him one of the most expensive midfielders in the league.',
          'He became a leader in a squad that was still relatively young.',
          'His performances helped Arsenal compete with City over consecutive seasons.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Rice when Arsenal lose the ball. His first job is to delay the counter-attack. Then watch him when Arsenal have a corner: his delivery is often the start of the chance, even if he does not get the assist.',
        bullets: [
          'Notice how often he is the player covering the space left by an attacking full-back.',
          'His late runs into the box are a good example of modern midfield movement.',
          'Set-piece routines are worth watching even before the ball is kicked.'
        ]
      }
    ],
    strengths: ['Ball-winning', 'Engine', 'Set pieces', 'Leadership'],
    stats: [
      { label: 'Arsenal move', value: '2023' },
      { label: 'Conference League', value: '1' },
      { label: 'Position', value: 'Central midfield' },
      { label: 'England', value: 'Regular' }
    ],
    milestone: [
      { year: '2023', event: 'Joins Arsenal from West Ham for a club-record fee.' },
      { year: '2023', event: 'Wins the Europa Conference League with West Ham.' },
      { year: '2024', event: 'Helps Arsenal challenge for the title again.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Midfielders are often described by numbers: 6, 8 and 10. Rice can do a bit of all three, which is why he is so valuable in a modern squad.'
    },
    relatedSlugs: ['bukayo-saka', 'rodri', 'mikel-arteta'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['Europa Conference League: 2022/23', 'FA Community Shield: 2023'],
    sortOrder: 7,
    featured: false
  },
  {
    id: 'era-alexander-isak',
    slug: 'alexander-isak',
    kind: 'player',
    name: 'Alexander Isak',
    role: 'Striker',
    clubId: 'newcastle',
    nationality: 'Sweden',
    born: '1999',
    summary:
      'A tall, smooth-running striker who gave Newcastle a focal point and a reliable route to goal.',
    introduction:
      'Isak is a modern centre-forward with an unusual combination of height and close control. He can hold the ball up, run in behind and finish with either foot. For Newcastle, he became the player who turned good performances into wins.',
    sections: [
      {
        heading: 'The complete forward',
        body:
          'Isak is not just a target man. He drops into midfield to link play, spins in behind to attack through balls and drifts wide to create space for team-mates. That variety makes him difficult for defenders to categorise.',
        bullets: [
          'He is comfortable receiving the ball with his back to goal.',
          'His acceleration over the first few yards is surprising for his height.',
          'He can finish with both feet, which makes him harder to show one way.'
        ]
      },
      {
        heading: 'Newcastle’s rise',
        body:
          'Newcastle’s takeover and subsequent investment changed the club’s ambitions. Isak was one of the signings that turned them from a mid-table side into a Champions League club. His goals gave the team a reliable end product to match its intensity.',
        bullets: [
          'Newcastle qualified for the Champions League in 2022/23.',
          'Isak scored 21 league goals in 2023/24.',
          'The team’s high-energy style suits a forward who can run in behind.'
        ]
      },
      {
        heading: 'Why the cup win mattered',
        body:
          'Newcastle won the EFL Cup in 2025, ending a long wait for a major domestic trophy. For a club with a huge, passionate support, that moment was about more than one competition. It showed that the project could deliver silverware, not just progress.',
        bullets: [
          'Cup runs give a squad experience of knockout football.',
          'A trophy can change the mood around a club and help attract players.',
          'Isak’s role as the main striker made him central to the celebration.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Isak’s first movement when Newcastle win the ball. If the defence is high, he will attack the space behind. If the defence is deep, he will drop in to combine. That decision-making is what makes him more than a finisher.',
        bullets: [
          'Look for the pass into his feet and the quick lay-off to a midfielder.',
          'Notice how often he attacks the near post when a cross comes in.',
          'His movement creates space for Newcastle’s wide players to cut inside.'
        ]
      }
    ],
    strengths: ['Movement', 'Two-footed finishing', 'Link play', 'Aerial presence'],
    stats: [
      { label: 'League goals in 2023/24', value: '21' },
      { label: 'EFL Cup', value: '1' },
      { label: 'Newcastle move', value: '2022' },
      { label: 'Position', value: 'Striker' }
    ],
    milestone: [
      { year: '2022', event: 'Joins Newcastle United from Real Sociedad.' },
      { year: '2023', event: 'Helps Newcastle qualify for the Champions League.' },
      { year: '2025', event: 'Wins the EFL Cup with Newcastle.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A striker’s link play matters as much as his finishing. Isak often starts moves by holding the ball up and bringing a team-mate into the game.'
    },
    relatedSlugs: ['erling-haaland', 'eddie-howe', 'anthony-gordon'],
    relatedGuideSlug: 'positions-explained',
    honours: ['EFL Cup: 2024/25'],
    sortOrder: 8,
    featured: false
  },
  {
    id: 'era-bruno-fernandes',
    slug: 'bruno-fernandes',
    kind: 'player',
    name: 'Bruno Fernandes',
    role: 'Attacking midfielder',
    clubId: 'man-united',
    nationality: 'Portugal',
    born: '1994',
    summary:
      'Manchester United’s creative hub, a risk-taking passer and one of the most vocal leaders in the league.',
    introduction:
      'Fernandes is a player who tries things. He plays passes into tight spaces, shoots from distance and demands the ball when the team is struggling. That risk-taking makes him both exciting and frustrating, which is why he is one of the most debated players of the era.',
    sections: [
      {
        heading: 'The creator',
        body:
          'Fernandes’s job is to turn possession into chances. He receives the ball between the lines, looks for the striker’s run and often plays the final pass before an assist. His set-piece delivery is another important part of his game.',
        bullets: [
          'He is comfortable playing as a number 10 or in a deeper midfield role.',
          'His through balls are often low and hard, designed for a striker to run onto.',
          'He takes penalties and free kicks, which adds to his goal output.'
        ]
      },
      {
        heading: 'The captain’s temperament',
        body:
          'Fernandes is visibly emotional on the pitch. He argues with referees, directs team-mates and reacts to mistakes. Some see that as leadership; others see it as distraction. Either way, it makes him a central character in United’s story.',
        bullets: [
          'He took the captaincy during a period of instability at the club.',
          'His availability and willingness to play every minute are notable.',
          'He is often the player who tries to lift the team when it is behind.'
        ]
      },
      {
        heading: 'The trophy years and the rebuild',
        body:
          'Fernandes joined United in 2020 and quickly became their most important attacking player. The club won the EFL Cup in 2023 and the FA Cup in 2024, but inconsistency in the league kept them away from the title race. His individual output remained high through the turbulence.',
        bullets: [
          'He has been one of United’s most productive players since arriving.',
          'The cup wins showed the team could perform in knockout football.',
          'The league challenge remains the club’s biggest unfinished project.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Fernandes when United win the ball in midfield. His first instinct is usually to play forward. Sometimes that creates a chance; sometimes it gives the ball away. That trade-off is the essence of a risk-taking creator.',
        bullets: [
          'Notice how often he points for the pass before receiving the ball.',
          'His body language changes when the team is losing — for better and worse.',
          'Set-piece delivery is a good way to see his technique up close.'
        ]
      }
    ],
    strengths: ['Creativity', 'Set pieces', 'Penalties', 'Leadership'],
    stats: [
      { label: 'Joined United', value: '2020' },
      { label: 'EFL Cup', value: '1' },
      { label: 'FA Cup', value: '1' },
      { label: 'Position', value: 'Attacking midfield' }
    ],
    milestone: [
      { year: '2020', event: 'Joins Manchester United from Sporting CP.' },
      { year: '2023', event: 'Wins the EFL Cup with United.' },
      { year: '2024', event: 'Wins the FA Cup with United.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A creative player will give the ball away sometimes. The question is whether the chances he creates are worth the risk. With Fernandes, they usually are.'
    },
    relatedSlugs: ['cole-palmer', 'ruben-amorim', 'bukayo-saka'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['EFL Cup: 2022/23', 'FA Cup: 2023/24'],
    sortOrder: 9,
    featured: false
  },
  {
    id: 'era-alisson-becker',
    slug: 'alisson-becker',
    kind: 'player',
    name: 'Alisson Becker',
    role: 'Goalkeeper',
    clubId: 'liverpool',
    nationality: 'Brazil',
    born: '1992',
    summary:
      'A goalkeeper who combines shot-stopping with calm distribution and a talent for the dramatic moment.',
    introduction:
      'Alisson is proof that a goalkeeper can be a playmaker. He saves the shots he should save, dominates his penalty area and starts attacks with quick, accurate distribution. In big games, he is often the difference between a good result and a great one.',
    sections: [
      {
        heading: 'The modern goalkeeper',
        body:
          'Goalkeepers are now expected to be comfortable with the ball at their feet. Alisson can play short passes under pressure, chip the ball over a press or launch a counter-attack with a long throw or kick. That range gives Liverpool options when they build from the back.',
        bullets: [
          'He is comfortable stepping outside his penalty area to clear danger.',
          'His passing helps Liverpool beat the first line of pressure.',
          'He reads the game well enough to act as a sweeper behind a high line.'
        ]
      },
      {
        heading: 'Shot-stopping and one-on-ones',
        body:
          'Alisson’s positioning is excellent. He makes himself big in one-on-one situations and stays calm when the attacker is closing in. Some of his most famous saves have come in the biggest matches, when the team needed him most.',
        bullets: [
          'He is particularly strong at closing down the angle for a striker running through.',
          'His reflexes in tight spaces are a major asset.',
          'He communicates with the defence constantly, especially at set pieces.'
        ]
      },
      {
        heading: 'The big moments',
        body:
          'Alisson has delivered some unforgettable moments for Liverpool, including a last-minute header against West Brom in 2021 that kept the club’s Champions League hopes alive. Goalkeepers rarely get to be heroes at the other end, which made that goal so memorable.',
        bullets: [
          'He won the Champions League in his first season at the club.',
          'He has been part of two Premier League title-winning squads.',
          'His consistency has made him one of Liverpool’s most important players.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch the goalkeeper before the shot. Is he set? Is he positioned slightly off his line? Does he choose to catch or parry? Then watch his distribution: a quick throw can be the start of a counter-attack.',
        bullets: [
          'Goalkeepers are judged on mistakes, but their positioning prevents most chances.',
          'A good first pass from the keeper can beat an entire pressing line.',
          'The best keepers make the difficult save look routine.'
        ]
      }
    ],
    strengths: ['Shot-stopping', 'Distribution', 'Positioning', 'Big-game temperament'],
    stats: [
      { label: 'Premier League titles', value: '2' },
      { label: 'Champions League', value: '1' },
      { label: 'Copa América', value: '1' },
      { label: 'Liverpool move', value: '2018' }
    ],
    milestone: [
      { year: '2018', event: 'Joins Liverpool from Roma.' },
      { year: '2019', event: 'Wins the Champions League.' },
      { year: '2025', event: 'Wins a second Premier League title.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'The goalkeeper is the only player who can use their hands in the penalty area. Modern keepers also need to pass, so watch their feet as well as their saves.'
    },
    relatedSlugs: ['virgil-van-dijk', 'mohamed-salah', 'arne-slot'],
    relatedGuideSlug: 'positions-explained',
    honours: ['Premier League: 2019/20, 2024/25', 'Champions League: 2018/19', 'Copa América: 2019'],
    sortOrder: 10,
    featured: false
  },
  {
    id: 'era-kevin-de-bruyne',
    slug: 'kevin-de-bruyne',
    kind: 'player',
    name: 'Kevin De Bruyne',
    role: 'Midfielder',
    clubId: 'man-city',
    nationality: 'Belgium',
    born: '1991',
    summary:
      'Manchester City’s long-time creative engine and one of the great passers of the Premier League era.',
    introduction:
      'De Bruyne is the player who makes difficult passes look easy. He can cross from the right, shoot from distance, play a through ball with the outside of his foot or deliver a corner onto a team-mate’s head. For a decade, he was the creative centre of City’s dominance.',
    sections: [
      {
        heading: 'The passing range',
        body:
          'De Bruyne’s signature is the low, hard cross across the six-yard box. He also specialises in disguised through balls and long switches of play. His ability to pick the right pass at speed is what separated him from other attacking midfielders.',
        bullets: [
          'He can deliver with either foot, which makes him hard to show one way.',
          'His crosses are often played early, before the defence can set.',
          'He is comfortable shooting from outside the box when space opens up.'
        ]
      },
      {
        heading: 'The City machine',
        body:
          'City’s system gave De Bruyne the freedom to drift across the pitch and find spaces between the lines. With runners ahead of him and possession behind him, he could take risks without leaving the team exposed. That balance was central to City’s title run.',
        bullets: [
          'He was a key part of six league titles in the Guardiola era.',
          'His partnership with the forwards turned possession into goals.',
          'His pressing and work rate were often underrated.'
        ]
      },
      {
        heading: 'The later years',
        body:
          'As injuries and age caught up, De Bruyne’s role changed. He played fewer full matches but remained a decisive substitute and a leader in the dressing room. His ability to change a game in 20 minutes made him valuable even when he was not starting.',
        bullets: [
          'He remained one of the league’s best set-piece takers.',
          'His experience helped younger players understand City’s system.',
          'His departure would mark the end of an era for the club.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch his body shape before the pass. He often opens his hips to make the defender think he is going one way, then plays the ball the other way. That disguise is why his through balls are so effective.',
        bullets: [
          'Notice how early he looks up before playing a cross.',
          'His first touch is often used to set up the pass, not to control the ball.',
          'Set pieces are a good place to see his technique under no pressure.'
        ]
      }
    ],
    strengths: ['Passing', 'Crossing', 'Set pieces', 'Vision'],
    stats: [
      { label: 'Premier League titles', value: '6' },
      { label: 'Champions League', value: '1' },
      { label: 'City move', value: '2015' },
      { label: 'Position', value: 'Midfield' }
    ],
    milestone: [
      { year: '2015', event: 'Joins Manchester City from Wolfsburg.' },
      { year: '2023', event: 'Wins the treble with City.' },
      { year: '2024', event: 'Helps City win a fourth consecutive title.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Not every great midfielder is fast. De Bruyne wins with timing, technique and the ability to see the pass before anyone else.'
    },
    relatedSlugs: ['erling-haaland', 'rodri', 'pep-guardiola'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['Premier League: 2017/18, 2018/19, 2020/21, 2021/22, 2022/23, 2023/24', 'Champions League: 2022/23'],
    sortOrder: 11,
    featured: false
  },
  {
    id: 'era-anthony-gordon',
    slug: 'anthony-gordon',
    kind: 'player',
    name: 'Anthony Gordon',
    role: 'Winger',
    clubId: 'newcastle',
    nationality: 'England',
    born: '2001',
    summary:
      'A direct, hard-running winger who became a key part of Newcastle’s high-energy attacking style.',
    introduction:
      'Gordon is the kind of winger defenders hate to face: fast, direct and relentless. He attacks the full-back, runs in behind and presses without the ball. His development at Newcastle turned him from a promising young player into an England international.',
    sections: [
      {
        heading: 'Direct running',
        body:
          'Gordon’s first instinct is to attack. He receives the ball on the left, faces up the full-back and tries to beat them on the outside or cut inside. That directness gives Newcastle a way to break down teams that sit deep.',
        bullets: [
          'He is comfortable on either wing, which makes him a flexible option.',
          'His acceleration over the first few yards creates separation.',
          'He draws fouls and wins corners in dangerous areas.'
        ]
      },
      {
        heading: 'Pressing and work rate',
        body:
          'Newcastle’s style depends on forwards pressing defenders and midfielders. Gordon’s energy fits that approach. He closes down relentlessly, tracks back and helps the team defend from the front.',
        bullets: [
          'His pressing creates mistakes in the opposition’s build-up.',
          'He is willing to run in behind even when he is not likely to receive the ball.',
          'That work rate makes him a favourite with coaches and supporters.'
        ]
      },
      {
        heading: 'The England step',
        body:
          'Gordon’s form at Newcastle earned him a place in the England squad. That step required more than pace: he had to improve his decision-making, his finishing and his understanding of when to press and when to hold shape.',
        bullets: [
          'International football is faster and more tactical than club football.',
          'Competing for places in a deep England squad is a test of consistency.',
          'His versatility across the front line helps him get minutes.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Gordon when Newcastle press. He is often the first player to close down the full-back. Then watch him on the ball: does he go outside or cut inside? His decision in that moment tells you how the defence is set up.',
        bullets: [
          'A winger’s defensive work is as important as their dribbling in modern football.',
          'Notice how often he switches wings during a match.',
          'His directness can create space for the striker and the attacking midfielders.'
        ]
      }
    ],
    strengths: ['Pace', 'Direct running', 'Pressing', 'Versatility'],
    stats: [
      { label: 'Newcastle move', value: '2023' },
      { label: 'Position', value: 'Winger' },
      { label: 'England', value: 'International' },
      { label: 'Style', value: 'Direct and high-energy' }
    ],
    milestone: [
      { year: '2023', event: 'Joins Newcastle United from Everton.' },
      { year: '2024', event: 'Becomes a regular in Newcastle’s attack.' },
      { year: '2025', event: 'Wins the EFL Cup with Newcastle.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Modern wingers are judged on both sides of the ball. Gordon’s pressing is as important to Newcastle as his dribbling.'
    },
    relatedSlugs: ['alexander-isak', 'eddie-howe', 'bukayo-saka'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['EFL Cup: 2024/25'],
    sortOrder: 12,
    featured: false
  },
  {
    id: 'era-mikel-arteta',
    slug: 'mikel-arteta',
    kind: 'manager',
    name: 'Mikel Arteta',
    role: 'Head coach',
    clubId: 'arsenal',
    nationality: 'Spain',
    born: '1982',
    summary:
      'The coach who rebuilt Arsenal from a top-four challenger into a title contender with a young, possession-based squad.',
    introduction:
      'Arteta took over Arsenal in 2019 with a clear idea: control the ball, press aggressively and build a squad of players who could execute a detailed plan. The early years were difficult, but the project eventually produced a team capable of pushing Manchester City for the title.',
    sections: [
      {
        heading: 'The rebuild',
        body:
          'Arteta’s first task was cultural. He removed senior players, promoted young ones and demanded a consistent standard in training. The results were uneven at first, but the direction was clear: Arsenal would become a team that controlled games rather than reacted to them.',
        bullets: [
          'He leaned on academy players such as Bukayo Saka.',
          'He signed players who suited a possession-based system.',
          'He turned the Emirates Stadium back into a difficult place to visit.'
        ]
      },
      {
        heading: 'The style',
        body:
          'Arsenal attack with a clear structure: a deep midfielder drops between the centre-backs, the full-backs push high, and the wingers hold width. The aim is to create overloads on one side, then switch play quickly to the other. Set pieces are a major part of the plan.',
        bullets: [
          'Possession is used to move opponents out of position.',
          'The team presses immediately after losing the ball.',
          'Set-piece routines are rehearsed in detail and treated as a serious source of goals.'
        ]
      },
      {
        heading: 'The title challenges',
        body:
          'Arsenal finished second in 2022/23 and 2023/24, pushing City close both times. The gap was small enough that fine details — squad depth, injuries, big-game decisions — became the difference. In the 2025/26 demo season, Arsenal start at the top of the seeded table.',
        bullets: [
          'The 2022/23 season announced Arsenal as a serious challenger again.',
          'The 2023/24 race went to the final weeks.',
          'The next step is turning a challenge into a title.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch the shape when Arsenal have the ball. The full-backs push high, the wingers stay wide and the midfield rotates. When they lose the ball, watch how quickly the nearest players press. That reaction is the signature of an Arteta team.',
        bullets: [
          'The right side is often the starting point of Arsenal’s attacks.',
          'Set pieces are worth watching even when the game is cagey.',
          'Arteta’s substitutions are often designed to change the tempo, not just the personnel.'
        ]
      }
    ],
    strengths: ['Possession structure', 'Pressing', 'Set pieces', 'Squad building'],
    stats: [
      { label: 'Appointed', value: '2019' },
      { label: 'FA Cup', value: '1' },
      { label: 'Best league finish', value: '2nd' },
      { label: 'Style', value: 'Control and press' }
    ],
    milestone: [
      { year: '2019', event: 'Appointed Arsenal head coach.' },
      { year: '2020', event: 'Wins the FA Cup.' },
      { year: '2023', event: 'Leads Arsenal to a second-place finish.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A manager’s style is often visible without the ball. Watch how Arsenal press after losing possession — that is the clearest expression of Arteta’s plan.'
    },
    relatedSlugs: ['bukayo-saka', 'declan-rice', 'pep-guardiola'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['FA Cup: 2019/20', 'Community Shield: 2020, 2023'],
    sortOrder: 1,
    featured: true
  },
  {
    id: 'era-pep-guardiola',
    slug: 'pep-guardiola',
    kind: 'manager',
    name: 'Pep Guardiola',
    role: 'Head coach',
    clubId: 'man-city',
    nationality: 'Spain',
    born: '1971',
    summary:
      'The defining manager of the era, whose Manchester City side turned positional play into a trophy machine.',
    introduction:
      'Guardiola arrived at City in 2016 and gradually built a team that could win in several different ways. The constant was control: control of the ball, control of space and control of the game’s rhythm. By 2023, that project had produced a treble.',
    sections: [
      {
        heading: 'Positional play',
        body:
          'Guardiola’s teams create superiority in small areas. A full-back moves into midfield, a centre-back steps forward, a winger holds width. The aim is to make the opponent choose between defending the ball and defending the space, then punish the wrong choice.',
        bullets: [
          'Players are assigned zones rather than fixed positions.',
          'The team uses the whole pitch to stretch opponents.',
          'Ball circulation is a tool for creating space, not just keeping possession.'
        ]
      },
      {
        heading: 'Evolution',
        body:
          'Guardiola’s City were not static. They moved from a pure passing team to one that could use a striker like Haaland, defend with a high line and win games in transition. That flexibility kept them ahead of opponents who adapted to their first version.',
        bullets: [
          'The signing of Haaland added a direct goal threat.',
          'Inverted full-backs helped City control midfield.',
          'The team became more comfortable defending deep when needed.'
        ]
      },
      {
        heading: 'The trophies',
        body:
          'City won six league titles in the Guardiola era by 2024, including four in a row from 2020/21 to 2023/24. The 2022/23 treble — league, FA Cup and Champions League — was the high point. Even in a disappointing 2024/25, City remained one of the strongest squads in Europe.',
        bullets: [
          'Six league titles between 2017/18 and 2023/24.',
          'A treble in 2022/23.',
          'A record-breaking 100-point season in 2017/18.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch the full-backs. Are they staying wide or moving into midfield? That tells you how City will build up. Then watch the wingers: are they holding width or drifting inside? Guardiola changes those details from game to game.',
        bullets: [
          'City’s shape changes depending on the opponent’s press.',
          'The best way to understand the system is to watch one player’s movement off the ball.',
          'When City lose the ball, they try to win it back immediately.'
        ]
      }
    ],
    strengths: ['Positional play', 'Tactical flexibility', 'Player development', 'Game management'],
    stats: [
      { label: 'City appointed', value: '2016' },
      { label: 'Premier League titles', value: '6' },
      { label: 'Champions League', value: '1' },
      { label: 'Treble', value: '2022/23' }
    ],
    milestone: [
      { year: '2016', event: 'Appointed Manchester City manager.' },
      { year: '2018', event: 'City reach 100 points in the league.' },
      { year: '2023', event: 'Wins the treble.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Guardiola’s football is often described as “possession”, but the point is control. City pass to move the opponent, not just to keep the ball.'
    },
    relatedSlugs: ['erling-haaland', 'rodri', 'kevin-de-bruyne'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['Premier League: 2017/18, 2018/19, 2020/21, 2021/22, 2022/23, 2023/24', 'Champions League: 2022/23'],
    sortOrder: 2,
    featured: true
  },
  {
    id: 'era-arne-slot',
    slug: 'arne-slot',
    kind: 'manager',
    name: 'Arne Slot',
    role: 'Head coach',
    clubId: 'liverpool',
    nationality: 'Netherlands',
    born: '1978',
    summary:
      'The coach who succeeded Jürgen Klopp and won the Premier League title in his first season at Liverpool.',
    introduction:
      'Following Klopp was one of the hardest jobs in football. Slot did not try to copy him. He kept Liverpool’s pressing identity but added more control, a more structured midfield and a calmer approach to big games. The result was a title in 2024/25.',
    sections: [
      {
        heading: 'Inheriting a giant',
        body:
          'Klopp left behind a strong squad, a passionate support and an unmistakable style. Slot’s challenge was to evolve the team without losing what made it special. He kept the high press but made the build-up more patient and the midfield more compact.',
        bullets: [
          'He retained the core of Klopp’s squad.',
          'He adjusted the pressing triggers rather than abandoning the press.',
          'He gave senior players more responsibility for controlling games.'
        ]
      },
      {
        heading: 'Control over chaos',
        body:
          'Liverpool under Slot were still aggressive, but they picked their moments. The team spent longer in possession, used the full-backs more carefully and protected the centre-backs. That structure helped them avoid the wild swings that can cost a title.',
        bullets: [
          'The midfield protected the defence better than in previous seasons.',
          'Salah remained the main attacking threat.',
          'The team managed the run-in with a calm, professional approach.'
        ]
      },
      {
        heading: 'The title season',
        body:
          'Liverpool won the 2024/25 Premier League title, finishing clear of Arsenal. It was Slot’s first season in charge and a validation of the club’s decision to promote continuity rather than revolution. The title also marked a new era after Klopp.',
        bullets: [
          'The title was built on consistency rather than a record-breaking points total.',
          'Key players stayed fit at the right time.',
          'Slot handled the pressure of replacing a club legend with unusual calm.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Liverpool’s midfield shape when they lose the ball. Under Slot, the team tries to keep a compact block rather than chase individually. Then watch the first pass after a regain: the aim is still to attack quickly.',
        bullets: [
          'The team’s pressing is more selective than under Klopp.',
          'Full-backs are asked to balance attacking runs with defensive cover.',
          'Slot’s substitutions often focus on controlling the middle of the pitch.'
        ]
      }
    ],
    strengths: ['Structure', 'Press control', 'Game management', 'Squad continuity'],
    stats: [
      { label: 'Appointed', value: '2024' },
      { label: 'Premier League', value: '2024/25' },
      { label: 'First season', value: 'Title winner' },
      { label: 'Style', value: 'Controlled pressing' }
    ],
    milestone: [
      { year: '2024', event: 'Appointed Liverpool head coach.' },
      { year: '2025', event: 'Wins the Premier League in his first season.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Replacing a legendary manager is never easy. Slot’s success shows the value of evolving a team instead of tearing it up.'
    },
    relatedSlugs: ['mohamed-salah', 'virgil-van-dijk', 'mikel-arteta'],
    relatedGuideSlug: 'last-three-seasons',
    honours: ['Premier League: 2024/25'],
    sortOrder: 3,
    featured: true
  },
  {
    id: 'era-enzo-maresca',
    slug: 'enzo-maresca',
    kind: 'manager',
    name: 'Enzo Maresca',
    role: 'Head coach',
    clubId: 'chelsea',
    nationality: 'Italy',
    born: '1980',
    summary:
      'A possession-focused coach tasked with turning Chelsea’s expensive, young squad into a coherent team.',
    introduction:
      'Maresca made his name at Leicester City before taking over Chelsea in 2024. His teams want to build from the back, control the ball and use the full width of the pitch. At Chelsea, the challenge was to make a large, young squad play with the same idea every week.',
    sections: [
      {
        heading: 'Building from the back',
        body:
          'Maresca’s teams start attacks with the goalkeeper and centre-backs. The aim is to draw the press, then play through it into midfield. That approach requires brave players and a lot of training-ground repetition.',
        bullets: [
          'The goalkeeper is treated as an outfield player in possession.',
          'The midfielders drop deep to create passing angles.',
          'The full-backs can move inside to create numerical superiority.'
        ]
      },
      {
        heading: 'Managing a deep squad',
        body:
          'Chelsea’s squad is one of the largest in the league. Maresca has to keep everyone involved while finding a consistent starting XI. Rotation is not just about fitness; it is about giving different players the minutes they need to develop.',
        bullets: [
          'Young players need regular starts to build confidence.',
          'Competition for places can raise standards but also create tension.',
          'The coach has to balance league games with cup and European fixtures.'
        ]
      },
      {
        heading: 'The first trophies',
        body:
          'Chelsea won the Conference League in 2024/25 and the Club World Cup in 2025. Those trophies gave the project early silverware and valuable experience for a young squad. The next challenge was to turn that into a consistent league challenge.',
        bullets: [
          'Cup runs give fringe players meaningful minutes.',
          'Winning a final builds belief in the coach’s methods.',
          'The league remains the true measure of progress.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Chelsea’s goalkeeper when they have a goal kick. Are they playing short or going long? That choice tells you how confident the coach is in the build-up against that opponent. Then watch the midfield rotation: it is the engine of the whole system.',
        bullets: [
          'Chelsea’s shape changes depending on who is playing at full-back.',
          'The team tries to create central overloads before switching wide.',
          'Maresca is not afraid to change formation during a match.'
        ]
      }
    ],
    strengths: ['Build-up play', 'Possession structure', 'Squad rotation', 'Youth development'],
    stats: [
      { label: 'Appointed', value: '2024' },
      { label: 'Conference League', value: '2024/25' },
      { label: 'Club World Cup', value: '2025' },
      { label: 'Style', value: 'Possession' }
    ],
    milestone: [
      { year: '2024', event: 'Appointed Chelsea head coach.' },
      { year: '2025', event: 'Wins the Conference League.' },
      { year: '2025', event: 'Wins the Club World Cup.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A possession coach is not just trying to keep the ball. The aim is to make the opponent move, then attack the space they leave behind.'
    },
    relatedSlugs: ['cole-palmer', 'pep-guardiola', 'bruno-fernandes'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['Conference League: 2024/25', 'Club World Cup: 2025'],
    sortOrder: 4,
    featured: true
  },
  {
    id: 'era-eddie-howe',
    slug: 'eddie-howe',
    kind: 'manager',
    name: 'Eddie Howe',
    role: 'Head coach',
    clubId: 'newcastle',
    nationality: 'England',
    born: '1977',
    summary:
      'The coach who turned Newcastle’s investment into a high-energy team and a trophy-winning squad.',
    introduction:
      'Howe took over Newcastle in 2021 and gradually built a team that could press, run and compete with the best. The takeover gave the club resources, but the coaching had to turn those resources into a coherent style. Newcastle’s Champions League qualification and 2025 EFL Cup win showed it worked.',
    sections: [
      {
        heading: 'High-energy pressing',
        body:
          'Newcastle’s style is built on intensity. The forwards press the opposition’s build-up, the midfield pushes up behind them and the defence holds a high line. It is demanding, but it creates turnovers in dangerous areas.',
        bullets: [
          'The team tries to win the ball back within seconds of losing it.',
          'Wide players are expected to press full-backs aggressively.',
          'The crowd responds to the energy, which makes the stadium a difficult place to visit.'
        ]
      },
      {
        heading: 'Building around Isak',
        body:
          'Howe’s attack is designed to give Alexander Isak chances. The team plays forward quickly, uses wide runners and delivers crosses into the box. Isak’s movement and finishing turn that service into goals.',
        bullets: [
          'The midfield looks for early passes into the striker’s feet.',
          'Wingers attack the space around the striker rather than crowding him.',
          'Full-backs provide width when the wingers cut inside.'
        ]
      },
      {
        heading: 'The trophy breakthrough',
        body:
          'Newcastle won the EFL Cup in 2025, their first major domestic trophy in decades. For Howe, it was proof that the project could deliver silverware. For the supporters, it was a moment of release after years of near misses and disappointment.',
        bullets: [
          'Cup competitions offer a realistic route to silverware.',
          'The final required a different kind of game management to the league.',
          'The win raised expectations for the following seasons.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Newcastle without the ball. The whole team moves together: press, cover, recover. If one player is late, the shape opens up. That is why Howe’s teams are so demanding to play in.',
        bullets: [
          'The first press often starts with the striker curving his run.',
          'The midfield must stay connected to the defence behind the press.',
          'Newcastle’s best attacks often begin with a turnover in the opponent’s half.'
        ]
      }
    ],
    strengths: ['Pressing', 'Team shape', 'Man management', 'Cup preparation'],
    stats: [
      { label: 'Appointed', value: '2021' },
      { label: 'Champions League', value: '2023/24' },
      { label: 'EFL Cup', value: '2024/25' },
      { label: 'Style', value: 'High-energy press' }
    ],
    milestone: [
      { year: '2021', event: 'Appointed Newcastle United head coach.' },
      { year: '2023', event: 'Leads Newcastle to Champions League qualification.' },
      { year: '2025', event: 'Wins the EFL Cup.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Pressing is a team activity. One player running alone is easy to play around; five players moving together is hard to beat.'
    },
    relatedSlugs: ['alexander-isak', 'anthony-gordon', 'unai-emery'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['EFL Cup: 2024/25'],
    sortOrder: 5,
    featured: false
  },
  {
    id: 'era-unai-emery',
    slug: 'unai-emery',
    kind: 'manager',
    name: 'Unai Emery',
    role: 'Head coach',
    clubId: 'aston-villa',
    nationality: 'Spain',
    born: '1971',
    summary:
      'A meticulous coach who turned Aston Villa into a European side with detailed preparation and a compact shape.',
    introduction:
      'Emery has a reputation as one of the most detailed coaches in Europe. At Aston Villa, he built a team that defends compactly, attacks quickly and adapts its plan to each opponent. Villa’s return to the Champions League was a reward for that work.',
    sections: [
      {
        heading: 'Preparation and detail',
        body:
          'Emery’s teams are known for their match-specific plans. He studies the opponent’s build-up, set pieces and key players, then adjusts his team’s shape and pressing triggers. Players often describe his meetings as unusually thorough.',
        bullets: [
          'Villa change their pressing height depending on the opponent.',
          'Set-piece routines are a major part of the preparation.',
          'Individual instructions are tailored to the player they are marking.'
        ]
      },
      {
        heading: 'The Villa project',
        body:
          'Emery took over Villa in 2022 and quickly improved their league position. The club invested in the squad, and the coach turned the team into a top-four side. Villa Park became a fortress, especially on European nights.',
        bullets: [
          'Villa finished fourth in 2023/24 and qualified for the Champions League.',
          'The team’s home form was central to that success.',
          'Emery’s experience in European competition helped in the Champions League run.'
        ]
      },
      {
        heading: 'The style',
        body:
          'Villa defend in a compact block and attack with quick combinations. The full-backs are important in both phases: they provide width in possession and tuck in when the team defends. The forward line is direct and comfortable playing on the counter.',
        bullets: [
          'The team is happy to concede possession if the shape stays compact.',
          'Quick transitions are a key source of goals.',
          'The midfield balances creativity with defensive discipline.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch Villa’s shape when the opponent has the ball. The team stays narrow, forces play wide and then presses the full-back. That trap is a signature of Emery’s coaching.',
        bullets: [
          'The block is designed to protect the centre of the pitch.',
          'Villa’s wingers work hard to track back.',
          'Set pieces are worth watching for both attacking and defensive detail.'
        ]
      }
    ],
    strengths: ['Preparation', 'Defensive shape', 'Set pieces', 'European experience'],
    stats: [
      { label: 'Appointed', value: '2022' },
      { label: 'Best league finish', value: '4th' },
      { label: 'Champions League', value: '2024/25' },
      { label: 'Style', value: 'Compact and detailed' }
    ],
    milestone: [
      { year: '2022', event: 'Appointed Aston Villa head coach.' },
      { year: '2024', event: 'Leads Villa to fourth place and Champions League football.' },
      { year: '2025', event: 'Takes Villa into the Champions League knockout stages.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'Not every good team plays the same way. Emery’s Villa are proof that a compact, well-drilled side can compete with richer clubs.'
    },
    relatedSlugs: ['eddie-howe', 'mikel-arteta', 'pep-guardiola'],
    relatedGuideSlug: 'last-three-seasons',
    honours: ['Europa League: 4 titles (with Sevilla and Villarreal)'],
    sortOrder: 6,
    featured: false
  },
  {
    id: 'era-thomas-frank',
    slug: 'thomas-frank',
    kind: 'manager',
    name: 'Thomas Frank',
    role: 'Head coach',
    clubId: 'tottenham',
    nationality: 'Denmark',
    born: '1973',
    summary:
      'The coach who built Brentford into a stable Premier League club before taking on the Tottenham job.',
    introduction:
      'Frank’s work at Brentford made him one of the most respected coaches in England. He took a small club into the Premier League, kept it there and developed a reputation for smart recruitment, set pieces and flexible tactics. In 2025, he moved to Tottenham.',
    sections: [
      {
        heading: 'The Brentford model',
        body:
          'Brentford succeeded by recruiting intelligently, using data and giving players clear roles. Frank’s team was organised, direct and dangerous from set pieces. They were never the biggest spenders, but they were rarely easy to play against.',
        bullets: [
          'The club found value in players from lower leagues and abroad.',
          'Set pieces were treated as a major attacking weapon.',
          'The team’s shape changed depending on the opponent.'
        ]
      },
      {
        heading: 'Flexibility',
        body:
          'Frank is comfortable switching between a back three and a back four. He adapts his pressing height and attacking patterns to the players available and the opponent’s strengths. That flexibility is a big reason Brentford survived and then thrived.',
        bullets: [
          'The team could press high or defend deep depending on the plan.',
          'Wide players were asked to attack space rather than hug the touchline.',
          'The coach trusted squad players to step into different roles.'
        ]
      },
      {
        heading: 'The Tottenham step',
        body:
          'Moving to Tottenham was a step up in pressure and expectation. Frank inherited a squad with attacking talent but also questions about consistency and identity. His challenge was to bring Brentford’s organisation to a club that expects to compete for trophies.',
        bullets: [
          'Tottenham fans expect front-foot, attacking football.',
          'The squad needed to become more resilient in big games.',
          'Frank’s set-piece expertise could be an immediate asset.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch the first 10 minutes. Frank’s teams often start with a clear plan: press high, sit deep or target a specific area. Then watch the set pieces. His sides are always well drilled from dead balls.',
        bullets: [
          'The formation may change, but the organisation does not.',
          'Set-piece routines are a reliable source of chances.',
          'Frank is not afraid to make early substitutions if the plan is not working.'
        ]
      }
    ],
    strengths: ['Organisation', 'Set pieces', 'Recruitment', 'Tactical flexibility'],
    stats: [
      { label: 'Brentford appointed', value: '2018' },
      { label: 'Promotion', value: '2021' },
      { label: 'Tottenham appointed', value: '2025' },
      { label: 'Style', value: 'Organised and adaptable' }
    ],
    milestone: [
      { year: '2018', event: 'Appointed Brentford head coach.' },
      { year: '2021', event: 'Leads Brentford to promotion to the Premier League.' },
      { year: '2025', event: 'Appointed Tottenham Hotspur head coach.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A coach from a smaller club can be just as sophisticated as one from a giant. Frank’s Brentford were one of the best-organised teams in the league.'
    },
    relatedSlugs: ['mikel-arteta', 'eddie-howe', 'unai-emery'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['Championship promotion: 2020/21'],
    sortOrder: 7,
    featured: false
  },
  {
    id: 'era-ruben-amorim',
    slug: 'ruben-amorim',
    kind: 'manager',
    name: 'Rúben Amorim',
    role: 'Head coach',
    clubId: 'man-united',
    nationality: 'Portugal',
    born: '1985',
    summary:
      'The young Portuguese coach who arrived at Manchester United with a fixed 3-4-3 system and a big rebuild ahead.',
    introduction:
      'Amorim made his name at Sporting CP, where he won league titles and built a reputation for clear principles and strong man-management. He took over Manchester United in 2024 with a specific system and a mandate to change the club’s direction.',
    sections: [
      {
        heading: 'The Sporting years',
        body:
          'At Sporting, Amorim built a team that pressed aggressively, defended in a back three and attacked with quick combinations. He won league titles and developed young players, earning a reputation as one of Europe’s most promising coaches.',
        bullets: [
          'He won two Portuguese league titles with Sporting.',
          'His teams were known for intensity and clear structure.',
          'He gave young players important roles in the first team.'
        ]
      },
      {
        heading: 'The 3-4-3 system',
        body:
          'Amorim’s preferred shape uses three centre-backs, two wing-backs and two midfielders. The system provides width in possession and cover in defence, but it requires specialist players who understand the roles. Adapting United’s squad to it was always going to take time.',
        bullets: [
          'The wing-backs are crucial: they provide width and defend the flanks.',
          'The two midfielders have to cover a lot of ground.',
          'The front three need to press together to make the system work.'
        ]
      },
      {
        heading: 'The challenge at United',
        body:
          'United’s problems were not only tactical. The club needed a cultural reset, better recruitment and a clearer identity. Amorim’s early months were difficult, but the project was always going to be measured over seasons rather than weeks.',
        bullets: [
          'The squad had to adapt to a new formation and new demands.',
          'Results were inconsistent while the coach evaluated his players.',
          'The club’s history means the pressure is intense from the first day.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch the wing-backs. If they are high, United are attacking. If they are deep, the team is protecting a lead or struggling to control the game. The width of the three centre-backs also tells you how brave the build-up is.',
        bullets: [
          'The system is easier to understand if you focus on one flank.',
          'United’s pressing is designed to force the ball into wide areas.',
          'Amorim’s substitutions often change the shape as well as the personnel.'
        ]
      }
    ],
    strengths: ['Clear principles', 'Man management', 'Back-three structure', 'Youth development'],
    stats: [
      { label: 'United appointed', value: '2024' },
      { label: 'Portuguese titles', value: '2' },
      { label: 'Preferred shape', value: '3-4-3' },
      { label: 'Style', value: 'Intense and structured' }
    ],
    milestone: [
      { year: '2020', event: 'Appointed Sporting CP head coach.' },
      { year: '2021', event: 'Wins the Portuguese league title.' },
      { year: '2024', event: 'Appointed Manchester United head coach.' }
    ],
    callout: {
      label: 'Newcomer note',
      text:
        'A formation is only a starting point. What matters is how the players move within it. Watch United’s wing-backs to see Amorim’s system in action.'
    },
    relatedSlugs: ['bruno-fernandes', 'mikel-arteta', 'pep-guardiola'],
    relatedGuideSlug: 'modern-era-primer',
    honours: ['Primeira Liga: 2020/21, 2023/24', 'Taça da Liga: multiple'],
    sortOrder: 8,
    featured: false
  }
];

export const eraStories = [
  {
    id: 'era-story-title-race',
    slug: 'the-90-point-title-race',
    title: 'Why 90 points is the new title benchmark',
    category: 'Title race',
    summary:
      'Manchester City raised the bar, Arsenal closed the gap and Liverpool found a different route to the top. The modern title race is a test of squad depth as much as a starting XI.',
    readTime: 6,
    publishedAt: daysAgo(3),
    featured: true,
    sortOrder: 1,
    sections: [
      {
        heading: 'The bar has risen',
        body:
          'In the 2010s, a title-winning team could often afford a few draws and still finish comfortably on top. The modern benchmark is different. City’s 100-point season in 2017/18 set a new standard, and their title wins in 2022/23 and 2023/24 came with 89 and 91 points. Arsenal finished second with 84 and 89 in those seasons. The margin for error at the top is now tiny.',
        bullets: [
          'The champion has needed close to 90 points to be safe in recent races.',
          'Rivals now measure themselves against City’s consistency, not just their own improvement.',
          'A single bad month can end a title challenge.'
        ]
      },
      {
        heading: 'Three different models',
        body:
          'City’s model is control and depth: a squad built to dominate possession and rotate without dropping quality. Arsenal’s model is a young core, detailed patterns and set-piece strength. Liverpool’s 2024/25 title was built on continuity, a calmer structure and a core of experienced winners. All three approaches can work, which is what makes the era interesting.',
        bullets: [
          'City spend big, but they also coach players into very specific roles.',
          'Arsenal improved by developing young players and adding targeted signings.',
          'Liverpool showed that continuity can be a competitive advantage.'
        ]
      },
      {
        heading: 'The fine margins',
        body:
          'Title races are often decided by small details: a late winner, a goalkeeper’s save, a set-piece goal or a substitution that changes a game. The best teams plan for those moments by building deep squads and rehearsing routines. The 2023/24 race, which went to the final day, was a good example of how little separates the top three.',
        bullets: [
          'Squad depth matters more when games come every three days.',
          'Set pieces can be worth several points across a season.',
          'The team that handles pressure best usually wins the tightest races.'
        ]
      },
      {
        heading: 'What it means for new fans',
        body:
          'You do not need to memorise the table in August. Watch how the top teams handle injuries, European fixtures and bad results. The title race is a long test of adaptation. By spring, the team with the fewest weaknesses usually wins.',
        bullets: [
          'A team can look unstoppable in autumn and still fall away.',
          'The fixture list becomes more important as the season goes on.',
          'The best indicator of a champion is consistency, not one big win.'
        ]
      }
    ],
    takeaways: [
      'The modern title benchmark is close to 90 points.',
      'City, Arsenal and Liverpool have built successful teams in different ways.',
      'Squad depth, set pieces and pressure management decide tight races.'
    ],
    relatedProfileSlugs: ['erling-haaland', 'bukayo-saka', 'mohamed-salah', 'mikel-arteta', 'pep-guardiola', 'arne-slot'],
    relatedGuideSlug: 'last-three-seasons'
  },
  {
    id: 'era-story-pressing',
    slug: 'pressing-inverted-full-backs',
    title: 'Pressing, inverted full-backs and the modern midfield',
    category: 'Tactics',
    summary:
      'A plain-English guide to the tactical ideas you will hear on every broadcast: the high press, the inverted full-back and the midfield box.',
    readTime: 7,
    publishedAt: daysAgo(6),
    featured: true,
    sortOrder: 2,
    sections: [
      {
        heading: 'The high press',
        body:
          'Pressing means closing down the opponent to win the ball back quickly. A high press happens near the opponent’s goal, not near your own. The idea is to force a mistake in a dangerous area or stop the opponent from playing out from the back. It only works if the whole team moves together.',
        bullets: [
          'The striker often starts the press by curving his run to block one side of the pitch.',
          'The wingers press the full-backs, while the midfield covers the central passing lane.',
          'If one player arrives late, the opponent can pass through the gap.'
        ]
      },
      {
        heading: 'The inverted full-back',
        body:
          'A traditional full-back stays wide and overlaps the winger. An inverted full-back moves into midfield when the team has the ball. This creates an extra passing option in the centre and helps the team control counter-attacks. It also asks a lot of the player: they need to be comfortable in tight spaces.',
        bullets: [
          'The inverted full-back can create a midfield box with the two central midfielders.',
          'It allows the wingers to stay high and wide.',
          'The trade-off is that the team needs a centre-back or midfielder to cover the vacated wide area.'
        ]
      },
      {
        heading: 'The midfield box',
        body:
          'A midfield box uses four players in a rough square: two deeper midfielders and two advanced ones. The shape creates passing angles and makes it hard for the opponent to mark everyone. You will see variations of this at City, Arsenal and other top clubs.',
        bullets: [
          'The deeper midfielders link defence and attack.',
          'The advanced midfielders find space between the opponent’s lines.',
          'The shape can switch quickly from attack to defence.'
        ]
      },
      {
        heading: 'Why it matters to viewers',
        body:
          'These ideas explain why a team can dominate the ball and still lose. Control without penetration is not enough. They also explain why certain players are so valuable: a full-back who can play midfield, a striker who can press, or a midfielder who can receive the ball under pressure.',
        bullets: [
          'Watch the shape, not just the ball.',
          'Notice which team wins the ball back higher up the pitch.',
          'The best tactical teams change their shape during the game, not just before it.'
        ]
      }
    ],
    takeaways: [
      'Pressing is a coordinated team action, not individual running.',
      'Inverted full-backs add midfield control but create wide spaces to cover.',
      'The midfield box is a common way to create passing angles and overloads.'
    ],
    relatedProfileSlugs: ['rodri', 'declan-rice', 'pep-guardiola', 'mikel-arteta'],
    relatedGuideSlug: 'modern-era-primer'
  },
  {
    id: 'era-story-psr',
    slug: 'psr-and-squad-building',
    title: 'PSR, transfers and the new squad-building',
    category: 'Money',
    summary:
      'Profit and Sustainability Rules changed how clubs buy, sell and balance their books. Here is what the rules mean for the teams you watch.',
    readTime: 6,
    publishedAt: daysAgo(9),
    featured: true,
    sortOrder: 3,
    sections: [
      {
        heading: 'What PSR is trying to do',
        body:
          'Profit and Sustainability Rules are the Premier League’s financial rules. In simple terms, clubs are allowed to lose a limited amount of money over a rolling period. The aim is to stop clubs spending beyond their means and to protect the league’s long-term health. The rules are complex, and clubs employ teams of accountants to work within them.',
        bullets: [
          'The rules are based on a club’s losses over several seasons.',
          'Spending on infrastructure, academies and women’s football is treated differently from transfer spending.',
          'Clubs can be punished with fines or points deductions if they breach the rules.'
        ]
      },
      {
        heading: 'Why academy sales matter',
        body:
          'When a club sells a player it developed, the entire transfer fee counts as profit in the accounts. That is why academy graduates are so valuable under PSR. Selling one homegrown player can create the financial room to sign several others. It also explains some transfers that look strange to fans.',
        bullets: [
          'A homegrown sale is “pure profit” in accounting terms.',
          'Buying a player spreads the cost across the length of their contract.',
          'Clubs plan transfer windows around the rules, not just the squad’s needs.'
        ]
      },
      {
        heading: 'The new recruitment game',
        body:
          'PSR has made smart recruitment more important. Clubs look for undervalued players, younger players with resale value and academy graduates who can fill squad roles. The biggest spenders still have an advantage, but the rules have narrowed the gap between clever clubs and rich ones.',
        bullets: [
          'Data analysis helps clubs find players before their price rises.',
          'Loans and free transfers are used to manage costs.',
          'Squad depth is built through the academy as well as the transfer market.'
        ]
      },
      {
        heading: 'What it means for fans',
        body:
          'You will hear a lot about “PSR”, “amortisation” and “pure profit” during transfer windows. You do not need to understand every accounting detail. The key point is that transfers are now a financial puzzle as well as a football decision.',
        bullets: [
          'A club may sell a popular player to balance the books.',
          'A big signing can be spread across several years in the accounts.',
          'Points deductions are a real consequence, not just a theoretical one.'
        ]
      }
    ],
    takeaways: [
      'PSR limits how much clubs can lose over a rolling period.',
      'Academy sales count as pure profit, which makes them strategically valuable.',
      'Recruitment is now a balance of football need and financial rules.'
    ],
    relatedProfileSlugs: ['cole-palmer', 'declan-rice', 'mikel-arteta'],
    relatedGuideSlug: 'transfer-windows'
  },
  {
    id: 'era-story-super-sub',
    slug: 'the-super-sub-era',
    title: 'The super-sub era: five changes and deeper squads',
    category: 'Matchday',
    summary:
      'Five substitutions changed how managers plan a match. The bench is now a tactical tool, not just a place for injured players.',
    readTime: 5,
    publishedAt: daysAgo(12),
    featured: false,
    sortOrder: 4,
    sections: [
      {
        heading: 'From three to five',
        body:
          'The Premier League moved to five substitutions per match in 2022/23. The change was designed to protect player welfare in a crowded calendar. It also gave managers more chances to change a game from the bench.',
        bullets: [
          'Managers can now make five changes in three separate windows.',
          'The rule benefits teams with deep squads.',
          'It has made the final 30 minutes more tactical.'
        ]
      },
      {
        heading: 'The bench as a weapon',
        body:
          'A strong bench can change the tempo, protect a lead or chase a goal. Managers often bring on a fresh winger to attack a tired full-back, or a defensive midfielder to close out a game. The best squads have options that would start for other teams.',
        bullets: [
          'Fresh legs against tired defenders are a proven advantage.',
          'Substitutes can change the formation without a full tactical reset.',
          'Squad players need to stay ready even when they are not starting.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Watch the bench in the second half. Which manager makes the first attacking change? Does the substitution change the shape? A good substitution can be worth as much as a good starting XI.',
        bullets: [
          'The 60th minute is a common point for the first tactical change.',
          'A substitution can signal whether a team is protecting a lead or chasing a goal.',
          'Injury time is longer now, so late substitutes have more time to make an impact.'
        ]
      }
    ],
    takeaways: [
      'Five substitutions made squad depth more important.',
      'The bench is now a tactical tool for changing games.',
      'Watch the second-half changes to understand a manager’s plan.'
    ],
    relatedProfileSlugs: ['kevin-de-bruyne', 'cole-palmer', 'pep-guardiola'],
    relatedGuideSlug: 'matchday-basics'
  },
  {
    id: 'era-story-set-pieces',
    slug: 'set-pieces-are-back',
    title: 'Set pieces are back — and they are winning games',
    category: 'Tactics',
    summary:
      'Corners, free kicks and long throws are no longer afterthoughts. Specialist coaches have turned dead balls into a serious source of points.',
    readTime: 5,
    publishedAt: daysAgo(15),
    featured: false,
    sortOrder: 5,
    sections: [
      {
        heading: 'The specialist coach',
        body:
          'Many clubs now employ a dedicated set-piece coach. Their job is to study opponents, design routines and drill the details: who blocks, who runs, where the delivery goes and what happens if the first ball is cleared. It is a small edge that can be worth several points a season.',
        bullets: [
          'Set-piece coaches work on both attacking and defensive routines.',
          'Clubs use video and data to find weaknesses in the opponent’s marking.',
          'The best routines look simple but are carefully timed.'
        ]
      },
      {
        heading: 'Why Arsenal became so dangerous',
        body:
          'Arsenal’s set-piece improvement under Mikel Arteta was one of the clearest tactical stories of the era. Their corners are rehearsed, their blockers are organised and their delivery is precise. Opponents started to defend differently against them, which created space for other attacks.',
        bullets: [
          'Near-post corners and back-post runners are common Arsenal patterns.',
          'The team uses blocks to free a target player.',
          'Declan Rice’s delivery is a key part of the threat.'
        ]
      },
      {
        heading: 'The long throw returns',
        body:
          'The long throw has made a comeback as a deliberate weapon, not a desperation move. A throw-in near the penalty area can be treated like a corner: players crowd the box, blockers set screens and the delivery is aimed at a specific target. Defenders have to prepare for it like any other set piece.',
        bullets: [
          'A long throw can create chaos in the six-yard box.',
          'Teams practise defensive heading and second-ball reactions.',
          'The tactic is especially useful for underdogs against bigger clubs.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'When a corner is awarded, watch the players before the kick. Who is blocking? Who is making the decoy run? Who is the real target? Set pieces are mini-plays, and the best teams rehearse them until they look effortless.',
        bullets: [
          'Look for the player who starts far from the box and arrives late.',
          'Notice how the goalkeeper is protected or crowded.',
          'Second balls after a clearance are often where the real chance comes from.'
        ]
      }
    ],
    takeaways: [
      'Specialist set-piece coaching is now common in the Premier League.',
      'Arsenal’s corners are a good example of rehearsal turning into points.',
      'Long throws are back as a deliberate attacking tactic.'
    ],
    relatedProfileSlugs: ['declan-rice', 'bukayo-saka', 'mikel-arteta'],
    relatedGuideSlug: 'modern-era-primer'
  },
  {
    id: 'era-story-new-generation',
    slug: 'the-new-generation',
    title: 'The new generation: Saka, Palmer, Isak and the next wave',
    category: 'Players',
    summary:
      'The league’s young stars are not just prospects anymore. They are the main characters of the title race, the transfer market and the England team.',
    readTime: 6,
    publishedAt: daysAgo(18),
    featured: true,
    sortOrder: 6,
    sections: [
      {
        heading: 'From prospects to protagonists',
        body:
          'A new generation of players has moved from “one for the future” to “one of the first names on the team sheet”. Bukayo Saka, Cole Palmer, Alexander Isak and Anthony Gordon are all examples. They are not just talented; they are productive in the biggest games.',
        bullets: [
          'Young players are getting more first-team minutes than ever.',
          'Academies are producing technically complete players ready for senior football.',
          'Clubs are more willing to build around young talent rather than wait.'
        ]
      },
      {
        heading: 'The academy pathway',
        body:
          'Saka’s rise at Arsenal is the clearest example of an academy player becoming a title-chasing team’s creative centre. Palmer’s move from City to Chelsea shows the other route: a talented young player leaving a deep squad to find regular starts. Both paths can work.',
        bullets: [
          'Academy players cost less and count as pure profit if sold.',
          'Regular minutes are essential for development.',
          'Clubs now plan loan moves and squad roles more carefully for young players.'
        ]
      },
      {
        heading: 'The new expectations',
        body:
          'Young players are expected to contribute immediately. The pressure is intense, and the media cycle is relentless. The best young players combine talent with durability, professionalism and the ability to handle criticism.',
        bullets: [
          'Consistency is the hardest part of becoming a top player.',
          'Injury management is a major part of a young player’s development.',
          'The best clubs protect young players from too much pressure.'
        ]
      },
      {
        heading: 'What to watch',
        body:
          'Pick one young player and follow them for a full match. Watch their movement off the ball, their decisions in the final third and their reaction when they lose possession. That is a better guide than a highlight reel.',
        bullets: [
          'Young players often improve fastest in the details, not the spectacular moments.',
          'Look at how often they scan before receiving the ball.',
          'The best sign of progress is consistency across different opponents.'
        ]
      }
    ],
    takeaways: [
      'The league’s young stars are now central to the biggest stories.',
      'Academy development and smart transfers both produce top young players.',
      'Consistency and durability separate good prospects from great players.'
    ],
    relatedProfileSlugs: ['bukayo-saka', 'cole-palmer', 'alexander-isak', 'anthony-gordon'],
    relatedGuideSlug: 'players-to-know'
  },
  {
    id: 'era-story-week',
    slug: 'what-a-premier-league-week-looks-like',
    title: 'What a Premier League week actually looks like',
    category: 'Culture',
    summary:
      'From Friday press conferences to Sunday analysis, a modern Premier League week is a constant cycle of matches, travel and media.',
    readTime: 5,
    publishedAt: daysAgo(21),
    featured: false,
    sortOrder: 7,
    sections: [
      {
        heading: 'The rhythm',
        body:
          'A typical week has a match, recovery, training, media duties and another match. When a team is in Europe, the schedule gets tighter: Thursday night games can leave only two days before a league fixture. Managers spend much of their time managing minutes and freshness.',
        bullets: [
          'Saturday 3pm is still the traditional kick-off time, but broadcast games are spread across the weekend.',
          'European fixtures add travel and midweek games.',
          'The fixture list is one of the biggest factors in a season.'
        ]
      },
      {
        heading: 'The media cycle',
        body:
          'Press conferences, interviews and social media create a constant stream of stories. A throwaway comment can become a headline. For new fans, it helps to separate the football from the noise: most of it is context, not evidence.',
        bullets: [
          'Managers speak to the media before and after every match.',
          'Transfer rumours are especially intense in January and summer.',
          'Club accounts and official channels are the most reliable sources.'
        ]
      },
      {
        heading: 'The fan week',
        body:
          'Supporters follow the team through podcasts, highlight shows, fantasy football and group chats. The match is the centre of the week, but the conversation around it lasts all week. That shared rhythm is a big part of why football is so addictive.',
        bullets: [
          'Fantasy Premier League adds another layer of interest to every game.',
          'Podcasts and analysis shows can help new fans learn the language.',
          'The best way to learn is still to watch full matches, not just clips.'
        ]
      },
      {
        heading: 'How to build a habit',
        body:
          'You do not need to watch every game. Pick one or two matches a week, follow one club and check the table once a week. Over a season, that habit will teach you more than trying to consume everything at once.',
        bullets: [
          'Choose a club and follow its fixtures.',
          'Watch one full match a week rather than endless highlights.',
          'Use the table to understand the stakes, not just the scores.'
        ]
      }
    ],
    takeaways: [
      'The modern week is shaped by fixture congestion and media demands.',
      'European games add travel and midweek pressure.',
      'A simple weekly habit is the best way for a new fan to learn.'
    ],
    relatedProfileSlugs: ['mohamed-salah', 'bukayo-saka', 'mikel-arteta'],
    relatedGuideSlug: 'matchday-basics'
  }
];

export const eraSeasons = [
  {
    id: 'era-season-2022-23',
    slug: '2022-23',
    label: '2022/23',
    status: 'Completed',
    champion: 'Manchester City',
    championClubId: 'man-city',
    runnerUp: 'Arsenal',
    runnerUpClubId: 'arsenal',
    topScorer: 'Erling Haaland',
    topScorerDetail: '36 goals',
    points: 89,
    summary:
      'City won a third consecutive title and completed the treble, while Arsenal’s young side announced itself as a genuine challenger.',
    featured: true,
    sortOrder: 1,
    sections: [
      {
        heading: 'The Haaland effect',
        body:
          'Erling Haaland’s first season in England produced 36 league goals. City did not just add a striker; they added a player who could turn dominance into a decisive scoreline. The team still controlled games, but now had a ruthless finish at the end of the move.',
        bullets: [
          'Haaland set a record for goals in a 38-game Premier League season.',
          'City could play through teams or go direct to the striker.',
          'The attack became more varied without losing its control.'
        ]
      },
      {
        heading: 'Arsenal’s surge',
        body:
          'Arsenal led the table for much of the season and pushed City further than most expected. Their young squad played attacking, organised football, with Bukayo Saka and Martin Ødegaard central to the challenge. A late-season dip cost them the title, but the season changed expectations.',
        bullets: [
          'Arsenal finished second with 84 points.',
          'The team’s style was built on possession, pressing and set pieces.',
          'The experience of a title race became the foundation for future challenges.'
        ]
      },
      {
        heading: 'The treble',
        body:
          'City won the league, the FA Cup and the Champions League. The Champions League final was a tight, tense game decided by Rodri’s late goal. It was the trophy the club had been chasing for years, and it completed the most successful season in their history.',
        bullets: [
          'City beat Inter Milan in the Champions League final.',
          'Rodri scored the winning goal.',
          'The treble cemented Guardiola’s legacy at the club.'
        ]
      }
    ],
    moments: [
      { label: 'August', text: 'Haaland scores twice on his Premier League debut.' },
      { label: 'April', text: 'Arsenal’s lead slips as City find their rhythm.' },
      { label: 'June', text: 'Rodri wins the Champions League final.' }
    ],
    table: [
      { position: 1, clubId: 'man-city', points: 89 },
      { position: 2, clubId: 'arsenal', points: 84 },
      { position: 3, clubId: 'man-united', points: 75 },
      { position: 4, clubId: 'newcastle', points: 71 },
      { position: 5, clubId: 'liverpool', points: 67 }
    ],
    takeaways: [
      'Haaland’s goals turned City’s control into a treble.',
      'Arsenal’s young squad proved it could challenge for a title.',
      'The Champions League win completed City’s project.'
    ],
    relatedProfileSlugs: ['erling-haaland', 'rodri', 'bukayo-saka', 'pep-guardiola', 'mikel-arteta'],
    relatedGuideSlug: 'last-three-seasons'
  },
  {
    id: 'era-season-2023-24',
    slug: '2023-24',
    label: '2023/24',
    status: 'Completed',
    champion: 'Manchester City',
    championClubId: 'man-city',
    runnerUp: 'Arsenal',
    runnerUpClubId: 'arsenal',
    topScorer: 'Erling Haaland',
    topScorerDetail: '27 goals',
    points: 91,
    summary:
      'A three-way title race ended with City’s fourth consecutive title and Arsenal again finishing second.',
    featured: true,
    sortOrder: 2,
    sections: [
      {
        heading: 'The three-way race',
        body:
          'City, Arsenal and Liverpool all spent time at the top. The title was decided in the final weeks, with City’s experience and squad depth proving decisive. Arsenal pushed them all the way, while Liverpool’s challenge faded late in the season.',
        bullets: [
          'City finished on 91 points.',
          'Arsenal finished on 89, their highest total under Arteta.',
          'Liverpool finished third on 82.'
        ]
      },
      {
        heading: 'Four in a row',
        body:
          'City became the first club to win four consecutive Premier League titles. It was a remarkable achievement of consistency in a league designed to be competitive. The squad had to cope with injuries, fatigue and the pressure of being the team everyone wanted to beat.',
        bullets: [
          'The title was built on a strong run in the second half of the season.',
          'City’s squad depth allowed them to rotate without losing quality.',
          'The achievement underlined the scale of Guardiola’s project.'
        ]
      },
      {
        heading: 'Arsenal’s near miss',
        body:
          'Arsenal improved on the previous season and took the race to the final day. The team was more mature, more resilient and better equipped to handle pressure. The gap to City was small, but closing it would require another step forward.',
        bullets: [
          'Arsenal’s defensive record improved significantly.',
          'Declan Rice’s arrival added control and leadership in midfield.',
          'The team’s set-piece threat became a consistent source of goals.'
        ]
      }
    ],
    moments: [
      { label: 'Autumn', text: 'Arsenal and City trade places at the top.' },
      { label: 'Spring', text: 'Liverpool’s challenge fades after a demanding run.' },
      { label: 'May', text: 'City beat West Ham to seal a fourth straight title.' }
    ],
    table: [
      { position: 1, clubId: 'man-city', points: 91 },
      { position: 2, clubId: 'arsenal', points: 89 },
      { position: 3, clubId: 'liverpool', points: 82 },
      { position: 4, clubId: 'aston-villa', points: 68 },
      { position: 5, clubId: 'tottenham', points: 66 }
    ],
    takeaways: [
      'City’s fourth consecutive title was a historic achievement.',
      'Arsenal’s 89 points showed real progress.',
      'The title race was decided by squad depth and experience.'
    ],
    relatedProfileSlugs: ['erling-haaland', 'declan-rice', 'mikel-arteta', 'pep-guardiola'],
    relatedGuideSlug: 'last-three-seasons'
  },
  {
    id: 'era-season-2024-25',
    slug: '2024-25',
    label: '2024/25',
    status: 'Completed',
    champion: 'Liverpool',
    championClubId: 'liverpool',
    runnerUp: 'Arsenal',
    runnerUpClubId: 'arsenal',
    topScorer: 'Mohamed Salah',
    topScorerDetail: '29 goals',
    points: 84,
    summary:
      'Arne Slot’s first season ended with Liverpool as champions, while the cup competitions produced a spread of different winners.',
    featured: true,
    sortOrder: 3,
    sections: [
      {
        heading: 'A new era at Liverpool',
        body:
          'Replacing Jürgen Klopp was the biggest managerial challenge in the league. Arne Slot kept the pressing identity but added more control and a calmer structure. Liverpool stayed consistent through the season and finished clear at the top.',
        bullets: [
          'Slot won the title in his first season in charge.',
          'Mohamed Salah scored 29 league goals.',
          'The team’s defensive structure improved under the new coach.'
        ]
      },
      {
        heading: 'City’s dip',
        body:
          'City did not reach their usual standards, finishing third. Injuries, fatigue and the effort of sustaining dominance over several seasons caught up with them. The season showed that even the best squads are not immune to a difficult year.',
        bullets: [
          'City finished on 71 points.',
          'The title race was effectively over before the final weeks.',
          'The club faced questions about how to refresh the squad.'
        ]
      },
      {
        heading: 'Cup winners everywhere',
        body:
          'The cup competitions gave the season a different shape. Crystal Palace won the FA Cup, Newcastle won the EFL Cup, Tottenham won the Europa League and Chelsea won the Conference League. It was a reminder that success is not only measured by the league table.',
        bullets: [
          'Cup wins can transform a season for a mid-table club.',
          'European competitions offer a route to silverware and Champions League football.',
          'The spread of winners made the season feel more open.'
        ]
      }
    ],
    moments: [
      { label: 'August', text: 'Slot’s first competitive games show a calmer Liverpool.' },
      { label: 'March', text: 'Liverpool take control of the title race.' },
      { label: 'May', text: 'Liverpool are confirmed as champions.' }
    ],
    table: [
      { position: 1, clubId: 'liverpool', points: 84 },
      { position: 2, clubId: 'arsenal', points: 74 },
      { position: 3, clubId: 'man-city', points: 71 },
      { position: 4, clubId: 'chelsea', points: 69 },
      { position: 5, clubId: 'newcastle', points: 66 }
    ],
    takeaways: [
      'Slot’s first season delivered a title without a complete rebuild.',
      'Salah remained the league’s most reliable goalscorer.',
      'The cup competitions produced a wide spread of winners.'
    ],
    relatedProfileSlugs: ['mohamed-salah', 'virgil-van-dijk', 'arne-slot', 'alexander-isak', 'cole-palmer'],
    relatedGuideSlug: 'last-three-seasons'
  },
  {
    id: 'era-season-2025-26',
    slug: '2025-26',
    label: '2025/26',
    status: 'In progress — demo data',
    champion: 'Arsenal (demo leaders)',
    championClubId: 'arsenal',
    runnerUp: 'Liverpool (demo)',
    runnerUpClubId: 'liverpool',
    topScorer: 'Demo season',
    topScorerDetail: 'Seeded data',
    points: 29,
    summary:
      'The current PitchPass demo season. Arsenal lead after 12 matchdays, with Liverpool and Manchester City close behind. The table is seeded demo data, not a live feed.',
    featured: true,
    sortOrder: 4,
    sections: [
      {
        heading: 'The demo table',
        body:
          'Arsenal lead the seeded table with 29 points from 12 matches, ahead of Liverpool on 27 and Manchester City on 26. Chelsea and Tottenham complete the top five. The table is designed to make the site’s live hub, club pages and standings feel coherent.',
        bullets: [
          'Arsenal: 29 points, +15 goal difference.',
          'Liverpool: 27 points, +14 goal difference.',
          'Manchester City: 26 points, +12 goal difference.'
        ]
      },
      {
        heading: 'What to watch in a real season',
        body:
          'If this were a live season, the key questions would be squad depth, European fixture congestion and whether the chasing pack can keep pace. The top three are separated by three points, which is nothing at this stage. The title race would still be wide open.',
        bullets: [
          'A busy December schedule often reshapes the table.',
          'Injuries to key players can change a title race quickly.',
          'The January transfer window can give a challenger a second wind.'
        ]
      },
      {
        heading: 'A note on the data',
        body:
          'PitchPass is an educational prototype. The 2025/26 season, including the table, form, fixtures and simulated live match, is seeded demo content. Use it to learn how the league works, then check official sources for real results.',
        bullets: [
          'The live match clock is simulated by the API.',
          'The table is not updated from a real provider.',
          'Club badges and player photos are credited on the credits page.'
        ]
      }
    ],
    moments: [
      { label: 'Matchday 1', text: 'The demo season begins with a full fixture list.' },
      { label: 'Matchday 12', text: 'Arsenal lead the seeded table by two points.' },
      { label: 'Live now', text: 'Liverpool vs Manchester City is simulated on the Live Hub.' }
    ],
    table: [
      { position: 1, clubId: 'arsenal', points: 29 },
      { position: 2, clubId: 'liverpool', points: 27 },
      { position: 3, clubId: 'man-city', points: 26 },
      { position: 4, clubId: 'chelsea', points: 24 },
      { position: 5, clubId: 'tottenham', points: 23 },
      { position: 6, clubId: 'newcastle', points: 22 }
    ],
    takeaways: [
      'Arsenal lead the 2025/26 demo table after 12 matchdays.',
      'The top three are separated by only three points.',
      'The season is demo data, not a live feed.'
    ],
    relatedProfileSlugs: ['bukayo-saka', 'mohamed-salah', 'erling-haaland', 'mikel-arteta', 'arne-slot'],
    relatedGuideSlug: 'reading-a-season'
  }
];
