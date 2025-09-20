"use client";

import * as React from "react";

export type BlogPostListItem = {
  slug: string;
  title: string;
  date: string; // ISO string
  excerpt: string;
  tags?: string[];
  url?: string; // optional external url
};

export const BlogSearch: React.FC<{ posts: BlogPostListItem[] }> = ({ posts }) => {
  const [q, setQ] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const allTags = React.useMemo(
    () => Array.from(new Set(posts.flatMap((p) => p.tags ?? []))).sort(),
    [posts]
  );

  const filtered = React.useMemo(() => {
    const query = q.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesQuery = !query
        || [p.title, p.excerpt, p.slug].some((v) => v.toLowerCase().includes(query));
      const matchesTags = selectedTags.length === 0
        || (p.tags ?? []).some((t) => selectedTags.includes(t));
      return matchesQuery && matchesTags;
    });
  }, [q, posts, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-3">
        {allTags.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap sm:flex-wrap">
            <button
              type="button"
              onClick={() => setSelectedTags([])}
              className={`rounded-full border px-3 py-1.5 text-xs md:text-[13px] ${selectedTags.length === 0 ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-secondary"}`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-3 py-1.5 text-xs md:text-[13px] ${selectedTags.includes(tag) ? "bg-foreground text-background" : "bg-background text-foreground hover:bg-secondary"}`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search posts..."
            className="w-full md:max-w-lg rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.length === 0 && (
          <div className="text-sm text-muted-foreground">No matching posts.</div>
        )}
        {filtered.map((p) => {
          const d = p.date ? new Date(p.date) : null;
          const dateStr = d && !isNaN(d.getTime()) ? d.toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }) : "";
          const href = p.url ?? `/blog/${p.slug}`;
          const isExternal = Boolean(p.url);
          return (
            <a
              key={p.slug + (p.url || "")}
              href={href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group rounded-lg border border-border bg-card p-4 sm:p-5 hover:bg-secondary/60 transition h-full flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-medium leading-tight">{p.title}</h2>
                {dateStr && (
                  <time className="text-xs text-muted-foreground" dateTime={p.date}>
                    {dateStr}
                  </time>
                )}
              </div>
              {p.excerpt && (
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
              )}
              {p.tags && p.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-secondary text-secondary-foreground/80 border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide">
                      {t}
                    </span>
                  ))}
                  {isExternal && (
                    <span className="rounded-full bg-secondary text-secondary-foreground/80 border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide">
                      external
                    </span>
                  )}
                </div>
              )}
              {!p.tags?.length && isExternal && (
                <div className="mt-3">
                  <span className="rounded-full bg-secondary text-secondary-foreground/80 border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide">
                    external
                  </span>
                </div>
              )}
              <p className="mt-4 sm:mt-5 text-xs text-foreground/70 group-hover:text-foreground">Read {isExternal ? "article" : "post"} →</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};