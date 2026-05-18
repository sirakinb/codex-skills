#!/usr/bin/env node

const site = process.argv[2];

if (!site) {
  console.error("Usage: node check-seo-foundation.mjs https://example.com");
  process.exit(1);
}

const baseUrl = new URL(site);
baseUrl.pathname = "/";
baseUrl.search = "";
baseUrl.hash = "";

function absolute(pathname) {
  return new URL(pathname, baseUrl).toString();
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "seo-ops/1.0" },
  });
  return {
    ok: response.ok,
    status: response.status,
    text: await response.text(),
  };
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => match[1].trim());
}

function tagValue(html, pattern) {
  const match = html.match(pattern);
  return match?.[1]?.trim() || "";
}

async function inspectPage(url) {
  try {
    const response = await fetchText(url);
    const html = response.text;
    const title = tagValue(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
    const description = tagValue(html, /<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
      || tagValue(html, /<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
    const canonical = tagValue(html, /<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i);
    const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
    const noindex = /<meta\s+[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html);

    return {
      url,
      status: response.status,
      title,
      hasDescription: Boolean(description),
      canonical,
      h1Count,
      noindex,
    };
  } catch (error) {
    return {
      url,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

const robotsUrl = absolute("/robots.txt");
const sitemapUrl = absolute("/sitemap.xml");

const result = {
  site: baseUrl.toString(),
  robots: null,
  sitemap: null,
  sampledPages: [],
};

try {
  const robots = await fetchText(robotsUrl);
  result.robots = {
    url: robotsUrl,
    status: robots.status,
    exists: robots.ok,
    referencesSitemap: /sitemap:/i.test(robots.text),
  };
} catch (error) {
  result.robots = {
    url: robotsUrl,
    exists: false,
    error: error instanceof Error ? error.message : String(error),
  };
}

try {
  const sitemap = await fetchText(sitemapUrl);
  const urls = sitemap.ok ? extractLocs(sitemap.text) : [];
  result.sitemap = {
    url: sitemapUrl,
    status: sitemap.status,
    exists: sitemap.ok,
    urlCount: urls.length,
  };
  result.sampledPages = await Promise.all(urls.slice(0, 10).map(inspectPage));
} catch (error) {
  result.sitemap = {
    url: sitemapUrl,
    exists: false,
    error: error instanceof Error ? error.message : String(error),
  };
}

console.log(JSON.stringify(result, null, 2));
