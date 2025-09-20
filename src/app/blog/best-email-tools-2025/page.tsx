export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Best Email Tools for Beginners (2025)</h1>
      <p className="mt-3 text-muted-foreground">
        A quick-start buyer's guide focused on ease-of-use, automation basics, and fair pricing.
      </p>

      <div className="mt-6 grid gap-4">
        {[{
          name: "GetResponse",
          why: "All-in-one email + funnels with approachable automation.",
          fit: "Beginners wanting landing pages, funnels, and webinars in one place.",
        }, {
          name: "ConvertKit",
          why: "Creator-friendly with simple sequences and forms.",
          fit: "Newsletter-first creators and solo founders.",
        }, {
          name: "beehiiv",
          why: "Newsletter growth features and monetization options.",
          fit: "Newsletter publishers focused on audience growth.",
        }].map((t) => (
          <div key={t.name} className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h2 className="font-medium">{t.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.why}</p>
            <p className="mt-1 text-sm"><span className="font-medium">Best for:</span> {t.fit}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border bg-card p-4 text-sm text-muted-foreground">
        Note: Verify current pricing, features, and affiliate terms on the provider's site as they may change.
      </div>
    </div>
  );
}