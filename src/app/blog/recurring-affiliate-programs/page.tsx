export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Top Recurring Affiliate Programs (2025)</h1>
      <p className="mt-3 text-muted-foreground">
        Hand-picked list of recurring-commission programs suitable for creators and small businesses.
      </p>

      <div className="mt-6 grid gap-4">
        {[{
          name: "ClickFunnels",
          notes: "Popular funnels ecosystem; verify current percentage and cookie duration.",
        }, {
          name: "GetResponse",
          notes: "Email + automation; recurring commissions available.",
        }, {
          name: "ConvertKit",
          notes: "Creator-oriented; recurring commissions for paid plans.",
        }, {
          name: "beehiiv",
          notes: "Newsletter platform with growth tools.",
        }, {
          name: "Teachable",
          notes: "Course platform; useful for edu creators.",
        }, {
          name: "SamCart",
          notes: "Checkout platform; digital product focus.",
        }].map(p => (
          <div key={p.name} className="rounded-lg border bg-card p-4 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h2 className="font-medium">{p.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.notes}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border bg-card p-4 text-sm text-muted-foreground">
        Always confirm current commission rates, cookie windows, and program terms on the official program page.
      </div>
    </div>
  );
}