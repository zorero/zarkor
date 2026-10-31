import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zarkor-journey.zorero.workers.dev"),
  title: {
    default: "זרקור | אימון אישי לגברים עם אביחי",
    template: "%s",
  },
  description:
    "אימון אישי לגברים שרוצים לעצור, להתחבר לעצמם ולבחור את הדרך שלהם. עם אביחי צוררו, באשדוד או בזום.",
  applicationName: "זרקור",
  openGraph: {
    type: "website",
    locale: "he_IL",
    siteName: "זרקור, אימון אישי לגברים",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/images/elementor/zarkor-logo-favi.png?v=2", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/elementor/zarkor-logo-favi.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://zarkor-journey.zorero.workers.dev/#organization",
      name: "זרקור - אימון אישי",
      alternateName: "Zarkor Journey",
      url: "https://zarkor-journey.zorero.workers.dev/",
      logo: "https://zarkor-journey.zorero.workers.dev/images/elementor/zarkor-logo-1.svg",
      founder: { "@id": "https://zarkor-journey.zorero.workers.dev/#avihai" },
      telephone: "+972-52-826-0661",
      address: {
        "@type": "PostalAddress",
        streetAddress: "שדרות הרצל 1",
        addressLocality: "אשדוד",
        addressCountry: "IL",
      },
      sameAs: [
        "https://www.facebook.com/zarkor.life.coaching",
        "https://www.instagram.com/zarkor_life_coaching/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://zarkor-journey.zorero.workers.dev/#avihai",
      name: "אביחי צוררו",
      jobTitle: "מאמן אישי לגברים",
      worksFor: { "@id": "https://zarkor-journey.zorero.workers.dev/#organization" },
      url: "https://zarkor-journey.zorero.workers.dev/about",
      telephone: "+972-52-826-0661",
      email: "zorero@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "אשדוד",
        addressCountry: "IL",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://zarkor-journey.zorero.workers.dev/#website",
      url: "https://zarkor-journey.zorero.workers.dev/",
      name: "זרקור, אימון אישי לגברים",
      publisher: { "@id": "https://zarkor-journey.zorero.workers.dev/#organization" },
      inLanguage: "he-IL",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <a className="skip-link" href="#main-content">דלג לתוכן הראשי</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
