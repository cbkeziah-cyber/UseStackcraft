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

  const staticPaths = [
    "/",
    "/comparisons",
    "/use-cases",
    "/reviews",
    "/blog",
    "/resources",
    "/about",
    "/disclosure",
  ];

  // Collect blog post slugs and last modified times
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  let blogUrls: { loc: string; lastmod?: string }[] = [];
  try {
    const entries = await fs.promises.readdir(blogDir, { withFileTypes: true });
    const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

    blogUrls = await Promise.all(
      slugs.map(async (slug) => {
        const pagePath = path.join(blogDir, slug, "page.tsx");
        let lastmod = undefined as string | undefined;
        try {
          const stat = await fs.promises.stat(pagePath);
          lastmod = new Date(stat.mtimeMs).toISOString();
        } catch {}
        return { loc: `${origin}/blog/${slug}`, lastmod };
      })
    );
  } catch {
    blogUrls = [];
  }

  const urls: { loc: string; lastmod?: string }[] = [
    ...staticPaths.map((p) => ({ loc: `${origin}${p}` })),
    ...blogUrls,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `<url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}
    <changefreq>weekly</changefreq>
    <priority>${u.loc.endsWith("/") ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("\n  ")}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
    },
  });
}