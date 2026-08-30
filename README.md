# Emirates Premier Movers

Marketing website for a moving & packing company serving Sharjah, Ajman, Dubai and the wider UAE. Built with Next.js 16 (App Router, Turbopack), Tailwind CSS v4, Framer Motion, and a Postgres backend (Drizzle ORM) for capturing quote/contact inquiries.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Database:** PostgreSQL via `drizzle-orm` + `pg`
- **Notifications:** [Resend](https://resend.com) (email, server-side) + [Twilio](https://www.twilio.com/whatsapp) (WhatsApp, server-side)
- **Content:** All copy, services, areas and blog posts are typed data in `src/lib/site-data.ts` — no CMS

## Getting started

```bash
npm install
cp .env.example .env
# edit .env with your own DATABASE_URL, Resend and Twilio credentials
npm run dev
```

The app runs at `http://localhost:3000`.

### Required environment variables

See `.env.example` for the full list with setup instructions. At minimum you need:

- `DATABASE_URL` — a reachable Postgres connection string
- `NEXT_PUBLIC_SITE_URL` — the canonical URL used in metadata, sitemap.xml and JSON-LD

Resend and Twilio are both optional in the sense that the site works without them — every inquiry is always saved to the database regardless — but you won't receive email/WhatsApp alerts until they're configured.

### How inquiry notifications work

Every quote and contact form submission does three things:

1. **Saves to Postgres** (`inquiries` table) — always happens, this is the durable record.
2. **Sends you a WhatsApp message via Twilio** — server-side, from `src/app/api/inquiries/route.ts`. Requires `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_WHATSAPP_FROM`, `TWILIO_WHATSAPP_TO`.
3. **Emails you via Resend** — also server-side, from the same route, sent in parallel with the WhatsApp notification. Requires `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`.

Steps 2 and 3 are independent and best-effort — if Twilio or Resend isn't configured (or a request fails), the customer still sees a success message, because their inquiry was safely saved either way. Check the `integration_status` JSON column on the `inquiries` table if you need to debug delivery.

**Setting up Resend:** create a free account at resend.com and copy your API key from Settings → API Keys into `RESEND_API_KEY`. For `RESEND_FROM_EMAIL`, you can start with Resend's shared test sender (`onboarding@resend.dev`, no setup required) — for production, verify your own domain in Resend first, then use an address on it (e.g. `Emirates Premier Movers <leads@emiratespremiermovers.ae>`). Set `RESEND_TO_EMAIL` to whichever inbox should receive new leads. The customer's own email (if they gave one) is set as the reply-to address, so you can hit reply directly.

**Setting up Twilio:** get your Account SID and Auth Token from the Twilio console. While testing, use the Twilio Sandbox for WhatsApp (`TWILIO_WHATSAPP_FROM=whatsapp:+14155238886`) — you'll need to join the sandbox from your own WhatsApp first by sending the join code Twilio gives you. For production, apply for a WhatsApp Business sender through Twilio and use that number instead.

### Database

The `inquiries` table is **not** created automatically — run this once after setting `DATABASE_URL`, before your first deployment or `npm run dev`:

```bash
npx drizzle-kit push   # sync src/db/schema.ts to the database in drizzle.config.json
```

(Earlier versions of this project ran a `CREATE TABLE IF NOT EXISTS` check on every single form submission. That was replaced with this one-time step for performance — no schema query runs on the request path anymore.)

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
src/app/             Route segments (pages, layout, API routes, sitemap/robots)
src/components/       Shared UI: Navbar/Footer/Hero/JsonLd (site.tsx), interactive client components (interactive.tsx)
src/db/               Drizzle schema + connection pool
src/lib/site-data.ts  All copy: services, areas, blog posts, company info
src/lib/seo.ts        Metadata + JSON-LD (schema.org) helpers
```

## Deployment notes

- **Never commit or zip `node_modules/` or `.next/`.** They're excluded via `.gitignore`. Native dependencies (e.g. `lightningcss`, used by Tailwind) are platform-specific — always run a fresh `npm install` on the target machine/CI rather than copying an existing `node_modules` folder across platforms.
- **Fonts** are loaded via `next/font/google` (Inter, Playfair Display) in `src/app/layout.tsx`, which fetches from `fonts.googleapis.com` at build time. This requires outbound network access during `npm run build`; if you deploy from a network-restricted CI runner, either allow that domain or switch to self-hosted fonts with `next/font/local`.
- **Favicon / social share image** are generated dynamically from `src/app/icon.tsx`, `apple-icon.tsx` and `opengraph-image.tsx` using `next/og` — no static image files to keep in sync with the brand.
- Set `NEXT_PUBLIC_SITE_URL` to the real production domain before going live — it feeds `metadataBase`, canonical URLs, `sitemap.xml`, `robots.txt` and the JSON-LD schema.
- The `RESEND_API_KEY`, `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` are used server-side only (in `src/app/api/inquiries/route.ts`) — they're never bundled into client-side JavaScript, unlike a browser-side email SDK. Set them in your hosting provider's environment variables (not just your local `.env`) before deploying.
