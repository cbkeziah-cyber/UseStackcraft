export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Comparison Page Template</h1>
      <p className="mt-2 text-muted-foreground">
        Copy this structure for product vs product comparisons. Replace placeholders and add screenshots.
      </p>

      <div className="mt-6 grid gap-6">
        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Quick Verdict</h2>
          <p className="mt-1 text-sm text-muted-foreground">TL;DR one-liner who should pick which tool.</p>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">At a Glance</h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Tool A</p>
              <ul className="mt-1 list-disc pl-5 text-muted-foreground space-y-1">
                <li>Best for: …</li>
                <li>Pricing: …</li>
                <li>Key features: …</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Tool B</p>
              <ul className="mt-1 list-disc pl-5 text-muted-foreground space-y-1">
                <li>Best for: …</li>
                <li>Pricing: …</li>
                <li>Key features: …</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Feature-by-Feature</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Email builder</li>
            <li>Automation</li>
            <li>Integrations</li>
            <li>Support and docs</li>
          </ul>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Pricing</h2>
          <p className="mt-1 text-sm text-muted-foreground">Summarize tiers, trials, and notable limits.</p>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Which should you choose?</h2>
          <p className="mt-1 text-sm text-muted-foreground">Scenario-based recommendations by persona and use case.</p>
        </section>
      </div>
    </div>
  );
}