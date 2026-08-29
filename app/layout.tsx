import type { Metadata } from "next";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zarkorjourney.co.il"),
  title: {
    default: "זרקור | אימון אישי לגברים עם אביחי",
    template: "%s | זרקור",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zarkorjourney.co.il/#organization",
      name: "זרקור",
      alternateName: "Zarkor Journey",
      url: "https://zarkorjourney.co.il/",
      logo: "https://zarkorjourney.co.il/images/zarkor-logo.svg",
      founder: { "@id": "https://zarkorjourney.co.il/#avihai" },
      sameAs: [
        "https://www.facebook.com/zarkor.life.coaching",
        "https://www.instagram.com/zarkor_life_coaching/",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://zarkorjourney.co.il/#avihai",
      name: "אביחי צוררו",
      jobTitle: "מאמן אישי לגברים",
      worksFor: { "@id": "https://zarkorjourney.co.il/#organization" },
      url: "https://zarkorjourney.co.il/about",
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
      "@id": "https://zarkorjourney.co.il/#website",
      url: "https://zarkorjourney.co.il/",
      name: "זרקור, אימון אישי לגברים",
      publisher: { "@id": "https://zarkorjourney.co.il/#organization" },
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
