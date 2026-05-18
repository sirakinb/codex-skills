# Lightweight Programmatic SEO Ops Setup Guide

This guide describes a simple SEO operations workflow that works for most websites without requiring paid SEO tools or analytics API setup.

## Goal

Create a repeatable system that helps a site get discovered, indexed, improved, and expanded over time.

The system should answer four questions:

1. Can search engines crawl the site?
2. Does Google know about the important URLs?
3. Which pages or tools should be created next?
4. Is the site publishing and improving consistently?

## Minimum Setup

The minimum setup should work without Google Analytics, Ahrefs, DataForSEO, Semrush, or backlink tools.

You need:

- A live website.
- A public `robots.txt` file.
- A public `sitemap.xml` file.
- Indexable public pages.
- Useful page titles and meta descriptions.
- Canonical URLs.
- A simple content or tool-building plan.

## Google Search Console Recommendation

Google Search Console is the only external platform that should be recommended by default.

Manual setup:

1. Go to Google Search Console.
2. Add the website as a property.
3. Verify ownership using the easiest available method for the site.
4. Open the Sitemaps section.
5. Submit the sitemap URL, usually `https://example.com/sitemap.xml`.
6. Use URL Inspection to request indexing for the homepage and highest-priority pages.

This is enough for most users. API access is optional.

## Optional Advanced GSC API

Only add GSC API automation if the user wants reporting inside a local dashboard.

With GSC API connected, a dashboard can show:

- Queries.
- Pages.
- Clicks.
- Impressions.
- Average position.
- Indexing or inspection status, where available.

Without GSC API, the dashboard should show a manual checklist instead of fake zeros.

## What Not To Include By Default

Do not include these in the public setup unless the user explicitly asks:

- GA4.
- Ahrefs.
- Domain Rating.
- Backlink counts.
- DataForSEO.
- Semrush.
- App Store Connect.
- Paid SEO provider assumptions.

These can be internal or advanced workflows, but they make the public setup harder than necessary.

## Dashboard Sections

A useful lightweight dashboard can include:

- Overview: technical status, sitemap URL count, clean URL count, content/tool queue.
- Search Console: manual setup checklist, or API data if connected.
- Technical URLs: status code, canonical status, title, description, indexability.
- Tool Builder: queued tools/pages, status, next build target.
- Plan: 30/60/90-day roadmap.

## 90-Day SEO Plan

Days 1-30:

- Confirm `robots.txt` and `sitemap.xml`.
- Submit sitemap to Google Search Console.
- Request indexing for priority pages.
- Clean weak titles and meta descriptions.
- Pick the first 3-5 tools or high-intent pages to build.

Days 31-60:

- Publish tools or pages at a consistent cadence.
- Add internal links from related pages.
- Improve pages with weak descriptions, unclear headings, or thin content.
- Check GSC manually for first impressions and indexed pages.

Days 61-90:

- Expand topics that start earning impressions.
- Refresh pages that are indexed but not earning clicks.
- Add supporting pages around the best-performing tools or service pages.
- Keep the publishing cadence steady.

## Automation Guidance

Automation should be optional and transparent.

A safe automation flow:

1. Maintain a queue of tools or pages to build.
2. Generate one item per scheduled run.
3. Run checks/builds.
4. Commit changes only if checks pass.
5. Push automatically only if the user explicitly asked for unattended publishing.

Avoid publishing hundreds of pages at once.

## Reporting Language

Use precise labels:

- `Not connected`: an API or external source is not configured.
- `Manual step`: the user needs to do something in an external dashboard.
- `No data yet`: the source is connected, but no rows are available.
- `0`: only use this when a connected source returned a real zero.

