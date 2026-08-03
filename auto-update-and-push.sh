#!/usr/bin/env bash
# ==============================================================================
# Cockroach Janta Party (CJP) Official Auto-Update & GitHub Sync Engine
# Automatically updates news engine, RSS feed, sitemap, commits & pushes to main
# ==============================================================================

set -e

CWD="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$CWD"

TODAY_DATE=$(date "+%d %B %Y")
TODAY_ISO=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "============================================================"
echo "⚡ CJP Auto-Update & Push Script Running for $TODAY_DATE"
echo "============================================================"

# 1. Run Node.js helper if present to inject today's news item
if [ -f "scripts/auto-update-cjp-news.js" ]; then
  echo "📰 Injecting today's breaking CJP news & RSS items..."
  node scripts/auto-update-cjp-news.js
fi

# 2. Stage all changed and new files
echo "📦 Staging changed files..."
git add .

# 3. Check if there are changes to commit
if git diff-index --quiet HEAD --; then
  echo "ℹ️ No new changes to commit. Site is already 100% up to date!"
else
  echo "✍️ Committing updates..."
  git commit -m "feat(auto-update): sync CJP news content, RSS & site updates [$TODAY_DATE]"
fi

# 4. Push to remote origin main
echo "🚀 Pushing changes to GitHub origin/main..."
git push origin main

echo "============================================================"
echo "✅ SUCCESS! Website updated & pushed to GitHub main branch!"
echo "============================================================"
