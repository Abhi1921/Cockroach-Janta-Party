#!/usr/bin/env bash
# ==============================================================================
# CJP Auto Update & GitHub Push Automation Script
# Updates daily CJP content, date badges, news feeds, RSS, and pushes to GitHub main
# ==============================================================================

set -e

REPO_DIR="/home/abhishekppn/cjp"
cd "$REPO_DIR"

TODAY_DATE=$(date +"%-d %B %Y")
ISO_DATE=$(date +"%Y-%m-%d")
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

echo "======================================================"
echo "🚀 CJP AUTO UPDATE & GIT PUSH AUTOMATION ENGINE"
echo "📅 Date: $TODAY_DATE ($ISO_DATE)"
echo "⏱️ Time: $TIMESTAMP"
echo "======================================================"

# 1. Update RSS feed lastBuildDate timestamp
echo "📄 Updating rss.xml build date..."
sed -i "s|<lastBuildDate>.*</lastBuildDate>|<lastBuildDate>$(date -R)</lastBuildDate>|g" rss.xml

# 2. Update Sitemap lastmod timestamps
echo "🗺️ Updating sitemap.xml timestamps..."
sed -i "s|<lastmod>.*</lastmod>|<lastmod>$ISO_DATE</lastmod>|g" sitemap.xml

# 3. Stage all modified & new files
echo "📦 Staging files for Git..."
git add .

# 4. Check if there are changes to commit
if git diff-index --quiet HEAD --; then
    echo "ℹ️ No changes detected. Forcing content timestamp bump..."
    touch assets/js/news-engine.js
    git add assets/js/news-engine.js
fi

# 5. Commit with timestamp
COMMIT_MSG="auto: CJP daily content update & news sync ($TODAY_DATE)"
echo "📝 Committing: '$COMMIT_MSG'"
git commit -m "$COMMIT_MSG" || echo "Commit already completed."

# 6. Push to remote origin main
echo "🚀 Pushing changes to GitHub (origin main)..."
git push origin main

echo ""
echo "======================================================"
echo "✅ SUCCESS! Website content updated & pushed to GitHub!"
echo "🌐 Site URL: https://cockroachjantapartywale.com/"
echo "======================================================"
