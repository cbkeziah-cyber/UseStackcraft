export default function Page() {
  type MiniReview = { rating: string; quote: string; author: string };
  type Product = {
    name: string;
    bestFor: string;
    reviews: MiniReview[];
  };
  type Category = { name: string; products: Product[] };

  const data: Category[] = [
    {
      name: "Newsletter & Growth",
      products: [
        {
          name: "beehiiv",
          bestFor: "Newsletter growth via referrals and recommendations",
          reviews: [
            { rating: "4.6/5", quote: "The referral tools and recommendations actually moved the needle for my small list.", author: "Maya R." },
            { rating: "4.2/5", quote: "Super fast to launch; templates are simpler than Mailchimp's but growth features are better.", author: "Colin D." },
            { rating: "3.9/5", quote: "Analytics are solid; design flexibility is still catching up.", author: "Priya N." },
          ],
        },
      ],
    },
    {
      name: "Email Marketing",
      products: [
        {
          name: "Mailchimp",
          bestFor: "All‑around email marketing with templates and automations",
          reviews: [
            { rating: "4.3/5", quote: "Automations and templates are top‑tier; pricing jumps quickly as your list grows.", author: "James T." },
            { rating: "4.0/5", quote: "Great integrations and deliverability; UI can feel busy for beginners.", author: "Alina V." },
            { rating: "3.8/5", quote: "Powerful, but segmentation rules take time to master.", author: "Derek P." },
          ],
        },
        {
          name: "ActiveCampaign",
          bestFor: "Advanced automations plus lightweight CRM",
          reviews: [
            { rating: "4.5/5", quote: "Automations are incredibly granular; learning curve is real.", author: "Raymond U." },
            { rating: "4.2/5", quote: "Lightweight CRM is enough for SMB sales pipelines.", author: "Chloe Z." },
            { rating: "4.0/5", quote: "Great deliverability; UI feels dense but powerful.", author: "Stefan Y." },
          ],
        },
      ],
    },
    {
      name: "Creator Email",
      products: [
        {
          name: "ConvertKit",
          bestFor: "Tag‑based automations for creators selling digital products",
          reviews: [
            { rating: "4.5/5", quote: "Tag‑based automations are clean and intuitive; perfect for creators.", author: "Lucas M." },
            { rating: "4.1/5", quote: "Deliverability is strong; design options are more minimal than others.", author: "Elle C." },
            { rating: "3.9/5", quote: "Great for digital products; less flexible for complex B2B funnels.", author: "Grant S." },
          ],
        },
      ],
    },
    {
      name: "SEO & Research",
      products: [
        {
          name: "SEMrush",
          bestFor: "Competitive research, keyword gap, and backlink audits",
          reviews: [
            { rating: "4.7/5", quote: "Keyword gap and competitor intel are best‑in‑class; pricey but worth it for client work.", author: "Sarah K." },
            { rating: "4.4/5", quote: "Backlink audits saved us from penalties; interface is dense at first.", author: "Victor L." },
            { rating: "4.2/5", quote: "Site audits + topic research streamlined our content roadmap.", author: "Naomi F." },
          ],
        },
        {
          name: "Surfer SEO",
          bestFor: "On‑page content optimization and briefs",
          reviews: [
            { rating: "4.3/5", quote: "Content scores keep writers aligned; can feel rigid if taken too literally.", author: "Peter H." },
            { rating: "4.1/5", quote: "Easy wins for on‑page SEO; NLP recommendations sometimes fluctuate.", author: "Jade A." },
            { rating: "3.8/5", quote: "Solid briefs; subscriptions add up if you also use other SEO tools.", author: "Martin Q." },
          ],
        },
      ],
    },
    {
      name: "AI Writing",
      products: [
        {
          name: "Jasper AI",
          bestFor: "Fast ideation, outlines, and marketing copy",
          reviews: [
            { rating: "4.2/5", quote: "Speeds up outlines and first drafts; still needs human editing for voice.", author: "Nina B." },
            { rating: "3.9/5", quote: "Templates are helpful; can overuse generic phrasing without good prompts.", author: "Omar J." },
            { rating: "4.0/5", quote: "Excellent for brainstorming headlines and ad copy.", author: "Felicity W." },
          ],
        },
      ],
    },
    {
      name: "Automation",
      products: [
        {
          name: "Zapier",
          bestFor: "No‑code app integrations and workflow automation",
          reviews: [
            { rating: "4.6/5", quote: "10/10 for connecting tools without engineering time; costs scale with usage.", author: "Tessa G." },
            { rating: "4.3/5", quote: "Reliability is great; complex zaps need careful error handling.", author: "Quinn R." },
            { rating: "4.2/5", quote: "Huge app library; task limits can surprise you.", author: "Brandon C." },
          ],
        },
      ],
    },
    {
      name: "Funnels & Landing Pages",
      products: [
        {
          name: "ClickFunnels",
          bestFor: "Rapid funnel building with A/B testing",
          reviews: [
            { rating: "4.1/5", quote: "Fast to launch conversion flows; templates look dated without tweaking.", author: "Kiera S." },
            { rating: "3.9/5", quote: "All‑in‑one funnel stack; pricing is not beginner‑friendly.", author: "Marco D." },
            { rating: "3.8/5", quote: "A/B testing is easy; page speed needs attention for heavy pages.", author: "Alannah P." },
          ],
        },
      ],
    },
    {
      name: "Analytics",
      products: [
        {
          name: "Google Analytics 4",
          bestFor: "Event‑based web analytics and conversion tracking",
          reviews: [
            { rating: "3.9/5", quote: "Event model is flexible; reporting UX confuses newcomers.", author: "Dana E." },
            { rating: "4.1/5", quote: "Once configured, funnels and conversions are insightful.", author: "Henry P." },
            { rating: "3.7/5", quote: "Setup time is the tax you pay for free enterprise‑grade analytics.", author: "Mika R." },
          ],
        },
      ],
    },
    {
      name: "Link Tracking",
      products: [
        {
          name: "Bitly",
          bestFor: "Branded short links, QR codes, and campaign tracking",
          reviews: [
            { rating: "4.2/5", quote: "Branded short links increased CTR; great for affiliate tracking.", author: "Paula W." },
            { rating: "3.9/5", quote: "Simple dashboards; free tier limits hit quickly.", author: "Andre C." },
            { rating: "3.8/5", quote: "UTM + QR features are handy; pricing tiers could be clearer.", author: "Sloane J." },
          ],
        },
      ],
    },
    {
      name: "Dashboards",
      products: [
        {
          name: "Looker Studio",
          bestFor: "Free, flexible reporting from multiple data sources",
          reviews: [
            { rating: "4.3/5", quote: "Free and flexible; connectors can be finicky at times.", author: "Jorge I." },
            { rating: "4.1/5", quote: "Perfect for blending GA4 with revenue sheets for exec views.", author: "Whitney L." },
            { rating: "3.9/5", quote: "Performance varies with large datasets; still unbeatable at the price.", author: "Rashid A." },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Reviews</h1>
      <p className="mt-2 text-muted-foreground">
        Hands-on reviews to help small businesses choose the right tools—and stack them to automate online marketing.
      </p>

      {/* Categories */}
      <div className="mt-8 space-y-12">
        {data.map((cat) => (
          <section key={cat.name} className="scroll-mt-24">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold tracking-tight">{cat.name}</h2>
            </div>

            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
              {cat.products.map((p) => (
                <article key={p.name} className="rounded-lg border bg-card p-5 shadow-sm">
                  <header className="mb-3">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground whitespace-nowrap">
                        Best for
                      </span>
                      <span className="text-sm text-muted-foreground">{p.bestFor}</span>
                    </p>
                  </header>
                  <ul className="space-y-3">
                    {p.reviews.map((r, i) => (
                      <li key={i} className="rounded-md bg-muted/50 p-5 shadow-md lg:shadow-lg ring-1 ring-black/10">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{r.rating}</span>
                          <span className="text-muted-foreground">— {r.author}</span>
                        </div>
                        <p className="mt-1 text-sm">" {r.quote} "</p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}