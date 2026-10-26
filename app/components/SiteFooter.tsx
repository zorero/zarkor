import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/images/elementor/zarkor-logo-footer-white.svg" alt="זרקור" width={92} height={92} />
          <div>
            <h2>אין בעיות לפתור,<br />רק אמת לגלות.</h2>
            <p>אימון אישי לגברים עם אביחי, באשדוד או בזום.</p>
          </div>
        </div>
        <div>
          <h3>ניווט</h3>
          <div className="footer-links">
            <Link href="/about">אודות אביחי</Link>
            <Link href="/coaching-for-men">אימון לגברים</Link>
            <Link href="/process">התהליך</Link>
            <Link href="/faq">שאלות נפוצות</Link>
          </div>
        </div>
        <div>
          <h3>מדברים ?</h3>
          <div className="footer-links contact-links">
            <a href="tel:+972528260661"><Phone size={17} /> 052-8260661</a>
            <a href="mailto:zorero@gmail.com"><Mail size={17} /> zorero@gmail.com</a>
            <span><MapPin size={17} /> אשדוד</span>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/zarkor.life.coaching" target="_blank" rel="noreferrer" aria-label="פייסבוק"><Image src="/images/elementor/icon4.svg" alt="" width={45} height={45} aria-hidden="true" /></a>
            <a href="https://www.instagram.com/zarkor_life_coaching/" target="_blank" rel="noreferrer" aria-label="אינסטגרם"><Image src="/images/elementor/icon5.svg" alt="" width={45} height={45} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} זרקור. כל הזכויות שמורות.</span>
        <span>האתר אינו תחליף לטיפול רפואי או נפשי.</span>
      </div>
    </footer>
  );
}
