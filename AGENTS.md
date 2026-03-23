# AGENTS.md

## Cursor Cloud specific instructions

This is the **Easy Health** corporate website — a single-service Node.js/TypeScript app (React 18 + Vite 6 + Express 5). No database, Docker, or external services are required.

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Lint (type-check) | `npm run lint` |
| Build | `npm run build` |
| Dev server | `npm run dev` |
| Preview prod build | `npm run preview` |

- The dev server runs on **port 3000** (`http://localhost:3000`).
- `npm run dev` starts Vite directly (SPA mode). All page data is hardcoded in TypeScript files under `data/` and in component files — there is no runtime API dependency for the frontend.
- `server.ts` contains an Express server with Vite middleware and `/api/news` endpoints, but the frontend does not call these APIs. Running `npm run dev` (Vite only) is sufficient for full development.
- Lint is `tsc --noEmit` — there is no ESLint configured.
- There are **no automated tests** in this repo (no test framework or test files).
- Optional env vars (`GEMINI_API_KEY`, `GA4_MEASUREMENT_ID`, `GA4_API_SECRET`) can be set in `.env.local`; the site works fully without them.
