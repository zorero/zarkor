import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://zarkor-journey.zorero.workers.dev/sitemap.xml",
    host: "https://zarkor-journey.zorero.workers.dev",
  };
}
