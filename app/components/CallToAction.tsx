import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">שיחת התאמה ללא עלות</p>
          <h2>לא חייבים להבין הכול לפני שמתחילים לדבר.</h2>
          <p>שיחה קצרה כדי לבדוק מה אתה מחפש, מה אני מציע, והאם נכון לנו לצאת לדרך יחד.</p>
        </div>
        <Link className="button button-light" href="/contact">
          <MessageCircle size={19} /> לקביעת שיחה <ArrowLeft size={18} />
        </Link>
      </div>
    </section>
  );
}
