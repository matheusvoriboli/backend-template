import { randomUUID } from "node:crypto";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text("name").notNull(),
  remoteKey: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
