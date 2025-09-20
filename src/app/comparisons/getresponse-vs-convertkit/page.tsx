export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">GetResponse vs ConvertKit (2025)</h1>
      <p className="mt-2 text-muted-foreground">
        A practical comparison focused on onboarding speed, automation, and pricing transparency.
      </p>

      <div className="mt-6 grid gap-6">
        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Quick Verdict</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            ConvertKit is great for creators who want a clean newsletter-first tool. GetResponse fits
            users who want landing pages, funnels, and webinars built-in.
          </p>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">At a Glance</h2>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">GetResponse</p>
              <ul className="mt-1 list-disc pl-5 text-muted-foreground space-y-1">
                <li>Website builder + funnels</li>
                <li>Webinars</li>
                <li>Automation templates</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">ConvertKit</p>
              <ul className="mt-1 list-disc pl-5 text-muted-foreground space-y-1">
                <li>Creator-friendly editor</li>
                <li>Landing pages & forms</li>
                <li>Paid newsletter features</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Feature-by-Feature</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Email builder and templates</li>
            <li>Automation (workflows, triggers, tags)</li>
            <li>Integrations and ecosystem</li>
            <li>Support and documentation</li>
          </ul>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Pricing</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Verify current tiers and trials on each provider's site. Consider growth costs as your list scales.
          </p>
        </section>

        <section className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <h2 className="text-lg font-medium">Which should you choose?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose ConvertKit if you mainly run a creator newsletter with simple automation. Choose GetResponse if you want
            an all-in-one stack with funnels and webinars.
          </p>
        </section>
      </div>
    </div>
  );
}