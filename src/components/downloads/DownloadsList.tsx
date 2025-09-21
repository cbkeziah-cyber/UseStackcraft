"use client";

import React from "react";

type FileItem = {
  id: number;
  name: string;
  mimeType?: string | null;
  size?: number | null;
  width?: number | null;
  height?: number | null;
  createdAt?: string | number | null;
};

export const DownloadsList: React.FC = () => {
  const [files, setFiles] = React.useState<FileItem[] | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let ignore = false;
    const run = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/files?limit=200", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Failed to load files (${res.status})`);
        }
        const data = await res.json();
        if (!ignore) setFiles(Array.isArray(data) ? data : data?.items ?? []);
      } catch (e: any) {
        if (!ignore) setError(e?.message || "Failed to load files");
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    run();
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-md border bg-muted/50" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm">
        <p className="text-destructive">{error}</p>
        <p className="mt-1 text-muted-foreground">If this persists, the downloads API may not be deployed on this domain.</p>
      </div>
    );
  }

  if (!files || files.length === 0) {
    return <p className="mt-6 text-sm text-muted-foreground">No files found.</p>;
  }

  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {files.map((f) => {
        const downloadHref = `/api/files/${f.id}/download`;
        const subtitle: string[] = [];
        if (f.mimeType) subtitle.push(f.mimeType);
        if (typeof f.size === "number" && f.size >= 0) {
          const kb = f.size / 1024;
          subtitle.push(`${kb < 1024 ? kb.toFixed(0) + " KB" : (kb / 1024).toFixed(2) + " MB"}`);
        }
        if (f.width && f.height) subtitle.push(`${f.width}×${f.height}`);
        return (
          <li key={f.id} className="rounded-md border bg-card p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-medium">{f.name || `File #${f.id}`}</p>
                {subtitle.length > 0 && (
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{subtitle.join(" • ")}</p>
                )}
              </div>
              <a
                href={downloadHref}
                className="shrink-0 rounded-md border border-primary/30 bg-secondary/40 px-3 py-1.5 text-xs font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              >
                Download
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};