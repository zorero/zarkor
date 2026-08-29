import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "שאלות נפוצות",
  description: "תשובות על אימון אישי לגברים, מבנה התהליך, מפגשים בזום, התאמה, סודיות וההבדל בין אימון לטיפול.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "למי מתאים תהליך האימון?", a: "לגברים שמרגישים תקיעות, נמצאים בצומת או רוצים לשנות דפוס בחיים. לא צריך להגיע עם מטרה מנוסחת היטב. אפשר להתחיל גם מהתחושה שמשהו אינו מדויק." },
  { q: "מה ההבדל בין אימון אישי לטיפול נפשי?", a: "אימון מתמקד במטרות, בחירות, דפוסים ופעולה בהווה ובעתיד. הוא אינו אבחון או טיפול במצוקה נפשית. כאשר עולה צורך טיפולי, חשוב לפנות לאיש מקצוע מתאים." },
  { q: "כמה זמן נמשך התהליך?", a: "התהליך המובנה כולל 12 מפגשים. כל מפגש אורך כשעה. הקצב והתדירות נקבעים יחד בהתאם לצורך וליכולת ליישם בין המפגשים." },
  { q: "האם אפשר להיפגש בזום?", a: "כן. אפשר לקיים את התהליך בקליניקה באשדוד או בזום. בשיחת ההתאמה נבדוק איזו מסגרת נכונה ונוחה עבורך." },
  { q: "מה קורה בין המפגשים?", a: "לפי הצורך תקבל משימה, תרגיל או שאלה להתבוננות. המטרה היא שהתובנות לא יישארו בחדר, אלא יפגשו את החיים עצמם." },
  { q: "מה אם קשה לי לדבר על רגשות?", a: "זו לא בעיה ולא תנאי קבלה. רבים מהגברים שמגיעים אליי מתחילים בדיוק מהמקום הזה. נבנה שפה וקצב שמרגישים טבעיים ובטוחים עבורך." },
  { q: "האם השיחות נשארות חסויות?", a: "כן. התוכן שעולה במפגשים נשמר בדיסקרטיות, בכפוף לחובות החוק ולמצבים חריגים של חשש ממשי לפגיעה." },
  { q: "מהי שיחת התאמה?", a: "שיחה קצרה וללא עלות שבה נבין מה אתה מחפש, אסביר איך אני עובד ונבדוק אם האימון מתאים ואם נכון לנו לעבוד יחד. אין התחייבות להמשיך." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <PageHero eyebrow="שאלות נפוצות" title="אפשר לשאול גם לפני שיודעים מה לשאול.">
        <p>ריכזתי כאן תשובות לשאלות שעולות לפני תחילת תהליך. אם משהו עדיין לא ברור, אפשר פשוט לדבר.</p>
      </PageHero>

      <section className="section">
        <div className="container faq-list">
          {faqs.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary><span>{item.q}</span><Plus size={22} aria-hidden="true" /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CallToAction />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
