import type { Metadata } from "next";
import { BriefcaseBusiness, HeartCrack, Milestone, Users } from "lucide-react";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "אימון אישי לגברים | זוגיות, רגשות וקבלת החלטות",
  description: "מרגיש תקוע בזוגיות, בקריירה או בקבלת החלטות ? אימון אישי לגברים עם אביחי צוררו באשדוד או בזום, בשיחה ישירה ובקצב שמתאים לך.",
  alternates: { canonical: "/coaching-for-men" },
  openGraph: {
    title: "אימון אישי לגברים | זוגיות, רגשות וקבלת החלטות",
    description: "מרגיש תקוע בזוגיות, בקריירה או בקבלת החלטות ? אימון אישי לגברים עם אביחי צוררו באשדוד או בזום, בשיחה ישירה ובקצב שמתאים לך.",
    url: "/coaching-for-men",
    type: "website",
    locale: "he_IL",
  },
};

const areas = [
  { icon: Milestone, title: "צומת והחלטות", text: "כשיש כמה כיוונים, הרבה רעש פנימי וקושי לזהות מה באמת נכון לך." },
  { icon: HeartCrack, title: "זוגיות וקשרים", text: "כשאתה רוצה להתקרב, לדבר ברור יותר או להבין את הדפוסים שחוזרים ביחסים." },
  { icon: BriefcaseBusiness, title: "קריירה ומשמעות", text: "כשאתה מתפקד ומצליח, אבל משהו בעבודה כבר לא מרגיש כמו המקום שלך." },
  { icon: Users, title: "הורות וזהות", text: "כשאתה מנסה להיות אבא, בן זוג ואדם שלם, ולא תמיד יודע איפה אתה בתוך כל התפקידים." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "אימון אישי לגברים",
  provider: { "@id": "https://zarkorjourney.co.il/#organization" },
  areaServed: ["אשדוד", "ישראל"],
  availableChannel: [
    { "@type": "ServiceChannel", serviceLocation: { "@type": "Place", name: "קליניקה באשדוד" } },
    { "@type": "ServiceChannel", serviceUrl: "https://zarkorjourney.co.il/contact" },
  ],
  description: "תהליך אימון אישי לגברים המתמקד בקבלת החלטות, חיבור רגשי ויצירת שינוי מעשי.",
};

export default function CoachingPage() {
  return (
    <main>
      <PageHero eyebrow="אימון אישי לגברים" title="אתה לא צריך להמשיך להחזיק הכול לבד.">
        <p>
          אימון הוא מקום שבו אפשר להניח לרגע את התפקידים, לבדוק מה אתה
          מרגיש ומה אתה רוצה, ולתרגם את ההבנה לצעדים במציאות.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">איפה זה פוגש אותך</p><h2>ארבעה מרחבים שכיחים</h2></div>
            <p>לא חייב להיות משבר כדי לפנות לאימון. לפעמים עצם התחושה שמשהו כבר לא מדויק היא סיבה מספקת לעצור.</p>
          </div>
          <div className="area-grid">
            {areas.map(({ icon: Icon, title, text }) => (
              <article className="area-card" key={title}>
                <Icon size={30} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container two-column-copy">
          <div>
            <p className="eyebrow">למה דווקא אימון לגברים ?</p>
            <h2>כי הרבה גברים למדו לתפקד לפני שלמדו להרגיש.</h2>
          </div>
          <div className="rich-copy">
            <p>
              מגיל צעיר רבים מאיתנו למדו להיות חזקים, להסתדר ולפתור בעיות.
              אלה יכולות חשובות, אבל לפעמים הן הופכות לשריון: קשה לבקש עזרה,
              קשה לתת שם למה שקורה, וקשה לייצר קרבה בלי להרגיש חשוף.
            </p>
            <p>
              בחדר האימון אין מבחן בגבריות ואין ציפייה לדבר בשפה שלא טבעית
              לך. מתחילים במקום שבו אתה נמצא, ובונים בהדרגה יכולת להבין,
              לבטא ולבחור.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow centered-text">
          <p className="eyebrow">מה האימון לא</p>
          <h2>לא עצות מהיציע ולא אוסף משפטי השראה.</h2>
          <p className="large-copy">
            אני לא אומר לך מה לעשות ולא מחליט מה נכון עבורך. אנחנו בודקים
            יחד את המחירים, הפחדים, הרצונות והאפשרויות, כדי שהבחירה תהיה שלך
            וגם האחריות עליה.
          </p>
        </div>
      </section>

      <CallToAction />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  );
}
