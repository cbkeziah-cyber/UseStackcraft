import { sqliteTable, integer, text, blob } from 'drizzle-orm/sqlite-core';

export const files = sqliteTable('files', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  mimeType: text('mime_type').notNull(),
  sizeBytes: integer('size_bytes').notNull(),
  data: blob('data', { mode: 'buffer' }).notNull(),
  metadata: text('metadata', { mode: 'json' }),
  createdAt: text('created_at').notNull(),
});