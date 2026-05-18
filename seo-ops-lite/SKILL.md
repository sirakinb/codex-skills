---
name: seo-ops-lite
description: Set up lightweight programmatic SEO operations for a website: sitemap and robots checks, metadata/canonical auditing, Google Search Console sitemap guidance, a 90-day SEO plan, and optional build automation. Use when users want SEO ops without requiring GA4, Ahrefs, DataForSEO, Semrush, or backlink metrics.
metadata:
  short-description: Lightweight SEO ops setup
---

# SEO Ops Lite

Use this skill to set up a practical SEO operations system for a site without forcing analytics or paid SEO tools.

## Principles

- Keep the minimum setup simple: live site, `robots.txt`, `sitemap.xml`, page metadata, canonical tags, and a plan.
- Recommend Google Search Console manually: add the property, submit the sitemap, and request indexing for priority pages.
- Treat GSC API as optional advanced reporting only.
- Do not require or mention GA4, Ahrefs, DataForSEO, Semrush, App Store Connect, backlink exchanges, domain rating, or paid SEO provider dashboards unless the user explicitly asks.
- Never invent SEO metrics. If a source is not connected, label it `Not connected`, `Manual step`, or `Unknown`.
- Prefer static/generated dashboards that work before APIs are connected.

## Workflow

1. Inspect the repo and identify the site type, build system, public/static folder, routing pattern, and deploy target if obvious.
2. Audit the SEO foundation:
   - `robots.txt` exists and allows public pages.
   - `sitemap.xml` exists and lists canonical public URLs.
   - Important pages have title, meta description, one H1, canonical URL, and indexable status.
3. Generate or update a lightweight dashboard:
   - show sitemap URL count, clean URL count, missing titles/descriptions, canonical warnings, and tool/content queue status.
   - show GSC as a manual setup checklist unless the user has explicitly connected the GSC API.
4. Create a simple SEO plan:
   - first 30 days: technical foundation, sitemap submission, initial tool/content targets.
   - days 31-60: publish tools/pages at a sane cadence, improve internal linking.
   - days 61-90: refresh weak pages, expand winning topics, monitor Search Console.
5. If requested, create a tool/content build queue and optional cron automation.
6. Verify with local checks/build commands and report exactly what was added.

## Scripts

Use `scripts/check-seo-foundation.mjs` for a quick public-site audit:

```bash
node path/to/seo-ops-lite/scripts/check-seo-foundation.mjs https://example.com
```

It checks `robots.txt`, `sitemap.xml`, and a sample of URLs from the sitemap, then prints JSON. Use it as a starting point, not as a complete crawler.

## References

Read `references/setup-guide.md` when the user asks for a guide, wants to understand the process, or needs Google Search Console setup instructions.

