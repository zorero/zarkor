import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

const nav = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/coaching-for-men", label: "אימון לגברים" },
  { href: "/process", label: "התהליך" },
  { href: "/faq", label: "שאלות נפוצות" },
  { href: "/articles", label: "מאמרים" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="זרקור, חזרה לדף הבית">
          <Image src="/images/zarkor-logo.svg" alt="זרקור, אימון אישי לגברים" width={96} height={96} priority />
        </Link>

        <nav className="desktop-nav" aria-label="ניווט ראשי">
          {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>

        <Link className="header-cta" href="/contact">
          <MessageCircle size={18} aria-hidden="true" /> שיחת התאמה
        </Link>

        <details className="mobile-menu">
          <summary aria-label="פתיחת תפריט"><Menu size={26} /></summary>
          <nav aria-label="ניווט לנייד">
            {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link className="mobile-menu-cta" href="/contact">לקביעת שיחת התאמה</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
