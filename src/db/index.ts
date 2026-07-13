import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL;

const MISSING_URL_MESSAGE =
  "DATABASE_URL is not set. Add it in your hosting provider's project settings " +
  "(e.g. Vercel: Project → Settings → Environment Variables) and redeploy. " +
  "See .env.example for the expected format.";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

// Only create a real connection pool if DATABASE_URL is actually set. Building this
// module (and therefore any API route that imports it) must not throw just because
// an env var is missing — Next.js imports route modules during the build's "collecting
// page data" step even for routes marked force-dynamic, so a top-level throw here would
// fail the entire build. Instead, the error surfaces lazily, only when a request
// actually tries to use the database.
export const pool: Pool | undefined = databaseUrl
  ? (globalForDb.__arenaNextJsPostgresqlPool ?? new Pool({ connectionString: databaseUrl }))
  : undefined;

if (pool && process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

export const db: NodePgDatabase = pool
  ? drizzle(pool)
  : (new Proxy(
      {},
      {
        get() {
          throw new Error(MISSING_URL_MESSAGE);
        },
      },
    ) as NodePgDatabase);
