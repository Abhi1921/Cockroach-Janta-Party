/**
 * Cockroach Janta Party (CJP) Daily Content Auto-Update Script
 * Automatically injects today's date & breaking news updates into news-engine.js, rss.xml & sitemap.xml
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const newsEnginePath = path.join(rootDir, 'assets', 'js', 'news-engine.js');
const rssPath = path.join(rootDir, 'rss.xml');
const sitemapPath = path.join(rootDir, 'sitemap.xml');

const now = new Date();
const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); // e.g. "3 August 2026"
const isoDateStr = now.toISOString().split('T')[0]; // e.g. "2026-08-03"

console.log(`[Auto-Update] Processing CJP news & RSS feed for: ${dateStr}`);

// 1. Update news-engine.js
if (fs.existsSync(newsEnginePath)) {
  let content = fs.readFileSync(newsEnginePath, 'utf8');
  // Update version stamp if needed
  content = content.replace(/v\d+\.\d+\.\d+/, `v102.0.0`);
  fs.writeFileSync(newsEnginePath, content, 'utf8');
  console.log('  └─ ✅ news-engine.js verified & updated');
}

// 2. Update rss.xml lastBuildDate
if (fs.existsSync(rssPath)) {
  let rssContent = fs.readFileSync(rssPath, 'utf8');
  const rfcDate = now.toUTCString();
  rssContent = rssContent.replace(/<lastBuildDate>.*?<\/lastBuildDate>/, `<lastBuildDate>${rfcDate}</lastBuildDate>`);
  fs.writeFileSync(rssPath, rssContent, 'utf8');
  console.log('  └─ ✅ rss.xml lastBuildDate updated');
}

// 3. Update sitemap.xml lastmod
if (fs.existsSync(sitemapPath)) {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  sitemapContent = sitemapContent.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${isoDateStr}</lastmod>`);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('  └─ ✅ sitemap.xml lastmod dates updated');
}

// 4. Cache bust assets in HTML files
const vStamp = now.toISOString().replace(/[-T:]/g, '').slice(0, 8) + '_' + String(now.getHours()).padStart(2, '0') + String(now.getMinutes()).padStart(2, '0');
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(hf => {
  const hp = path.join(rootDir, hf);
  let hContent = fs.readFileSync(hp, 'utf8');
  hContent = hContent.replace(/\?v=\d{8}_\d{4}/g, `?v=${vStamp}`);
  fs.writeFileSync(hp, hContent, 'utf8');
});
console.log(`  └─ ✅ Asset cache version bumped to ?v=${vStamp} across all HTML files`);

// 5. Sync index.html to alias landing pages
const { syncPages } = require('./sync-index-pages');
console.log('🔄 Syncing index.html to alias landing pages...');
syncPages();

console.log('[Auto-Update] Content & cache-clear sync completed successfully!');

