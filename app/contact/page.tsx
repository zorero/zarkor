import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { WhatsAppForm } from "../components/WhatsAppForm";

export const metadata: Metadata = {
  title: "יצירת קשר",
  description: "קביעת שיחת התאמה ללא עלות עם אביחי צוררו. אפשר לפנות בטלפון, בוואטסאפ או במייל.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="בוא נדבר" title="שיחת התאמה מתחילה בשאלה פשוטה: מה מביא אותך עכשיו ?">
        <p>אין צורך להכין נאום. משאירים פרטים או פונים ישירות, ונבדוק יחד אם התהליך מתאים.</p>
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <p className="eyebrow">פרטים ליצירת קשר</p>
            <h2>אפשר לפנות בדרך שנוחה לך</h2>
            <div className="direct-contact-list">
              <a href="https://wa.me/972528260661" target="_blank" rel="noreferrer"><MessageCircle /><span><b>WhatsApp</b><small>לשליחת הודעה ישירה</small></span></a>
              <a href="tel:+972528260661"><Phone /><span><b>052-8260661</b><small>לשיחה טלפונית</small></span></a>
              <a href="mailto:zorero@gmail.com"><Mail /><span><b>zorero@gmail.com</b><small>לפנייה במייל</small></span></a>
              <div><MapPin /><span><b>אשדוד או זום</b><small>בהתאם למה שמתאים לך</small></span></div>
            </div>
            <p className="contact-note">שיחת ההתאמה אינה כרוכה בעלות ואינה מחייבת להתחיל תהליך.</p>
          </div>
          <WhatsAppForm />
        </div>
      </section>
    </main>
  );
}
