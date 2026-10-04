#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# HEAD EDUCARE — Production Deploy Script (cPanel / PHP + Vite)
#
# Usage:
#   ./deploy.sh              # build + prepare + zip (manual cPanel upload)
#   ./deploy.sh --ssh        # build + rsync over SSH to production server
#   ./deploy.sh --zip        # build + prepare + create dist.zip only
#   ./deploy.sh --check      # only run API/health checks against live site
#
# Before first deploy, set the values below (SSH or FTP credentials).
# ─────────────────────────────────────────────────────────────────────────────

set -e

# ── Deployment targets (FILL THESE IN) ───────────────────────────────────────
# SSH (recommended — fastest, best for verification)
SSH_HOST="${SSH_HOST:-your-cpanel-host.com}"      # e.g. headedu.com or server IP
SSH_USER="${SSH_USER:-cpanel_username}"
SSH_PORT="${SSH_PORT:-22}"
SSH_PATH="${SSH_PATH:-/home/username/public_html}"  # remote public_html path

# ZIP output (used by --zip and manual fallback)
ZIP_NAME="${ZIP_NAME:-headedu-dist.zip}"

# Live site URL for post-deploy health checks
SITE_URL="${SITE_URL:-https://headedu.com}"

# ── Colors ───────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; CYAN='\033[0;36m'; NC='\033[0m'
info()  { printf "${CYAN}[deploy]${NC} %s\n" "$1"; }
ok()    { printf "${GREEN}[ok]${NC} %s\n" "$1"; }
warn()  { printf "${YELLOW}[warn]${NC} %s\n" "$1"; }
fail()  { printf "${RED}[FAIL]${NC} %s\n" "$1"; exit 1; }

MODE="${1:---zip}"
cd "$(dirname "$0")"

# ─────────────────────────────────────────────────────────────────────────────
# STEP 1 — Build & prepare dist/
# ─────────────────────────────────────────────────────────────────────────────
prepare_dist() {
  info "Building production bundle..."
  npm run build

  info "Copying SSR front controller (index.php) into dist/..."
  [ -f index.php ] && cp index.php dist/index.php

  info "Copying .htaccess (SPA/SSR routing) into dist/..."
  [ -f .htaccess ] && cp .htaccess dist/.htaccess

  info "Copying PHP API endpoints into dist/api/..."
  mkdir -p dist/api
  if [ -d public/api ]; then
    cp public/api/*.php dist/api/ 2>/dev/null || true
  fi

  ok "dist/ prepared: $(ls dist | wc -l | tr -d ' ') items"
}

# ─────────────────────────────────────────────────────────────────────────────
# STEP 2 — Production API config guard
# ─────────────────────────────────────────────────────────────────────────────
check_api_config() {
  if grep -q "DB_USER.*root\|DB_PASS.*''" dist/api/config.php 2>/dev/null; then
    warn "dist/api/config.php still has default DB credentials (root / empty password)."
    warn "Edit dist/api/config.php OR export DB_* env vars before deploying:"
    echo ""
    echo "  export DB_HOST=localhost DB_NAME=headedu DB_USER=youruser DB_PASS=yourpass"
    echo ""
  fi
}

# ─────────────────────────────────────────────────────────────────────────────
# STEP 3 — Zip (manual cPanel File Manager upload)
# ─────────────────────────────────────────────────────────────────────────────
make_zip() {
  check_api_config
  info "Creating ${ZIP_NAME} from dist/ contents..."
  rm -f "$ZIP_NAME"
  (cd dist && zip -r "../${ZIP_NAME}" . >/dev/null)
  ok "Created ${ZIP_NAME} ($(du -h "$ZIP_NAME" | cut -f1))"
  echo ""
  echo "Next steps (manual):"
  echo "  1. cPanel → File Manager → open public_html"
  echo "  2. Select all files, delete them"
  echo "  3. Upload ${ZIP_NAME}, then 'Extract' into public_html"
  echo "  4. Re-upload .env values & set dist/api/config.php DB credentials"
}

# ─────────────────────────────────────────────────────────────────────────────
# STEP 4 — Deploy via SSH (rsync)
# ─────────────────────────────────────────────────────────────────────────────
deploy_ssh() {
  command -v rsync >/dev/null || fail "rsync not found. Install it: brew install rsync"
  check_api_config
  info "Syncing dist/ → ${SSH_USER}@${SSH_HOST}:${SSH_PATH}"
  rsync -avz --delete -e "ssh -p ${SSH_PORT}" \
    dist/ \
    "${SSH_USER}@${SSH_HOST}:${SSH_PATH}/"
  ok "Uploaded to server."
}

# ─────────────────────────────────────────────────────────────────────────────
# STEP 5 — Health checks (API endpoints + page load)
# ─────────────────────────────────────────────────────────────────────────────
run_checks() {
  local base="${SITE_URL}"
  info "Running health checks against ${base} ..."

  # 1. Homepage loads
  if curl -sL -o /dev/null -w "%{http_code}" "$base/" | grep -q "200\|301\|302"; then
    ok "Homepage ${base}/ responds"
  else
    fail "Homepage did not respond with a 200/3xx"
  fi

  # 2. API endpoints (list all PHP endpoints from dist/api)
  for ep in countries services testimonials settings contacts leads; do
    code=$(curl -sL -o /dev/null -w "%{http_code}" "$base/api/$ep.php")
    if [ "$code" = "200" ]; then
      ok "/api/${ep}.php → ${code}"
    else
      warn "/api/${ep}.php → ${code} (check config.php DB creds)"
    fi
  done

  # 3. Sample data JSON valid?
  local sample
  sample=$(curl -sL "$base/api/countries.php")
  if echo "$sample" | head -c1 | grep -qE '\[|\{'; then
    ok "/api/countries.php returns valid JSON"
  else
    fail "/api/countries.php returned non-JSON (DB down or CORS issue)"
  fi
}

# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────
case "$MODE" in
  --ssh)
    prepare_dist
    deploy_ssh
    run_checks
    ;;
  --check)
    run_checks
    ;;
  --zip)
    prepare_dist
    make_zip
    ;;
  *)
    prepare_dist
    make_zip
    warn "Run './deploy.sh --ssh' to push directly to the server."
    warn "Run './deploy.sh --check' to verify the live site after upload."
    ;;
esac

echo ""
ok "Done."
