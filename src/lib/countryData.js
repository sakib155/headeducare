// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for country data.
//
// The database (admin panel) is the authority for the fields admins edit:
// image_url, flag_url, description, cost_info, visa_info, popular_courses.
// The static fallback keeps the rich content the DB does not hold:
// tuition_fees, language_requirements, intakes, salaries, checklists, scholarships.
//
// fetchMergedCountries() returns DB-on-top / fallback-underneath for every page,
// so an image changed in the admin panel updates everywhere with zero code edits.
// ─────────────────────────────────────────────────────────────────────────────
import { countriesFallback } from "../pages/country/countriesFallback";
import { api } from "./apiClient";

const slugOf = (c) =>
  c?.slug ??
  (c?.route || "").split("/").filter(Boolean).pop() ??
  (c?.name || c?.country || "").toLowerCase().replace(/[^a-z0-9-]+/g, "-");

// DB (live) fields override fallback; fallback keeps the rich content.
const mergeCountry = (live, fallback) => ({
  ...(fallback || {}),
  ...live,
  id: live?.id ?? fallback?.id,
  slug: slugOf(live) || fallback?.slug,
  name: live?.name ?? live?.country ?? fallback?.name ?? fallback?.country,
});

// Live DB data merged over the static fallback, filtered to supplied slugs (if any).
export async function fetchMergedCountries(allowedSlugs) {
  let live = [];
  try {
    const result = await api.fetchCountries();
    if (Array.isArray(result) && result.length) live = result;
  } catch {
    live = [];
  }

  const merged =
    live.length > 0
      ? live.map((lc) => {
          const fb = countriesFallback.find((f) => slugOf(f) === slugOf(lc));
          return mergeCountry(lc, fb);
        })
      : countriesFallback;

  if (Array.isArray(allowedSlugs) && allowedSlugs.length) {
    return merged.filter((c) => allowedSlugs.includes(slugOf(c)));
  }
  return merged;
}

export { slugOf, mergeCountry };
