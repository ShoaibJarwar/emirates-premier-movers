import { integer, jsonb, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const inquiries = pgTable("inquiries", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  type: varchar("type", { length: 40 }).notNull(),
  name: varchar("name", { length: 140 }).notNull(),
  phone: varchar("phone", { length: 60 }).notNull(),
  email: varchar("email", { length: 180 }),
  fromLocation: varchar("from_location", { length: 180 }),
  toLocation: varchar("to_location", { length: 180 }),
  service: varchar("service", { length: 120 }),
  moveDate: varchar("move_date", { length: 80 }),
  message: text("message").notNull(),
  integrationStatus: jsonb("integration_status").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
