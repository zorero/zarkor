import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://zarkorjourney.co.il/sitemap.xml",
    host: "https://zarkorjourney.co.il",
  };
}
