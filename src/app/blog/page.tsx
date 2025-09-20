export default async function Page() {
  const { default: fs } = await import("fs");
  const { default: path } = await import("path");
  const { BlogSearch } = await import("@/components/BlogSearch");

  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const entries = await fs.promises.readdir(blogDir, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  // simple, hardcoded tags per known post; others fall back to []
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
        // crude text extraction from TSX: remove tags and collapse whitespace
        const text = raw
          .replace(/<[^>]*>/g, " ")
          .replace(/\{[^}]*\}/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        excerpt = text.slice(0, 200) + (text.length > 200 ? "…" : "");
      } catch {
        // ignore
      }
      const title = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return { slug, title, date: new Date(mtime).toISOString(), excerpt, tags: TAGS[slug] ?? [] };
    })
  );

  // Add external articles via RSS feeds
  let externalPosts: Array<{ slug: string; title: string; date: string; excerpt: string; tags?: string[]; url?: string }> = [];
  try {
    const { default: Parser } = await import("rss-parser");
    const parser = new Parser();
    const FEEDS = [
      "https://ahrefs.com/blog/feed/",
      "https://backlinko.com/feed",
      "https://neilpatel.com/blog/feed/",
    ];

    const results = await Promise.allSettled(FEEDS.map((u) => parser.parseURL(u)));
    externalPosts = results.flatMap((res, i) => {
      if (res.status !== "fulfilled") return [];
      const src = new URL(FEEDS[i]).hostname.replace(/^www\./, "");
      return (res.value.items ?? []).slice(0, 10).map((item) => {
        const link = item.link ?? "";
        const title = item.title ?? "Untitled";
        const iso = item.isoDate || item.pubDate ? new Date((item.isoDate as string) || (item.pubDate as string)).toISOString() : new Date().toISOString();
        const raw = (item.contentSnippet || item.content || "").toString();
        const excerpt = raw.replace(/\s+/g, " ").trim().slice(0, 200) + (raw.length > 200 ? "…" : "");
        const slugBase = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
        const slug = `ext-${src}-${slugBase}`;
        return { slug, title, date: iso, excerpt, tags: ["external", src], url: link };
      });
    });
  } catch {
    // ignore network/parser errors so the page still renders
  }

  const allPosts = [...posts, ...externalPosts];

  // newest first
  allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Blog</h1>
      <p className="mt-2 text-muted-foreground">
        Guides, checklists, and comparisons to help small businesses automate their online marketing with the right tools.
      </p>

      <div className="mt-6">
        <BlogSearch posts={allPosts} />
      </div>
    </div>
  );
}