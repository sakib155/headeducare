export function extractKeywords(text) {
  if (!text) return [];
  const stopWords = new Set([
    "the","a","an","and","or","but","in","on","at","to","for","of","with","by",
    "from","as","is","was","are","were","be","been","being","have","has","had",
    "do","does","did","will","would","can","could","may","might","shall","should",
    "it","its","this","that","these","those","we","you","your","our","their",
    "they","them","he","she","his","her","not","no","nor","so","if","about",
    "into","over","after","before","between","under","above","below","out","up",
    "down","off","just","than","then","also","very","all","each","every","both",
    "few","more","most","some","any","new","one","two","what","which","who",
    "whom","why","how","when","where","here","there","through","during","before",
    "because","while","since","until","against","within","without","along",
    "among","around","despite","except","inside","near","outside","past",
    "per","since","through","throughout","toward","towards","upon","via",
  ]);
  const words = text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").split(/\s+/);
  const freq = {};
  words.forEach((w) => {
    if (w.length > 2 && !stopWords.has(w)) freq[w] = (freq[w] || 0) + 1;
  });
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([word]) => word);
}

export function getPageKeywords(h1, description) {
  const source = [h1, description].filter(Boolean).join(" ");
  return extractKeywords(source);
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Head Educare",
    url: "https://headedu.com",
    logo: "https://headedu.com/HEAD_horizontal.png",
    description: "Premier international education consultancy helping students pursue higher education across the globe.",
    sameAs: [
      "https://facebook.com/headedu",
      "https://wa.me/8801XXXXXXXXX",
    ],
  };
}

export function generateWebPageSchema(title, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url || "https://headedu.com",
    publisher: { "@type": "Organization", name: "Head Educare" },
  };
}

export function generateFaqSchema(items) {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: typeof item === "string" ? item : (item.question || item.q || ""),
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof item === "string" ? "" : (item.answer || item.a || ""),
      },
    })),
  };
}

export function generateBreadcrumbSchema(items) {
  if (!items?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildSchemaArray(...schemas) {
  return schemas.filter(Boolean);
}