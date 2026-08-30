import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Loads variables from .env into process.env, exactly like the app itself does at
// runtime. This means `npx drizzle-kit push` targets whichever DATABASE_URL is in
// your .env file — so to migrate your production database, put its connection
// string in .env (temporarily, if you prefer) before running the command, then
// switch .env back to your local database URL for day-to-day development.
// Next.js itself loads .env.local, .env, etc. automatically at runtime — but this
// file runs outside Next.js, via the drizzle-kit CLI directly, so it has to load
// them itself. Checked in this order (matching Next.js's own precedence): a value
// already present in .env.local wins over the same key in .env.
config({ path: [".env.local", ".env"] });

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL is not set. Add it to your .env or .env.local file before running any drizzle-kit " +
      "command (see .env.example). To migrate your production database, temporarily set DATABASE_URL " +
      "to your production connection string, run the command, then switch it back to your local one.",
  );
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
