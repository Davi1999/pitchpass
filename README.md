# PitchPass

**The Premier League, minus the confusion.**

PitchPass is a beginner's guide to English Premier League football. It helps new fans learn the rules, meet all 20 clubs, follow a (demo) matchday, and find a club that feels like theirs.

This repository is an early working prototype: a React single-page app, an Express API, and a zero-config SQLite database seeded with demo content. It is built to be iterated on.

## What is in the prototype

- **Home dashboard** — a guided first visit, featured guides, a live match card, upcoming fixtures, a table snapshot and club-finder call to action.
- **Learn library** — 11 plain-English guides covering the league format, offside, VAR, cards, matchday basics, transfers, positions, cups, rivalries and the football glossary.
- **Guide reader** — long-form article layout, key terms, an in-page table of contents, reading progress and a "mark as read" state saved in `localStorage`.
- **Club directory** — all 20 clubs with original monogram badges, search, club DNA and a detailed club page with history, honours, rivalry, fixtures and related guides.
- **Club finder** — a five-question matching flow that scores all 20 clubs and returns a top three with reasons. You can save a club as "my club" locally.
- **Live Hub** — fixtures, results, a full league table and a simulated live match whose clock advances from 34 minutes while the API is running. The page polls every 20 seconds.
- **Quiz** — 10 questions with server-side answer checking, instant explanations, a personal best saved in `localStorage`, and a full answer review.
- **Responsive design** — custom design system, local variable fonts, SVG glyphs instead of emoji, keyboard focus states and reduced-motion support.

> **Demo data notice:** scores, fixtures, the table and live commentary are seeded fixtures, not a live feed. Club badges are original monograms, not official crests. PitchPass is not affiliated with the Premier League or any club.

## Prerequisites

- **Node.js 22.13+** (Node 26 is used in development)
- npm 10+

There is **no PostgreSQL or Docker requirement** for the prototype. The backend uses Node's built-in `node:sqlite` driver and creates a local database on first run. The schema and repository layer are deliberately isolated so a PostgreSQL adapter can be added later.

## Quick start

```bash
git clone https://github.com/Davi1999/pitchpass.git
cd pitchpass
npm install
npm run dev
```

Open **http://localhost:5173**. The API runs on **http://localhost:4000** and Vite proxies `/api` requests to it.

The first API start creates `backend/data/pitchpass.sqlite` and seeds the demo content automatically.

### Production-style run

```bash
npm run build
npm start
```

The Express server serves the built frontend at **http://localhost:4000** when `frontend/dist` exists.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs the API and Vite dev server together with `concurrently`. |
| `npm run dev:api` | Runs the Express API with `node --watch`. |
| `npm run dev:web` | Runs Vite only. |
| `npm run build` | Type-checks and builds the frontend into `frontend/dist`. |
| `npm start` | Starts the API; also serves `frontend/dist` if present. |
| `npm run seed` | Reseeds the demo database from the data files. |
| `npm test` | Runs the backend API tests with `node:test`. |

## Project structure

```text
pitchpass/
├── backend/
│   ├── src/
│   │   ├── data/            # Clubs, guides, quiz, fixtures, table, news
│   │   ├── db/              # SQLite setup, schema, seed, row mappers
│   │   ├── routes/          # Express route modules
│   │   ├── services/        # Club finder scoring + demo live clock
│   │   ├── app.js           # Express app factory
│   │   ├── repositories.js  # Query + response shaping layer
│   │   └── server.js        # API entry point
│   └── test/                # API integration tests
├── frontend/
│   └── src/
│       ├── api/             # Typed fetch client
│       ├── components/      # Layout, cards, crests, tables, states
│       ├── hooks/           # useApi data-loading hook
│       ├── lib/             # Formatting + localStorage progress helpers
│       ├── pages/           # Home, Learn, Clubs, Live, Quiz, Finder
│       ├── styles/          # Design tokens + all component styles
│       ├── types.ts         # Shared API response types
│       └── App.tsx          # Routes
├── package.json             # npm workspaces + root scripts
└── README.md
```

## API

All endpoints are under `/api`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/health` | API status and demo database counts. |
| `GET` | `/api/home` | Aggregated landing-page payload. |
| `GET` | `/api/clubs?search=` | Club directory, optionally filtered. |
| `GET` | `/api/clubs/:id` | Club detail, table position, fixtures and related guides. |
| `GET` | `/api/clubs/find/questions` | Five club-finder questions. |
| `POST` | `/api/clubs/find` | Rank clubs from `{ answers: { mood, place, story, football, values } }`. |
| `GET` | `/api/guides?category=&search=` | Guide summaries and category counts. |
| `GET` | `/api/guides/:slug` | Full guide content. |
| `GET` | `/api/quiz?limit=10` | Quiz questions **without** answers. |
| `POST` | `/api/quiz/check` | Check one answer with `{ questionId, answerIndex }`. |
| `GET` | `/api/matches?status=&team=&limit=` | Fixtures/results, including the simulated live fixture. |
| `GET` | `/api/standings` | Full 20-club table with form. |
| `GET` | `/api/news?limit=` | Demo editorial cards. |

Quiz answers are never sent to the client before submission. Answer checking happens in the API.

## Demo live match

The Liverpool vs Manchester City fixture is not real. The API starts it at **34 minutes** when the server boots and advances one simulated minute per real minute. Goal events are counted as their minute becomes visible, so the score changes over time:

- 12' Liverpool goal
- 34' Manchester City goal
- 52' Liverpool goal
- 76' Manchester City goal

Restarting the API resets the demo clock. After 90 simulated minutes the fixture becomes full time and the Live Hub falls back to the latest result.

## Environment variables

Copy `backend/.env.example` to `backend/.env` if you want to override defaults:

```bash
PORT=4000
DATABASE_PATH=./data/pitchpass.sqlite
CORS_ORIGIN=http://localhost:5173
```

`DATABASE_PATH` is resolved relative to `backend/`. `CORS_ORIGIN` accepts a comma-separated list.

## Data and storage

- The SQLite database is created at `backend/data/pitchpass.sqlite` (ignored by git).
- The seed runs automatically when the data version changes.
- `npm run seed` forces a reset of all demo content.
- User state (guides read, quiz best, saved club) lives only in the browser's `localStorage` for now.
- The club-finder weights live in `backend/src/data/discovery.js`; club traits live in `backend/src/data/clubs.js`.

## Next steps

The prototype is intentionally shaped for iteration. Useful next moves:

1. **Real football data** — add a provider adapter behind `repositories.js` for fixtures, results, table and live events, with a cache and API-key configuration.
2. **PostgreSQL** — swap the SQLite driver for `pg` behind the same repository interface, with migrations.
3. **Accounts and sync** — persist favourite clubs, reading progress and quiz history server-side.
4. **More club content** — supporter stories, stadium guides, player primers and newcomer FAQs.
5. **Match detail pages** — event timelines, lineups, stats and simple tactical explainers.
6. **Editorial tooling** — a lightweight admin flow for guides and news.
7. **Accessibility and performance passes** — automated axe checks, route-level code splitting and image/font optimisation.

## Testing

```bash
npm test
```

The API test suite covers health, clubs, search, club detail, guides, quiz answer secrecy and validation, club-finder ranking, standings, fixtures and the home payload.

## License

Prototype for learning and iteration. Club names and competition names belong to their respective owners. All badges in this repository are original monogram placeholders.
