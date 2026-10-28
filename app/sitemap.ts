import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zarkor-journey.zorero.workers.dev";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/coaching-for-men`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/process`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/articles`, changeFrequency: "weekly", priority: 0.7 },
  ];
}
