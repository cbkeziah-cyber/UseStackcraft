import { getAffiliateUrl } from "@/lib/affiliates";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">Use‑Cases</h1>
      <p className="mt-2 text-muted-foreground">
        Real workflows for creators, consultants, and SMBs showing how to stack tools to solve specific jobs.
      </p>

      {/* Quick overview cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a href="#newsletter-launch" className="group rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20 ring-1 ring-transparent hover:ring-primary/20">
          <h3 className="font-medium">Creator: Newsletter Launch Stack</h3>
          <p className="mt-1 text-sm text-muted-foreground">Capture → Welcome → Weekly send → Monetize</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-0.5">Beehiiv/ConvertKit</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Notion/Airtable</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Zapier/Make</span>
          </div>
        </a>
        <a href="#lead-magnet-funnel" className="group rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20 ring-1 ring-transparent hover:ring-primary/20">
          <h3 className="font-medium">SMB: Lead Magnet Funnel</h3>
          <p className="mt-1 text-sm text-muted-foreground">Landing page → Email nurture → Booking</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-0.5">Mailchimp/MailerLite</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Calendly</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Webflow/Framer</span>
          </div>
        </a>
        <a href="#consulting-pipeline" className="group rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20 ring-1 ring-transparent hover:ring-primary/20">
          <h3 className="font-medium">Consultant: Discovery → Close Pipeline</h3>
          <p className="mt-1 text-sm text-muted-foreground">Intake → Qualify → Proposal → Invoice</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-0.5">Typeform/Tally</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">HubSpot/Notion</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Stripe</span>
          </div>
        </a>
        <a href="#post-purchase-email" className="group rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20 ring-1 ring-transparent hover:ring-primary/20">
          <h3 className="font-medium">E‑com: Post‑Purchase Email System</h3>
          <p className="mt-1 text-sm text-muted-foreground">Cross‑sell → Reviews → Replenishment</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-0.5">Klaviyo/Mailchimp</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Shopify</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Judge.me/Loox</span>
          </div>
        </a>
        <a href="#course-launch" className="group rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20 ring-1 ring-transparent hover:ring-primary/20">
          <h3 className="font-medium">Creator: Course Launch Sequence</h3>
          <p className="mt-1 text-sm text-muted-foreground">Waitlist → Tease → Open cart → Close</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-0.5">ConvertKit/Beehiiv</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Lemon Squeezy/Gumroad</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Zapier</span>
          </div>
        </a>
        <a href="#local-reactivation" className="group rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/20 ring-1 ring-transparent hover:ring-primary/20">
          <h3 className="font-medium">Local: Reactivation + Reviews</h3>
          <p className="mt-1 text-sm text-muted-foreground">Win‑backs → Review ask → Referral loop</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-0.5">Twilio/Klaviyo SMS</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Google Reviews</span>
            <span className="rounded-md bg-secondary px-2 py-0.5">Calendly</span>
          </div>
        </a>
      </div>

      {/* Detailed sections */}
      <div className="mt-12 space-y-14">
        {/* Newsletter Launch */}
        <section id="newsletter-launch">
          <h2 className="text-xl font-semibold">Creator: Newsletter Launch Stack</h2>
          <p className="mt-2 text-muted-foreground">
            Launch a weekly newsletter and monetize via sponsorships, paid tiers, or product launches.
          </p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Stack</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>ESP: Beehiiv or ConvertKit</li>
                <li>Capture: Webflow/Framer form or native forms</li>
                <li>Content database: Notion or Airtable</li>
                <li>Automation: Zapier/Make for routing and tagging</li>
                <li>Monetization: Sponsorships, paid tier, affiliate embeds</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Workflow</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Set up domain + sender authentication in ESP.</li>
                <li>Create landing page with clear promise and social proof.</li>
                <li>Build a 3‑email welcome series and weekly template.</li>
                <li>Tag sources (waitlist, social, partner swaps) for attribution.</li>
                <li>Publish weekly; pitch sponsors after consistent open rates.</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">Automations</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>Auto‑tag by form UTM → personalized welcome content</li>
              <li>Engagement‑based pruning → win‑back sequence at 60 days</li>
              <li>RSS‑to‑email or editor template for weekly cadence</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <a href={getAffiliateUrl("newsletter-launch")} rel="noopener noreferrer nofollow sponsored" target="_blank" className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Get this stack (links coming)</a>
              <span className="text-muted-foreground">We'll add affiliate links you provide.</span>
            </div>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">Copy templates</h4>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="font-medium">Welcome 1: Deliver on the promise</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Welcome to {{newsletter_name}} — here's your {{lead_magnet}}

Hey {{first_name}},

I'm {{your_name}}. You're in! As promised, here's {{lead_magnet_link}}.

What to expect:
• 1 short email each {{cadence}} with {{topic_focus}}
• Examples, templates, and quick wins

Hit reply and tell me your #1 goal with {{topic}} — I read every reply.

— {{your_name}}`}
                </div>
              </div>
              <div>
                <p className="font-medium">Welcome 2: Story + soft CTA</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: How I went from {{starting_point}} to {{outcome}}

Quick story: {{2–4 lines of credibility + lesson}}.
Try this this week:
1) {{step_one}}
2) {{step_two}}
3) {{step_three}}

If you want the full checklist: {{resource_link}}.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Weekly issue skeleton</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: {{emoji}} {{issue_title}}

1) Insight: {{1–2 sentences}}
2) Example: {{short example}}
3) Template: {{one-liner + link}}
4) Tool of the week: {{tool}} → {{why}}

PS: Forward to a friend who's {{audience}}.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Sponsor pitch (cold outreach)</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Sponsor {{newsletter_name}} ({{audience}})

Hi {{name}},

We reach {{subscribers}} {{audience}} with {{open_rate}}% open, {{ctr}}% CTR. I think {{company}} is a fit.
Packages: {{1–2 lines}}. Media kit: {{link}}.
Open to a test in {{month}}?

— {{your_name}}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Funnel */}
        <section id="lead-magnet-funnel">
          <h2 className="text-xl font-semibold">SMB: Lead Magnet Funnel</h2>
          <p className="mt-2 text-muted-foreground">Turn cold visitors into booked calls with a simple guide or checklist.</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Stack</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>Landing: Webflow/Framer + SEO basics</li>
                <li>Email: Mailchimp or MailerLite</li>
                <li>Calendar: Calendly</li>
                <li>CRM: HubSpot free or Notion DB</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Workflow</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Offer a relevant checklist/guide; collect email.</li>
                <li>Deliver asset instantly; start a 5‑email nurture.</li>
                <li>CTA to book a discovery call via Calendly.</li>
                <li>Sync leads to CRM; auto‑stage and assign next action.</li>
                <li>No‑show automations: reminder SMS + quick reschedule link.</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">KPIs</h4>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>Landing conversion rate, lead → call rate, call → close rate</li>
              <li>Cost per lead (if running ads), revenue per lead</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <a href={getAffiliateUrl("lead-magnet-funnel")} rel="noopener noreferrer nofollow sponsored" target="_blank" className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Get this stack (links coming)</a>
              <span className="text-muted-foreground">We'll add affiliate links you provide.</span>
            </div>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">Copy templates</h4>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="font-medium">Lead magnet delivery</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Your {{lead_magnet}} inside

Hi {{first_name}}, here's your {{lead_magnet_link}}.
Start with page {{page}} — it takes ~{{minutes}} minutes.
When you're ready, book a quick {{call_length}} to map your next steps: {{calendly_link}}.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Nurture 1: Problem → Promise → Proof</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: The 3 mistakes that stall {{desired_outcome}}

• Mistake #1: {{mistake}} → Fix: {{fix}}
• Mistake #2: {{mistake}} → Fix: {{fix}}
• Mistake #3: {{mistake}} → Fix: {{fix}}

See how {{client}} did it in 2 weeks → {{case_study_link}}`}
                </div>
              </div>
              <div>
                <p className="font-medium">Booking CTA</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Want help implementing this?

I can audit your setup and give a 30‑day plan.
Pick a slot: {{calendly_link}}.
Reply "plan" if you want me to send the checklist first.`}
                </div>
              </div>
              <div>
                <p className="font-medium">No‑show SMS</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Hi {{first_name}} — this is {{your_name}}. Sorry we missed you!
Grab a new time here: {{calendly_link}} (takes 5s).`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Pipeline */}
        <section id="consulting-pipeline">
          <h2 className="text-xl font-semibold">Consultant: Discovery → Close Pipeline</h2>
          <p className="mt-2 text-muted-foreground">Qualify leads, propose fast, and collect payment with a tight loop.</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Stack</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>Intake: Typeform/Tally with scoring</li>
                <li>CRM: HubSpot or Notion Kanban</li>
                <li>Docs: Notion or Google Docs proposal</li>
                <li>Payments: Stripe checkout links</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Workflow</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Route high‑intent leads to calendar; nurture others.</li>
                <li>Auto‑create deal with stage and next task.</li>
                <li>Send proposal + Stripe link within 24 hours.</li>
                <li>Automate reminders and contract e‑signature.</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <a href={getAffiliateUrl("consulting-pipeline")} rel="noopener noreferrer nofollow sponsored" target="_blank" className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Get this stack (links coming)</a>
            <span className="text-muted-foreground">We'll add affiliate links you provide.</span>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">Copy templates</h4>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="font-medium">Intake confirmation</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Got your info — next step

Thanks {{first_name}}! I reviewed your answers. Based on {{pain_point}}, I recommend a {{call_length}} discovery call to map a 30‑day plan.
Grab a slot: {{calendly_link}}.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Qualify — not a fit (polite pass)</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Quick recommendation

Thanks for the details — I'm not the best fit for {{need}} right now.
Here are 2 resources that should help: {{resource_1}}, {{resource_2}}.
Cheering you on,
{{your_name}}`}
                </div>
              </div>
              <div>
                <p className="font-medium">Proposal cover email</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Proposal for {{project_name}}

Hi {{first_name}}, here's the proposal: {{proposal_link}} (3 pages).
Scope, timeline, and price on page 1. You can pay via Stripe here: {{stripe_link}}.
Questions? Hit reply — happy to walk through on a 10‑min call.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Payment reminder (friendly)</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Nudge on {{project_name}}

Hi {{first_name}} — checking in on next steps. Once payment lands, we'll book kickoff and share the project doc.
Secure link: {{stripe_link}}.`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Post‑Purchase Email */}
        <section id="post-purchase-email">
          <h2 className="text-xl font-semibold">E‑commerce: Post‑Purchase Email System</h2>
          <p className="mt-2 text-muted-foreground">Increase LTV with tailored flows after the first order.</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Stack</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>ESP: Klaviyo or Mailchimp for Shopify</li>
                <li>Reviews: Judge.me/Loox</li>
                <li>Analytics: Source/UTM tracking</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Workflow</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Order‑triggered flow: confirm → educate → cross‑sell.</li>
                <li>Ask for review at delivery +7 days with incentive.</li>
                <li>Replenishment/reminder based on product lifecycle.</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <a href={getAffiliateUrl("post-purchase-email")} rel="noopener noreferrer nofollow sponsored" target="_blank" className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Get this stack (links coming)</a>
            <span className="text-muted-foreground">We'll add affiliate links you provide.</span>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">Copy templates</h4>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="font-medium">Order confirmation (value‑add)</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Order {{order_number}} — you're in good hands

Thanks {{first_name}}! While you wait, here are 3 tips to get the most from {{product_name}}:
• {{tip_1}}
• {{tip_2}}
• {{tip_3}}
Track your order: {{tracking_link}}.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Education/how‑to (post‑purchase)</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: {{product_name}} setup in 3 minutes

Here's the quick start:
1) {{step}}
2) {{step}}
3) {{step}}
Need help? Reply any time — real humans here.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Review request</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Quick favor?

If {{product_name}} has been helpful, could you leave a 20‑second review? {{review_link}}
As a thank‑you, here's {{incentive}}.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Replenishment reminder</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Running low on {{product_name}}?

Most customers reorder around {{days}} days. Refill now and save {{discount}}%: {{product_link}}.`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Launch */}
        <section id="course-launch">
          <h2 className="text-xl font-semibold">Creator: Course Launch Sequence</h2>
          <p className="mt-2 text-muted-foreground">Run a time‑boxed launch with warmup content and urgency windows.</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Stack</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>Email: ConvertKit/Beehiiv</li>
                <li>Checkout: Lemon Squeezy/Gumroad</li>
                <li>Hosting: Teachable/Thinkific or course in Notion</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Workflow</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Waitlist capture with promise of outcome.</li>
                <li>3‑part tease sequence with value emails.</li>
                <li>Open cart (72–120h), social proof, FAQs.</li>
                <li>Close with last‑chance reminders and bonuses.</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <a href={getAffiliateUrl("course-launch")} rel="noopener noreferrer nofollow sponsored" target="_blank" className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Get this stack (links coming)</a>
            <span className="text-muted-foreground">We'll add affiliate links you provide.</span>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">Copy templates</h4>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="font-medium">Waitlist confirm</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: You're on the list ✅

Launch date: {{date}}. What you'll get: {{3 bullets of outcomes}}.
Hit reply with your #1 question so I can bake it into the lessons.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Tease 1: Value lesson</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Lesson: {{topic}} in 5 minutes

Mini‑lesson:
• Step 1: {{step}}
• Step 2: {{step}}
• Step 3: {{step}}

Next email: {{next_tease_topic}}.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Open cart</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Enrollment is open (closes {{close_date}})

The {{course_name}} is live. Early‑bird ends {{end_date}}.
Enroll: {{checkout_link}}

Includes: {{modules_count}} modules, templates, and weekly Q&A.`}
                </div>
              </div>
              <div>
                <p className="font-medium">Last chance</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: Closes in {{hours_left}} hours

Quick reminder: doors close tonight. If you're in, this is the moment.
Join here: {{checkout_link}}
If not now, I hope the free lessons helped!`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Reactivation */}
        <section id="local-reactivation">
          <h2 className="text-xl font-semibold">Local: Reactivation + Reviews</h2>
          <p className="mt-2 text-muted-foreground">Win back lapsed customers and drive review velocity.</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Stack</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
                <li>SMS: Twilio or Klaviyo SMS</li>
                <li>Email: Mailchimp/MailerLite</li>
                <li>Bookings: Calendly</li>
              </ul>
            </div>
            <div className="rounded-lg border p-5">
              <h3 className="font-medium">Workflow</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Segment lapsed customers by last visit/product.</li>
                <li>Send limited‑time win‑back offer via SMS + email.</li>
                <li>After visit, trigger review ask with direct link.</li>
                <li>Referral CTA for friends/family with incentive.</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <a href={getAffiliateUrl("local-reactivation")} rel="noopener noreferrer nofollow sponsored" target="_blank" className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">Get this stack (links coming)</a>
            <span className="text-muted-foreground">We'll add affiliate links you provide.</span>
          </div>
          <div className="mt-4 rounded-lg border p-5">
            <h4 className="font-medium">Copy templates</h4>
            <div className="mt-3 space-y-4 text-sm">
              <div>
                <p className="font-medium">Win‑back SMS</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Hey {{first_name}} — we miss you at {{brand}}! Come back this week and get {{offer}}. Book: {{booking_link}} (2 taps).`}
                </div>
              </div>
              <div>
                <p className="font-medium">Win‑back email</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: {{first_name}}, we saved you {{offer}}

It's been a while — here's {{offer}} if you book by {{deadline}}.
Grab a slot: {{booking_link}}`}
                </div>
              </div>
              <div>
                <p className="font-medium">Review ask SMS</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Thanks for visiting {{brand}}! Mind leaving a 15‑second review? {{review_link}} — it helps a ton 🙏`}
                </div>
              </div>
              <div>
                <p className="font-medium">Referral ask email</p>
                <div className="mt-1 rounded-md bg-muted/50 p-3 font-mono text-xs whitespace-pre-wrap">
{`Subject: A favor (and a thank‑you)

Know someone who'd love {{service}}? Forward this and we'll give you {{referral_incentive}} when they book: {{booking_link}}.`}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}