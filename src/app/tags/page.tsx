export default async function TagsIndexPage() {
  const { default: fs } = await import("fs");
  const { default: path } = await import("path");

  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const entries = await fs.promises.readdir(blogDir, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  // Keep in sync with blog page mapping
  const TAGS: Record<string, string[]> = {
    "tracking-affiliate-links": ["analytics", "tracking"],
    "best-email-tools-2025": ["email", "tools"],
    "recurring-affiliate-programs": ["programs", "recurring"],
  };

  // Build tag counts from known posts
  const counts = new Map<string, number>();
  for (const slug of slugs) {
    const t = TAGS[slug] ?? [];
    for (const tag of t) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }

  const tagList = Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Tags</h1>
      <p className="mt-2 text-muted-foreground">Browse topics across your marketing stack—find tools and guides to automate your online marketing.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {tagList.map(({ tag, count }) => (
          <a
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="rounded-lg border bg-card p-4 transition hover:bg-secondary/60 ring-1 ring-transparent hover:ring-primary/20 hover:shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">#{tag}</span>
              <span className="text-xs text-muted-foreground">{count} post{count === 1 ? "" : "s"}</span>
            </div>
          </a>
        ))}
        {tagList.length === 0 && (
          <div className="text-sm text-muted-foreground">No tags yet.</div>
        )}
      </div>
    </div>
  );
}