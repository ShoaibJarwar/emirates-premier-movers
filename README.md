# Emirates Premier Movers

Marketing website for a moving & packing company serving Sharjah, Ajman, Dubai and the wider UAE. Built with Next.js 16 (App Router, Turbopack), Tailwind CSS v4, Framer Motion, and a Postgres backend (Drizzle ORM) for capturing quote/contact inquiries.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Database:** PostgreSQL via `drizzle-orm` + `pg`
- **Content:** All copy, services, areas and blog posts are typed data in `src/lib/site-data.ts` — no CMS

## Getting started

```bash
npm install
cp .env.example .env
# edit .env with your own DATABASE_URL etc.
npm run dev
```

The app runs at `http://localhost:3000`.

### Required environment variables

See `.env.example` for the full list. At minimum you need:

- `DATABASE_URL` — a reachable Postgres connection string
- `NEXT_PUBLIC_SITE_URL` — the canonical URL used in metadata, sitemap.xml and JSON-LD

Email (Resend or a webhook) and WhatsApp (Cloud API or a webhook) notification variables are optional. If they're not set, submitted inquiries are still saved to the `inquiries` table, they just won't trigger an email/WhatsApp alert.

### Database

The `inquiries` table is created automatically on first API call (see `ensureInquiriesTable` in `src/app/api/inquiries/route.ts`), so no manual migration is required to get started. For a more explicit workflow, `drizzle-kit` is included:

```bash
npx drizzle-kit push   # sync src/db/schema.ts to the database in drizzle.config.json
```

Update `drizzle.config.json` (or better, wire it to read `process.env.DATABASE_URL`) before running this against a non-local database.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Project structure

```
src/app/            Route segments (pages, layout, API routes, sitemap/robots)
src/components/      Shared UI: Navbar/Footer/Hero/JsonLd (site.tsx), interactive client components (interactive.tsx)
src/db/              Drizzle schema + connection pool
src/lib/site-data.ts All copy: services, areas, blog posts, company info
src/lib/seo.ts       Metadata + JSON-LD (schema.org) helpers
```

## Deployment notes

- **Never commit or zip `node_modules/` or `.next/`.** They're excluded via `.gitignore`. Native dependencies (e.g. `lightningcss`, used by Tailwind) are platform-specific — always run a fresh `npm install` on the target machine/CI rather than copying an existing `node_modules` folder across platforms.
- **Fonts** are loaded via `next/font/google` (Inter, Playfair Display) in `src/app/layout.tsx`, which fetches from `fonts.googleapis.com` at build time. This requires outbound network access during `npm run build`; if you deploy from a network-restricted CI runner, either allow that domain or switch to self-hosted fonts with `next/font/local`.
- **Favicon / social share image** are generated dynamically from `src/app/icon.tsx`, `apple-icon.tsx` and `opengraph-image.tsx` using `next/og` — no static image files to keep in sync with the brand.
- Set `NEXT_PUBLIC_SITE_URL` to the real production domain before going live — it feeds `metadataBase`, canonical URLs, `sitemap.xml`, `robots.txt` and the JSON-LD schema.
