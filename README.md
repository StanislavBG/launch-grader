# LaunchGrader

Standalone go-to-market readiness audit. Static-path app on `bilko.run/projects/launch-grader/`.

Extracted from `~/Projects/Bilko/` as part of the host-platform extraction plan (migration #3).

## Stack

- React 18 + Vite 6 + Tailwind CSS v4
- Clerk (bundled for same-origin auth on `bilko.run`)
- Calls `https://bilko.run/api/demos/launch-grader` (host-side endpoint stays in `~/Projects/Bilko/server/routes/tools/launch-grader.ts`)

## Build

```bash
pnpm install
pnpm build       # → dist/
pnpm sync        # copies dist into ~/Projects/Bilko/public/projects/launch-grader/
```

## How it talks to the host

- Auth: Clerk session is shared via `clerk.bilko.run` (same root domain). The standalone uses `useAuth().getToken()` and sends it as `Authorization: Bearer <jwt>`.
- API: hits `https://bilko.run/api/demos/launch-grader` (POST). In production both standalone and host live on `bilko.run`, so it's same-origin.
- Analytics: `kit.tsx#track()` posts to `/api/analytics/event` — same wire format as the host's `usePageView.track()`.

## Theme

Hero gradient + glow are teal (matches the host's `tools.ts` theme metadata). Page body palette is warm + fire — same as the rest of bilko.run.
