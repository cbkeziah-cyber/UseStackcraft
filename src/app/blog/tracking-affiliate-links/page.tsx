export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">How to Track Affiliate Links with Bitly + UTMs</h1>
      <p className="mt-3 text-muted-foreground">
        Set up simple, reliable tracking for outbound affiliate clicks using Bitly and
        standard UTM parameters.
      </p>

      <div className="mt-6 space-y-6 text-sm leading-6 text-foreground/90">
        <section>
          <h2 className="text-lg font-medium">1) Create Bitly links per placement</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Make a unique Bitly link for each page and placement (hero, mid, footer).</li>
            <li>Keep a sheet with columns: Page, Placement, Bitly Link, Clicks, Notes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium">2) Standardize UTMs</h2>
          <p className="mt-1 text-muted-foreground">
            Use utm_source=site, utm_medium=site, utm_campaign={"{page}"}. Optionally add
            utm_content for button vs text link.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">3) Track events in GA4</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              Implement an event like <span className="font-mono">click_affiliate</span> via
              Google Tag Manager matching outbound patterns (e.g., ref/aff/bit.ly).
            </li>
            <li>Compare traffic → outbound clicks → conversions from affiliate dashboards.</li>
          </ul>
        </section>

        <div className="mt-6 rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
          <p className="font-medium">Starter resources</p>
          <ul className="mt-2 list-disc pl-5 text-muted-foreground">
            <li>
              <a className="hover:underline" href="/resources">Budget sheet, UTM builder, and templates</a>
            </li>
            <li>
              <a className="hover:underline" href="/comparisons/template">Comparison page template</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}