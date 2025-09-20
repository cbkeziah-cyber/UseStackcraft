export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Resources</h1>
      <p className="mt-2 text-muted-foreground">
        Templates, checklists, and simple tools to help small businesses select and stack the right tech to automate online marketing.
      </p>

      {/* Quick CTA Row */}
      <div className="mt-6 flex flex-wrap gap-3">
        {/* updated CTA styles */}
        <a href="/comparisons/template" className="group inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium shadow-md transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
          <span>Use Comparison Template</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
        <a href="/blog/tracking-affiliate-links" className="group inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
          <span>Track Affiliate Links</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Resource Table */}
      <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          <div className="p-4 bg-card">
            <p className="font-medium">Budget Planner Sheet</p>
            <p className="mt-1 text-sm text-muted-foreground">Plan $1,000 spend across your site platform, domain, content, and ads.</p>
            <div className="mt-3">
              <a href="#" className="text-sm text-foreground/80 hover:underline">Open Google Sheet</a>
            </div>
          </div>
          <div className="p-4 bg-card">
            <p className="font-medium">Content Calendar</p>
            <p className="mt-1 text-sm text-muted-foreground">Schedule 2 posts/week (BOFU + MOFU) with brief and owner.</p>
            <div className="mt-3">
              <a href="#" className="text-sm text-foreground/80 hover:underline">Download CSV</a>
            </div>
          </div>
          <div className="p-4 bg-card">
            <p className="font-medium">UTM Builder</p>
            <p className="mt-1 text-sm text-muted-foreground">Standardize utm_source, utm_medium, utm_campaign={"{page}"}.</p>
            <div className="mt-3">
              <a href="/blog/tracking-affiliate-links" className="text-sm text-foreground/80 hover:underline">How to implement</a>
            </div>
          </div>
          <div className="p-4 bg-card">
            <p className="font-medium">Email Sequence Template</p>
            <p className="mt-1 text-sm text-muted-foreground">5-email welcome flow for lead magnet to primary offer.</p>
            <div className="mt-3">
              <a href="/blog/best-email-tools-2025" className="text-sm text-foreground/80 hover:underline">See examples</a>
            </div>
          </div>
          <div className="p-4 bg-card">
            <p className="font-medium">Review/Comparison Brief</p>
            <p className="mt-1 text-sm text-muted-foreground">Outline sections, screenshots, pricing, and verdict.</p>
            <div className="mt-3">
              <a href="/comparisons/template" className="text-sm text-foreground/80 hover:underline">Open template</a>
            </div>
          </div>
          <div className="p-4 bg-card">
            <p className="font-medium">Affiliate Disclosure</p>
            <p className="mt-1 text-sm text-muted-foreground">FTC-compliant disclosure copy for pages and footer.</p>
            <div className="mt-3">
              <a href="/disclosure" className="text-sm text-foreground/80 hover:underline">View disclosure</a>
            </div>
          </div>
        </div>
      </div>

      {/* Helpful Reads */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold">Helpful reads</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          <li><a className="hover:underline" href="/blog/recurring-affiliate-programs">Top Recurring Affiliate Programs for 2025</a></li>
          <li><a className="hover:underline" href="/blog/best-email-tools-2025">Best Email Tools for Beginners (2025)</a></li>
          <li><a className="hover:underline" href="/comparisons/getresponse-vs-convertkit">GetResponse vs ConvertKit Comparison</a></li>
        </ul>
      </div>
    </div>
  );
}