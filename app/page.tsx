import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Check,
  Compass,
  HeartHandshake,
  Lightbulb,
  MapPin,
  MessageCircle,
  Route,
} from "lucide-react";
import { CallToAction } from "./components/CallToAction";

export const metadata: Metadata = {
  title: "אימון אישי לגברים באשדוד",
  description:
    "אימון אישי לגברים שרוצים להבין מה באמת עוצר אותם, לקבל החלטות וליצור שינוי שמחזיק. עם אביחי צוררו, בקליניקה באשדוד או בזום.",
  alternates: { canonical: "/" },
};

const fitQuestions = [
  "אתה עומד בפני החלטה חשובה ולא מצליח לבחור כיוון?",
  "משהו בזוגיות, בעבודה או בהורות מרגיש תקוע?",
  "מבחוץ הכול נראה בסדר, אבל בפנים אתה מרגיש שהחיים חולפים לידך?",
];

const strengths = [
  {
    icon: Brain,
    title: "שכל ורגש באותו חדר",
    text: "לא צריך לבחור בין ניתוח הגיוני לבין חיבור רגשי. באימון אנחנו משתמשים בשניהם.",
  },
  {
    icon: HeartHandshake,
    title: "מרחב בטוח וישיר",
    text: "אפשר לדבר בלי פוזה, בלי שיפוט ובלי להציג גרסה מסודרת יותר של מה שבאמת קורה.",
  },
  {
    icon: Lightbulb,
    title: "שאלות שמאירות אפשרויות",
    text: "אני לא בוחר את הדרך במקומך. אני עוזר לך לראות שבילים שהתרגלת לפספס.",
  },
];

const testimonials = [
  "אני אדם סגור והוא הצליח להגיע אליי בטבעיות ובזרימה הנכונה. הוא ידע היכן להתעקש והיכן לשחרר.",
  "כל מפגש היה משמעותי ובעל ערך. היום אני מרגיש בטוח יותר, מכוון יותר ובעיקר פתוח לשינויים ולצמיחה.",
  "התמיכה, הדיוק והמקצועיות היו משמעותיים מאוד. הידיעה שיש לי לאן לפנות נותנת לי הרבה ביטחון.",
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="spotlight-beam" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">אימון אישי לגברים · אשדוד ובזום</p>
            <h1>
              לא צריך לקרוס
              <span>כדי להתחיל להשתנות.</span>
            </h1>
            <p className="hero-lead">
              מקום לעצור, להבין מה באמת קורה מתחת לפני השטח, ולבחור את
              הצעד הבא שלך בלי קלישאות ובלי פוזה.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                לקביעת שיחת התאמה
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
              <Link className="button button-ghost" href="/process">
                איך נראה התהליך?
              </Link>
            </div>
            <div className="hero-meta" aria-label="פרטי השירות">
              <span>
                <MapPin size={17} aria-hidden="true" /> קליניקה באשדוד
              </span>
              <span>
                <MessageCircle size={17} aria-hidden="true" /> אפשר גם בזום
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="זרקור שמאיר דרך חדשה">
            <Image
              src="/images/zarkor-logo.svg"
              alt="זרקור, אימון אישי לגברים"
              width={360}
              height={360}
              priority
              className="hero-logo"
            />
            <p className="signature-line">אין בעיות לפתור, רק אמת לגלות.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <p className="eyebrow">רגע של כנות</p>
          <h2>האם זה בכלל בשבילך?</h2>
          <div className="question-list">
            {fitQuestions.map((question) => (
              <div className="question-item" key={question}>
                <span className="question-mark" aria-hidden="true"><i>?</i></span>
                <p>{question}</p>
              </div>
            ))}
          </div>
          <p className="section-closing">
            אם אחת השאלות פגעה במקום מוכר, לא חייבים כבר לדעת מה הפתרון.
            מספיק להיות מוכן להסתכל.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">הגישה שלי</p>
              <h2>אימון שלא מבקש ממך להיות מישהו אחר</h2>
            </div>
            <p>
              המטרה היא לא לתקן אותך. המטרה היא לזהות את הדפוסים, החסמים
              והאמיתות שמנהלים אותך, ואז לבחור איך אתה רוצה לפעול.
            </p>
          </div>
          <div className="feature-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title}>
                <span className="icon-shell"><Icon size={25} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-preview">
        <div className="container process-grid">
          <div className="process-copy">
            <p className="eyebrow">המסע שלך</p>
            <h2>לא קיצור דרך. דרך שמתאימה לך.</h2>
            <p>
              בתהליך נוציא מתיק הגב את מה שמכביד: תפיסות ישנות, פחדים
              והרגלים שכבר לא משרתים אותך. כשנגיע לצומת, אתה תבחר לאן לפנות.
              התפקיד שלי הוא להאיר גם את הדרך שלא ראית.
            </p>
            <ul className="check-list">
              <li><Check size={18} /> תהליך ממוקד של 12 מפגשים</li>
              <li><Check size={18} /> מפגש אישי של כשעה</li>
              <li><Check size={18} /> משימות בין המפגשים להעמקת השינוי</li>
              <li><Check size={18} /> בקליניקה באשדוד או בזום</li>
            </ul>
            <Link className="text-link" href="/process">
              להכיר את שלבי התהליך <ArrowLeft size={17} />
            </Link>
          </div>
          <div className="path-card" aria-hidden="true">
            <div className="path-icon"><Compass size={42} /></div>
            <div className="path-line" />
            <div className="path-stop"><span><i>01</i></span><b>עוצרים</b></div>
            <div className="path-stop"><span><i>02</i></span><b>מבינים</b></div>
            <div className="path-stop"><span><i>03</i></span><b>בוחרים</b></div>
            <div className="path-stop"><span><i>04</i></span><b>מתקדמים</b></div>
            <Route className="route-watermark" size={140} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">מילים של מתאמנים</p>
            <h2>השינוי שלהם, במילים שלהם</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((quote) => (
              <blockquote key={quote}>
                <span className="quote-mark" aria-hidden="true">״</span>
                <p>{quote}</p>
                <footer>מתוך משוב אנונימי של מתאמן</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
