import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { default: fs } = await import("fs");
  const { default: path } = await import("path");

  const origin = (() => {
    try {
      return new URL(request.url).origin;
    } catch {
      return "";
    }
  })();

  const siteTitle = "StackCraft";
  const siteDesc = "We help small businesses select and stack the right tech tools to automate online marketing—save time, cut costs, and grow consistently.";
  const siteLink = `${origin}`;

  // Collect blog posts from folder structure
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  let slugs: string[] = [];
  try {
    const entries = await fs.promises.readdir(blogDir, { withFileTypes: true });
    slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  } catch {
    slugs = [];
  }

  const items = await Promise.all(
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
        excerpt = text.slice(0, 280) + (text.length > 280 ? "…" : "");
      } catch {}

      const title = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      const pubDate = new Date(mtime || Date.now()).toUTCString();
      const link = `${origin}/blog/${slug}`;

      return { title, link, pubDate, description: excerpt };
    })
  );

  // newest first by pubDate
  items.sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1));

  const xmlItems = items
    .map(
      (it) => `\n    <item>
      <title><![CDATA[${it.title}]]></title>
      <link>${it.link}</link>
      <guid>${it.link}</guid>
      <pubDate>${it.pubDate}</pubDate>
      <description><![CDATA[${it.description}]]></description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title><![CDATA[${siteTitle}]]></title>
    <link>${siteLink}</link>
    <description><![CDATA[${siteDesc}]]></description>
    <language>en</language>
    ${xmlItems}\n
  </channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
    },
  });
}