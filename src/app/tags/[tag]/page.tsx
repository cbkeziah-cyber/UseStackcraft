export default async function TagPage({ params }: { params: { tag: string } }) {
  const { default: fs } = await import("fs");
  const { default: path } = await import("path");

  const tag = decodeURIComponent(params.tag);

  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const entries = await fs.promises.readdir(blogDir, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  // Keep in sync with blog and tags index mapping
  const TAGS: Record<string, string[]> = {
    "tracking-affiliate-links": ["analytics", "tracking"],
    "best-email-tools-2025": ["email", "tools"],
    "recurring-affiliate-programs": ["programs", "recurring"],
  };

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const pagePath = path.join(blogDir, slug, "page.tsx");
      let mtime = 0;
      let excerpt = "";
      try {
        const stat = await fs.promises.stat(pagePath);
        mtime = stat.mtimeMs;
        const raw = await fs.promises.readFile(pagePath, "utf8");
        const text = raw
          .replace(/<[^>]*>/g, " ")
          .replace(/\{[^}]*\}/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        excerpt = text.slice(0, 200) + (text.length > 200 ? "…" : "");
      } catch {}
      const title = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { slug, title, date: new Date(mtime).toISOString(), excerpt, tags: TAGS[slug] ?? [] };
    })
  );

  const filtered = posts
    .filter((p) => p.tags?.includes(tag))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-baseline justify-between gap-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Tag: #{tag}</h1>
        <a href="/tags" className="text-sm text-muted-foreground hover:underline">All tags</a>
      </div>
      <p className="mt-2 text-muted-foreground">{filtered.length} post{filtered.length === 1 ? "" : "s"} tagged with #{tag}—focused on helping you automate your online marketing.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="rounded-lg border bg-card p-4 transition hover:bg-secondary/60 ring-1 ring-transparent hover:ring-primary/20 hover:shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-medium line-clamp-1">{p.title}</h2>
              <time className="text-xs text-muted-foreground" dateTime={p.date}>{new Date(p.date).toLocaleDateString()}</time>
            </div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            {p.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-md border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">#{t}</span>
                ))}
              </div>
            ) : null}
          </a>
        ))}
        {filtered.length === 0 && (
          <div className="text-sm text-muted-foreground">No posts found for this tag.</div>
        )}
      </div>
    </div>
  );
}