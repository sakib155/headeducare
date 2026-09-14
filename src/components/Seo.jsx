import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { routesLookup, siteConfig } from "../data/seoMeta";

export default function AutoSeo({ children, faqItems, extraKeywords }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  const route = pathname.replace(/\/$/, "") || "/";
  const pageMeta = routesLookup[route];

  const title = pageMeta?.title || siteConfig.name;
  const desc = pageMeta?.name?.description || "";
  const keywords = pageMeta?.name?.keywords || extraKeywords?.join(", ") || "";
  const canonical = pageMeta?.canonical || `${siteConfig.url}${route}`;
  const ogImage = pageMeta?.property?.["og:image"] || `${siteConfig.url}${siteConfig.ogImage}`;

  useEffect(() => {
    document.title = title;
  }, [title]);

  const allSchema = pageMeta?.schema ? (Array.isArray(pageMeta.schema) ? pageMeta.schema : [pageMeta.schema]) : [];
  if (faqItems?.length) {
    allSchema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: typeof item === "string" ? item : (item.question || item.q || ""),
        acceptedAnswer: {
          "@type": "Answer",
          text: typeof item === "string" ? "" : (item.answer || item.a || ""),
        },
      })),
    });
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <meta name="description" content={desc} />
        {keywords && <meta name="keywords" content={keywords} />}
        {pageMeta?.name && Object.entries(pageMeta.name).map(([k, v]) =>
          k !== "description" && k !== "keywords" && v ? <meta key={k} name={k} content={v} /> : null
        )}
        {pageMeta?.property && Object.entries(pageMeta.property).map(([k, v]) =>
          v ? <meta key={k} property={k} content={v} /> : null
        )}
        {allSchema.map((schema, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>
      <div ref={ref}>{children}</div>
    </>
  );
}