import { DownloadsList } from "@/components/downloads/DownloadsList";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Downloads</h1>
      <p className="mt-2 text-muted-foreground text-sm">
        Browse available assets and download them with one click.
      </p>

      <DownloadsList />
    </div>
  );
}