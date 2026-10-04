#!/bin/bash
# Prepare the deployable SSR build for cPanel.
# Run: bash scripts/prepare-deploy.sh
# Result: ./dist/ contains index.php + SSR .htaccess + built assets.
# Zip the CONTENTS of ./dist/ and upload into public_html.

set -e
cd "$(dirname "$0")/.."

echo "== Building production bundle =="
npm run build

echo "== Copying index.php (per-route SEO SSR) into dist =="
cp index.php dist/index.php

echo "== Copying SSR .htaccess (routes all requests to index.php) =="
cp .htaccess dist/.htaccess

echo ""
echo "Done. Deployable folder: ./dist"
echo ""
echo "Next steps:"
echo "  1. Set production DB credentials in dist/api/config.php"
echo "  2. zip -r headedu-dist.zip dist"
echo "  3. In cPanel: empty public_html, upload + extract the zip"
echo "  4. Verify: open a deep URL (e.g. /services) and View Source"
