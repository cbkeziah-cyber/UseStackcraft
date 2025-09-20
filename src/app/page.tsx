import { Sparkles, Mail, Search, Workflow, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-center bg-cover opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop)",
          }}
        />
        {/* Soft grid overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-transparent to-primary/10" />
        {/* Accent blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 -z-10 rounded-full bg-gradient-to-br from-primary/30 via-blue-300/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 -z-10 rounded-full bg-gradient-to-tr from-blue-400/20 via-primary/20 to-transparent blur-3xl" />
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="max-w-3xl relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/50 px-3 py-1 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Smarter stacks for small teams
            </span>
            <h1 className="mt-3 text-4xl sm:text-6xl font-bold leading-tight text-foreground">
              From <span className="relative inline-block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-[-6px] bottom-1 h-2 -z-10 rounded bg-primary/15 rotate-[-2deg] blur-[1px]"
                />
                click to customer
              </span>—on autopilot
            </h1>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">
              We help small businesses select and stack the right tech tools to automate online marketing—save time, cut costs, and grow consistently.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {/* Primary CTA */}
              <a href="#featured" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:shadow-md">
                <span>Explore Featured Picks</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#email" className="group inline-flex items-center gap-2 rounded-md border border-primary/30 bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30">
                <span>Start with Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate disclosure (light) */}
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <p className="text-xs text-muted-foreground">
          Note: Some links are affiliate links. If you click and sign up, we may earn a commission at no extra cost to you. <a className="underline" href="/disclosure">Learn more</a>.
        </p>
      </div>

      {/* Featured */}
      <section id="featured" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2"><Sparkles className="h-5 w-5" /> Featured Picks</h2>
        <div className="mt-1 h-1 w-10 rounded bg-primary/30" />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* beehiiv */}
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">beehiiv — Newsletter & Growth</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Launch a newsletter with built‑in growth tools, recommendations, and monetization.
                </p>
              </div>
              <span className="text-xs rounded-full bg-secondary px-2 py-1 text-secondary-foreground">Email</span>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Free plan to start, scalable as you grow</li>
              <li>Referrals, recommendations, audience analytics</li>
              <li>Simple landing pages and forms</li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {/* Replace the placeholder with your affiliate URL */}
              <a
                href="https://www.beehiiv.com?via=YOUR_AFF_ID"
                className="group inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
                rel="nofollow sponsored noopener"
              >
                <span>Try beehiiv</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="/reviews" className="text-sm underline">Learn more →</a>
            </div>
          </div>

          {/* Mailchimp */}
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">Mailchimp — Email Marketing</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  All‑in‑one email marketing with automations, templates, and integrations.
                </p>
              </div>
              <span className="text-xs rounded-full bg-secondary px-2 py-1 text-secondary-foreground">Email</span>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Prebuilt journeys and welcome series</li>
              <li>Drag‑and‑drop editor, forms, and segments</li>
              <li>Integrates with most site platforms and CRMs</li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {/* Replace the placeholder with your affiliate URL */}
              <a
                href="https://mailchimp.com/?aff=YOUR_AFF_ID&utm_source=site&utm_medium=site"
                className="group inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
                rel="nofollow sponsored noopener"
              >
                <span>Try Mailchimp</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="/comparisons" className="text-sm underline">Compare options →</a>
            </div>
          </div>

          {/* SEMrush */}
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">SEMrush — SEO & Research</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Research keywords, analyze competitors, and find content ideas that rank.
                </p>
              </div>
              <span className="text-xs rounded-full bg-secondary px-2 py-1 text-secondary-foreground">SEO</span>
            </div>
            <ul className="mt-4 text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Keyword gaps and competitor reports</li>
              <li>Backlink audits and on‑page recommendations</li>
              <li>Great for comparisons and "best of" pages</li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {/* Replace the placeholder with your affiliate URL */}
              <a
                href="https://semrush.com/?ref=YOUR_AFF_ID"
                className="group inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
                rel="nofollow sponsored noopener"
              >
                <span>Try SEMrush</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="/blog/recurring-affiliate-programs" className="text-sm underline">Why we recommend it →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Email & Newsletters */}
      <section id="email" className="mx-auto max-w-6xl px-6 py-10 border-t border-border">
        <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2"><Mail className="h-5 w-5" /> Email & Newsletters</h2>
        <div className="mt-1 h-1 w-10 rounded bg-primary/30" />
        <p className="mt-2 text-sm text-muted-foreground">
          Capture leads and nurture them automatically. Start free, upgrade as your list grows.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">beehiiv</h3>
            <p className="text-sm text-muted-foreground mt-1">Newsletter platform with growth loops and monetization.</p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Referrals, recommendations, growth analytics</li>
              <li>Simple pages and forms</li>
            </ul>
            <a
              href="https://www.beehiiv.com?via=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Get started</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Mailchimp</h3>
            <p className="text-sm text-muted-foreground mt-1">Email marketing and automation for SMBs.</p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Journeys, templates, segmentation</li>
              <li>Forms and landing pages</li>
            </ul>
            <a
              href="https://mailchimp.com/?aff=YOUR_AFF_ID&utm_source=site&utm_medium=site"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Get started</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">ConvertKit</h3>
            <p className="text-sm text-muted-foreground mt-1">Creator‑friendly email platform with simple automations.</p>
            <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Visual automations and tagging</li>
              <li>Great for newsletters and products</li>
            </ul>
            <a
              href="https://convertkit.com?ref=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Get started</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SEO & Content */}
      <section id="seo" className="mx-auto max-w-6xl px-6 py-10 border-t border-border">
        <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2"><Search className="h-5 w-5" /> SEO & Content</h2>
        <div className="mt-1 h-1 w-10 rounded bg-primary/30" />
        <p className="mt-2 text-sm text-muted-foreground">
          Find demand, create comparisons and guides, and measure what moves the needle.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">SEMrush</h3>
            <p className="text-sm text-muted-foreground mt-1">Comprehensive SEO suite for research and auditing.</p>
            <a
              href="https://semrush.com/?ref=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Try SEMrush</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Jasper AI</h3>
            <p className="text-sm text-muted-foreground mt-1">AI‑assisted writing to speed up drafts and outlines.</p>
            <a
              href="https://www.jasper.ai?ref=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Try Jasper</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Surfer SEO</h3>
            <p className="text-sm text-muted-foreground mt-1">On‑page optimization and content scoring.</p>
            <a
              href="https://surferseo.com?ref=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Try Surfer</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Automation & Funnels */}
      <section id="automation" className="mx-auto max-w-6xl px-6 py-10 border-t border-border">
        <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2"><Workflow className="h-5 w-5" /> Automation & Funnels</h2>
        <div className="mt-1 h-1 w-10 rounded bg-primary/30" />
        <p className="mt-2 text-sm text-muted-foreground">
          Connect your stack and turn traffic into customers automatically.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Zapier</h3>
            <p className="text-sm text-muted-foreground mt-1">Automate repetitive tasks between your favorite apps.</p>
            <a
              href="https://zapier.com?ref=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Try Zapier</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">ClickFunnels</h3>
            <p className="text-sm text-muted-foreground mt-1">Build funnels and landing pages that convert.</p>
            <a
              href="https://clickfunnels.com?aff=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Try ClickFunnels</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">ActiveCampaign</h3>
            <p className="text-sm text-muted-foreground mt-1">Email automation + lightweight CRM in one.</p>
            <a
              href="https://activecampaign.com?ref=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Try ActiveCampaign</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="mx-auto max-w-6xl px-6 py-10 border-t border-border">
        <h2 className="text-2xl font-semibold tracking-tight text-primary flex items-center gap-2"><BarChart3 className="h-5 w-5" /> Analytics</h2>
        <div className="mt-1 h-1 w-10 rounded bg-primary/30" />
        <p className="mt-2 text-sm text-muted-foreground">
          Measure the essentials: traffic, clicks to partner links, and revenue.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Google Analytics 4</h3>
            <p className="text-sm text-muted-foreground mt-1">Track sessions, events, and conversions across your site.</p>
            <a
              href="https://marketingplatform.google.com/about/analytics/"
              className="mt-4 inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
              rel="noopener"
            >
              Learn more
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Bitly</h3>
            <p className="text-sm text-muted-foreground mt-1">Shorten, brand, and track outbound affiliate clicks.</p>
            <a
              href="https://bitly.com/?ref=YOUR_AFF_ID"
              className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"
              rel="nofollow sponsored noopener"
            >
              <span>Try Bitly</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Looker Studio</h3>
            <p className="text-sm text-muted-foreground mt-1">Blend GA4 and revenue sheets for a simple KPI dashboard.</p>
            <a
              href="https://lookerstudio.google.com/"
              className="mt-4 inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
              rel="noopener"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Help me choose */}
      <section id="guides" className="mx-auto max-w-6xl px-6 py-12 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Not sure where to start?</h3>
            <p className="text-sm text-muted-foreground mt-1">Read the short playbook to set up your stack in a weekend.</p>
            <a href="/resources" className="group mt-4 inline-flex items-center gap-1 rounded-md border border-primary/30 bg-secondary/40 px-3 py-2 text-sm font-medium transition hover:bg-secondary/70 hover:ring-2 hover:ring-primary/30"><span>Get the Playbook</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Compare tools</h3>
            <p className="text-sm text-muted-foreground mt-1">Side‑by‑side comparisons to help you decide quickly.</p>
            <a href="/comparisons" className="mt-4 inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary">See comparisons</a>
          </div>
          <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/40 hover:shadow-lg">
            <h3 className="font-medium">Deep dives & reviews</h3>
            <p className="text-sm text-muted-foreground mt-1">Real use‑cases, templates, and setup walkthroughs.</p>
            <a href="/reviews" className="mt-4 inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary">Browse reviews</a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-lg font-medium">Ready when you are</p>
            <p className="text-sm text-muted-foreground">Pick one tool, ship one setup, and let it compound.</p>
          </div>
          <a href="#featured" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:shadow-md">
            <span>Explore tools</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}