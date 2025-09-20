import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Comparisons</h1>
      <p className="mt-2 text-muted-foreground">
        Side-by-side breakdowns to help small businesses choose the right tools and stack them to automate online marketing.
      </p>

      {/* Quick links to matchups */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <a href="#beehiiv-vs-mailchimp" className="rounded-md border bg-card p-3 text-sm transition hover:bg-secondary/60 ring-1 ring-transparent hover:ring-primary/20 hover:shadow-sm">
          beehiiv vs Mailchimp
        </a>
        <a href="#convertkit-vs-beehiiv" className="rounded-md border bg-card p-3 text-sm transition hover:bg-secondary/60 ring-1 ring-transparent hover:ring-primary/20 hover:shadow-sm">
          ConvertKit vs beehiiv
        </a>
        <a href="#mailerlite-vs-mailchimp" className="rounded-md border bg-card p-3 text-sm transition hover:bg-secondary/60 ring-1 ring-transparent hover:ring-primary/20 hover:shadow-sm">
          MailerLite vs Mailchimp
        </a>
        <a href="#klaviyo-vs-mailchimp" className="rounded-md border bg-card p-3 text-sm transition hover:bg-secondary/60 ring-1 ring-transparent hover:ring-primary/20 hover:shadow-sm">
          Klaviyo vs Mailchimp
        </a>
        <a href="/comparisons/getresponse-vs-convertkit" className="rounded-md border bg-card p-3 text-sm transition hover:bg-secondary/60 ring-1 ring-transparent hover:ring-primary/20 hover:shadow-sm">
          GetResponse vs ConvertKit
        </a>
      </div>

      {/* Beehiiv vs Mailchimp */}
      <section id="beehiiv-vs-mailchimp" className="mt-10">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">beehiiv vs Mailchimp</h2>
          <span className="text-xs text-muted-foreground">Last updated: Sep 2025</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Sources: beehiiv pricing & blog, independent reviews (EmailToolTester, EmailVendorSelection), and customer review sites (Trustpilot, G2, Sender).
        </p>

        {/* Summary cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">beehiiv</h3>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">Creator-first</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                Ideal for: creators, media-style newsletters, solo teams focused on audience growth & monetization
              </li>
              <li>
                Standouts: built-in referral program, ad/boost networks, paid subscriptions, audience growth tools, simple editor
                {" "}
                <a
                  href="https://www.beehiiv.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  (pricing)
                </a>
                {" "}
                <a
                  href="https://www.emailtooltester.com/en/reviews/beehiiv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  (review)
                </a>
              </li>
              <li>
                Notable feedback: strong growth/monetization focus; some mixed support/account reviews on Trustpilot
                {" "}
                <a
                  href="https://www.trustpilot.com/review/www.beehiiv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  (Trustpilot)
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Mailchimp</h3>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">SMB marketing suite</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                Ideal for: small businesses wanting broad marketing features (email, forms, sites, basic CRM, SMS add-on)
              </li>
              <li>
                Standouts: templates, brand recognition, multi-channel add-ons, large ecosystem
                {" "}
                <a
                  href="https://mailchimp.com/pricing/marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  (pricing)
                </a>
                {" "}
                <a
                  href="https://www.g2.com/products/intuit-mailchimp-email-marketing/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  (G2)
                </a>
              </li>
              <li>
                Notable feedback: good UI and features; some users cite price increases and billing/support frustrations
                {" "}
                <a
                  href="https://www.trustpilot.com/review/www.mailchimp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  (Trustpilot)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Side-by-side details */}
        <div className="mt-8 overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-secondary/60 to-accent/10 text-left">
              <tr>
                <th className="p-3 font-medium">Category</th>
                <th className="p-3 font-medium">beehiiv</th>
                <th className="p-3 font-medium">Mailchimp</th>
              </tr>
            </thead>
            <tbody className="divide-y transition-colors [&>tr:nth-child(odd)]:bg-muted/30 [&>tr:hover]:bg-muted/50">
              <tr>
                <td className="p-3 font-medium">Free plan</td>
                <td className="p-3">
                  Launch plan $0, up to 2,500 subscribers; unlimited sends; website & basic analytics
                  {" "}
                  <a
                    href="https://www.beehiiv.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    source
                  </a>
                </td>
                <td className="p-3">
                  Free tier exists but limited; 14‑day Standard trial promos vary over time
                  {" "}
                  <a
                    href="https://mailchimp.com/pricing/marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    source
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Core paid pricing</td>
                <td className="p-3">
                  Scale from ~$34.40/mo billed annually; Max from ~$76.80/mo billed annually (tiered by subscribers)
                  {" "}
                  <a
                    href="https://www.beehiiv.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    source
                  </a>
                </td>
                <td className="p-3">
                  Standard/Essentials/Premium tiers; pricing scales by contacts and sends; Premium removes contact limits
                  {" "}
                  <a
                    href="https://mailchimp.com/pricing/marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    source
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Automation</td>
                <td className="p-3">Visual automations included on Scale+; webhooks & API access available
                  {" "}
                  <a
                    href="https://www.beehiiv.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    source
                  </a>
                </td>
                <td className="p-3">Enhanced automations on Standard+; journey builder and segmentation
                  {" "}
                  <a
                    href="https://mailchimp.com/pricing/marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    source
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Monetization</td>
                <td className="p-3">Ad Network, Boost Network, paid subscriptions, referral program built‑in
                  {" "}
                  <a
                    href="https://www.emailtooltester.com/en/reviews/beehiiv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    review
                  </a>
                </td>
                <td className="p-3">No native ad network; ecommerce & upsell tools via integrations and add‑ons</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">SMS</td>
                <td className="p-3">No native SMS package highlighted; focus remains on newsletters</td>
                <td className="p-3">SMS add‑on available and integrated with email journeys
                  {" "}
                  <a
                    href="https://mailchimp.com/pricing/sms-marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    source
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Reviews snapshot</td>
                <td className="p-3">Mixed on Trustpilot; praise for creator focus; some complaints on account/support
                  {" "}
                  <a
                    href="https://www.trustpilot.com/review/www.beehiiv.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    Trustpilot
                  </a>
                  ,{" "}
                  <a
                    href="https://www.emailvendorselection.com/beehiiv-review/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    EVS
                  </a>
                </td>
                <td className="p-3">G2 4.3/5 (12k+ reviews); Trustpilot ~3.0/5 and recurring billing/support concerns
                  {" "}
                  <a
                    href="https://www.g2.com/products/intuit-mailchimp-email-marketing/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    G2
                  </a>
                  ,{" "}
                  <a
                    href="https://www.trustpilot.com/review/www.mailchimp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    Trustpilot
                  </a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Who should choose it</td>
                <td className="p-3">Choose beehiiv if you're building a publication‑style newsletter and want built‑in growth + monetization with simple, fast workflows.</td>
                <td className="p-3">Choose Mailchimp if you need a broader SMB marketing stack, multi‑channel add‑ons, and an established ecosystem.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA row (affiliate links to be added later) */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
          >
            Try beehiiv — add your affiliate link
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
          >
            Try Mailchimp — add your affiliate link
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          Pricing/features change frequently. Always verify on vendor sites. Some links may be affiliate links; we may earn a commission at no extra cost to you.
        </p>
      </section>

      {/* ConvertKit vs beehiiv (full table) */}
      <section id="convertkit-vs-beehiiv" className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">ConvertKit vs beehiiv</h2>
          <span className="text-xs text-muted-foreground">Last updated: Sep 2025</span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">ConvertKit</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Creator-focused with tags/automations and simple landing pages</li>
              <li>Commerce for paid products/subscriptions</li>
              <li>
                <a href="https://convertkit.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">pricing</a>
                {" · "}
                <a href="https://www.g2.com/products/convertkit/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">beehiiv</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Growth & monetization built‑in: referrals, boosts, ad network</li>
              <li>Newsletter‑first workflow with simple editor</li>
              <li>
                <a href="https://www.beehiiv.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">pricing</a>
                {" · "}
                <a href="https://www.emailtooltester.com/en/reviews/beehiiv/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">review</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-secondary/60 to-accent/10 text-left">
              <tr>
                <th className="p-3 font-medium">Category</th>
                <th className="p-3 font-medium">ConvertKit</th>
                <th className="p-3 font-medium">beehiiv</th>
              </tr>
            </thead>
            <tbody className="divide-y transition-colors [&>tr:nth-child(odd)]:bg-muted/30 [&>tr:hover]:bg-muted/50">
              <tr>
                <td className="p-3 font-medium">Free plan</td>
                <td className="p-3">Free tier available with limited features; scales by subscribers{" "}
                  <a href="https://convertkit.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Launch plan $0 with generous limits for early publications{" "}
                  <a href="https://www.beehiiv.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Core paid pricing</td>
                <td className="p-3">Creator and higher tiers; pricing increases by subscriber count{" "}
                  <a href="https://convertkit.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Scale/Max tiers; tiered by subscribers with feature unlocks{" "}
                  <a href="https://www.beehiiv.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Automation</td>
                <td className="p-3">Visual automations, tags, sequences included on paid plans{" "}
                  <a href="https://convertkit.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Visual automations on Scale+; API and webhooks available{" "}
                  <a href="https://www.beehiiv.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Monetization</td>
                <td className="p-3">Paid newsletters and commerce for digital products{" "}
                  <a href="https://convertkit.com/commerce" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Ad/Boost networks + paid subscriptions + referrals built‑in{" "}
                  <a href="https://www.emailtooltester.com/en/reviews/beehiiv/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">review</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">SMS</td>
                <td className="p-3">No native SMS; can integrate third‑party SMS tools</td>
                <td className="p-3">No native SMS package highlighted; newsletter‑centric</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Reviews snapshot</td>
                <td className="p-3">Generally positive among creators; requests for deeper reporting
                  {" "}
                  <a href="https://www.g2.com/products/convertkit/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
                </td>
                <td className="p-3">Praised for growth tools; mixed on support/account actions
                  {" "}
                  <a href="https://www.trustpilot.com/review/www.beehiiv.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Trustpilot</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Who should choose it</td>
                <td className="p-3">Choose ConvertKit if you want tag‑based automations with a creator toolchain and simple sales.</td>
                <td className="p-3">Choose beehiiv if you want publication‑style growth + built‑in monetization with minimal setup.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a href="#" className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">Try ConvertKit — add your affiliate link<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></a>
          <a href="#" className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">Try beehiiv — add your affiliate link<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Pricing/features change frequently. Always verify on vendor sites.</p>
      </section>

      {/* MailerLite vs Mailchimp (full table) */}
      <section id="mailerlite-vs-mailchimp" className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">MailerLite vs Mailchimp</h2>
          <span className="text-xs text-muted-foreground">Last updated: Sep 2025</span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">MailerLite</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Good value for small lists, clean editor and automations</li>
              <li>Landing pages, websites, and basic ecommerce tools</li>
              <li>
                <a href="https://www.mailerlite.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">pricing</a>
                {" · "}
                <a href="https://www.g2.com/products/mailerlite/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Mailchimp</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Broader suite with add‑ons (SMS, ecommerce integrations)</li>
              <li>Large template library and brand recognition</li>
              <li>
                <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">pricing</a>
                {" · "}
                <a href="https://www.g2.com/products/intuit-mailchimp-email-marketing/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-secondary/60 to-accent/10 text-left">
              <tr>
                <th className="p-3 font-medium">Category</th>
                <th className="p-3 font-medium">MailerLite</th>
                <th className="p-3 font-medium">Mailchimp</th>
              </tr>
            </thead>
            <tbody className="divide-y transition-colors [&>tr:nth-child(odd)]:bg-muted/30 [&>tr:hover]:bg-muted/50">
              <tr>
                <td className="p-3 font-medium">Free plan</td>
                <td className="p-3">Free tier available with limits on features and monthly sends{" "}
                  <a href="https://www.mailerlite.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Free tier exists but limited; periodic trial promos for Standard{" "}
                  <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Core paid pricing</td>
                <td className="p-3">Tiers scale by subscribers with add‑ons for advanced features{" "}
                  <a href="https://www.mailerlite.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Standard/Essentials/Premium tiers; scales by contacts and send limits{" "}
                  <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Automation</td>
                <td className="p-3">Visual automations and triggers on paid tiers{" "}
                  <a href="https://www.mailerlite.com/features/marketing-automation" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Journey builder and segmentation on Standard+{" "}
                  <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Monetization</td>
                <td className="p-3">Basic ecommerce features and product blocks; integrate stores{" "}
                  <a href="https://www.mailerlite.com/features" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">No native ad network; ecommerce & upsell via integrations/add‑ons</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">SMS</td>
                <td className="p-3">No native SMS; use third‑party integrations</td>
                <td className="p-3">SMS add‑on integrated with journeys{" "}
                  <a href="https://mailchimp.com/pricing/sms-marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Reviews snapshot</td>
                <td className="p-3">Praised for simplicity and value for small lists{" "}
                  <a href="https://www.g2.com/products/mailerlite/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
                </td>
                <td className="p-3">Strong brand and features; concerns around pricing changes
                  {" "}
                  <a href="https://www.g2.com/products/intuit-mailchimp-email-marketing/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Who should choose it</td>
                <td className="p-3">Choose MailerLite for budget‑friendly email with solid basics and clean UI.</td>
                <td className="p-3">Choose Mailchimp for broader marketing add‑ons, templates, and ecosystem.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a href="#" className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">Try MailerLite — add your affiliate link<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></a>
          <a href="#" className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">Try Mailchimp — add your affiliate link<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Pricing/features change frequently. Always verify on vendor sites.</p>
      </section>

      {/* Klaviyo vs Mailchimp (full table) */}
      <section id="klaviyo-vs-mailchimp" className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Klaviyo vs Mailchimp</h2>
          <span className="text-xs text-muted-foreground">Last updated: Sep 2025</span>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Klaviyo</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Ecommerce‑first: deep Shopify/BigCommerce integrations</li>
              <li>Advanced segmentation, flows, and predictive analytics</li>
              <li>
                <a href="https://www.klaviyo.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">pricing</a>
                {" · "}
                <a href="https://www.g2.com/products/klaviyo/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20">
            <h3 className="text-lg font-semibold">Mailchimp</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Broader marketing suite; suitable for non‑commerce SMBs</li>
              <li>Solid templates and simple journeys</li>
              <li>
                <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">pricing</a>
                {" · "}
                <a href="https://www.g2.com/products/intuit-mailchimp-email-marketing/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-secondary/60 to-accent/10 text-left">
              <tr>
                <th className="p-3 font-medium">Category</th>
                <th className="p-3 font-medium">Klaviyo</th>
                <th className="p-3 font-medium">Mailchimp</th>
              </tr>
            </thead>
            <tbody className="divide-y transition-colors [&>tr:nth-child(odd)]:bg-muted/30 [&>tr:hover]:bg-muted/50">
              <tr>
                <td className="p-3 font-medium">Free plan</td>
                <td className="p-3">Free tier available with limited sends/contacts for testing{" "}
                  <a href="https://www.klaviyo.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Free tier exists with constraints; trials/promos vary over time{" "}
                  <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Core paid pricing</td>
                <td className="p-3">Pricing grows with contact count and email/SMS usage for ecommerce stores{" "}
                  <a href="https://www.klaviyo.com/pricing" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Standard/Essentials/Premium; scales by contacts and sends{" "}
                  <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Automation</td>
                <td className="p-3">Advanced flows, event‑based triggers, predictive analytics{" "}
                  <a href="https://www.klaviyo.com/product/automation" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">Journey builder, behavioral targeting on higher tiers{" "}
                  <a href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Monetization</td>
                <td className="p-3">Deep ecommerce focus with segments, recommendations, AOV‑driving flows</td>
                <td className="p-3">Ecommerce via integrations; broader SMB marketing toolkit</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">SMS</td>
                <td className="p-3">Native SMS with tight email + SMS orchestration{" "}
                  <a href="https://www.klaviyo.com/sms" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
                <td className="p-3">SMS available as an add‑on and integrated with journeys{" "}
                  <a href="https://mailchimp.com/pricing/sms-marketing/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">source</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Reviews snapshot</td>
                <td className="p-3">Well‑regarded for ecommerce features; steeper learning curve for non‑commerce
                  {" "}
                  <a href="https://www.g2.com/products/klaviyo/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
                </td>
                <td className="p-3">Accessible UI and templates; some pricing/support concerns
                  {" "}
                  <a href="https://www.g2.com/products/intuit-mailchimp-email-marketing/reviews" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">G2</a>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Who should choose it</td>
                <td className="p-3">Choose Klaviyo if you run an ecommerce brand that needs deep Shopify/BigCommerce data and advanced flows.</td>
                <td className="p-3">Choose Mailchimp if you want an approachable suite for general SMB marketing beyond ecommerce.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a href="#" className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">Try Klaviyo — add your affiliate link<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></a>
          <a href="#" className="group inline-flex items-center justify-center rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">Try Mailchimp — add your affiliate link<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Pricing/features change frequently. Always verify on vendor sites.</p>
      </section>
    </div>
  );
}