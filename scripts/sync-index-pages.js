/**
 * CJP Index Code Sync Script
 * Automatically mirrors index.html to alias landing pages:
 * - cockroach-janta-party-wale.html
 * - cjp.html
 * - cockroach-janta-party.html
 * - cocroach-janata-party.html
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const indexPath = path.join(rootDir, 'index.html');

const targets = [
  { file: 'cockroach-janta-party-wale.html', slug: 'cockroach-janta-party-wale' },
  { file: 'cjp.html', slug: 'cjp' },
  { file: 'cockroach-janta-party.html', slug: 'cockroach-janta-party' },
  { file: 'cockroach-janata-party.html', slug: 'cockroach-janata-party' },
  { file: 'cocroach-janata-party.html', slug: 'cocroach-janata-party' }
];

function syncPages() {
  if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found!');
    return;
  }

  const indexContent = fs.readFileSync(indexPath, 'utf8');

  targets.forEach(target => {
    const targetPath = path.join(rootDir, target.file);
    const targetUrl = `https://cockroachjantapartywale.com/${target.slug}`;

    let pageContent = indexContent;

    // Replace canonical URL
    pageContent = pageContent.replace(
      /<link rel="canonical" href="https:\/\/cockroachjantapartywale\.com\/">/,
      `<link rel="canonical" href="${targetUrl}">`
    );

    // Replace Open Graph URL
    pageContent = pageContent.replace(
      /<meta property="og:url" content="https:\/\/cockroachjantapartywale\.com\/">/,
      `<meta property="og:url" content="${targetUrl}">`
    );

    // Replace data-page attribute on body tag
    pageContent = pageContent.replace(
      /<body class="" data-page="index" data-ticker="off">/,
      `<body class="" data-page="${target.slug}" data-ticker="off">`
    );

    fs.writeFileSync(targetPath, pageContent, 'utf8');
    console.log(`  └─ ✅ Synced index.html -> ${target.file} (data-page="${target.slug}")`);
  });
}

if (require.main === module) {
  console.log('[Auto-Sync] Syncing index.html to all alias pages...');
  syncPages();
  console.log('[Auto-Sync] All alias pages updated successfully!');
}

module.exports = { syncPages };
