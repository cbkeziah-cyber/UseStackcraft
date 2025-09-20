export type AffiliateId =
  | "newsletter-launch"
  | "lead-magnet-funnel"
  | "consulting-pipeline"
  | "post-purchase-email"
  | "course-launch"
  | "local-reactivation";

// Put your real affiliate URLs here when ready
const AFFILIATE_LINKS: Record<AffiliateId, string | undefined> = {
  "newsletter-launch": undefined,
  "lead-magnet-funnel": undefined,
  "consulting-pipeline": undefined,
  "post-purchase-email": undefined,
  "course-launch": undefined,
  "local-reactivation": undefined,
};

type UtmOptions = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  fallback?: string; // used if link not set above
};

function appendUtm(urlStr: string, opts: UtmOptions) {
  const {
    source = "site",
    medium = "use-cases",
    campaign,
    content = "cta",
    term,
  } = opts;

  try {
    const url = new URL(urlStr);
    url.searchParams.set("utm_source", source);
    url.searchParams.set("utm_medium", medium);
    if (campaign) url.searchParams.set("utm_campaign", campaign);
    if (content) url.searchParams.set("utm_content", content);
    if (term) url.searchParams.set("utm_term", term);
    return url.toString();
  } catch {
    // If invalid URL (e.g., "#"), return as-is
    return urlStr;
  }
}

export function getAffiliateUrl(id: AffiliateId, opts: UtmOptions = {}) {
  const base = AFFILIATE_LINKS[id] ?? opts.fallback;
  if (!base) return "#";
  const campaign = opts.campaign ?? id;
  return appendUtm(base, { ...opts, campaign });
}