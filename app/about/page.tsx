import type { Metadata } from "next";
import { BrainCircuit, Eye, Heart, ShieldCheck } from "lucide-react";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "אודות אביחי",
  description:
    "הכירו את אביחי צוררו ואת הגישה שמחברת בין חשיבה רציונלית, הקשבה עמוקה ועבודה רגשית באימון אישי לגברים.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Eye, title: "כנות", text: "להסכים לראות את מה שיש, גם כשהוא לא מסתדר עם הסיפור שסיפרנו לעצמנו." },
  { icon: ShieldCheck, title: "אחריות", text: "לא אשמה. היכולת להבין מה נמצא בידיים שלך ולבחור מה לעשות איתו." },
  { icon: Heart, title: "חיבור", text: "לתת מקום לרגש בלי לוותר על ההיגיון, ועל ההיגיון בלי להשתיק את הרגש." },
  { icon: BrainCircuit, title: "סקרנות", text: "להחליף שיפוט בשאלות ולבדוק מה עוד יכול להיות נכון לגביך." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="מי נמצא מולך" title="המסע שלי התחיל בתור לקוח.">
        <p>
          לפני שליוויתי אחרים, הייתי האיש שמנסה להבין את עצמו. חוויתי על
          בשרי מה קורה כשמפסיקים רק לנתח את החיים ומתחילים גם לפגוש אותם.
        </p>
      </PageHero>

      <section className="section">
        <div className="container story-grid">
          <div className="story-main">
            <p className="eyebrow">אביחי צוררו</p>
            <h2>אני לא מגיע עם תשובות מוכנות. אני מגיע עם נוכחות ושאלות טובות.</h2>
            <p>
              במשך שנים חיפשתי כלים שיעזרו לי להבין למה ידע והיגיון לבדם לא
              תמיד מצליחים להזיז אותנו. האימון האישי נתן לי שפה חדשה: כזו
              שמחברת מחשבות, רגשות, בחירות ומעשים.
            </p>
            <p>
              הרקע שלי בעולם ה-IT לימד אותי לפרק בעיות מורכבות, לזהות דפוסים
              ולשאול מה באמת גורם למערכת לפעול כפי שהיא פועלת. בחדר האימון אני
              מביא את אותה סקרנות, אבל זוכר שאדם הוא לא תקלה שצריך לתקן.
            </p>
            <p>
              אני מלווה בעיקר גברים שנמצאים בצומת: בזוגיות, בקריירה, בהורות
              או בקשר שלהם עם עצמם. גברים שרגילים לתפקד, לפתור ולשמור הכול
              בפנים, ורוצים ללמוד דרך אחרת.
            </p>
          </div>
          <aside className="quote-panel">
            <span className="quote-mark">״</span>
            <blockquote>
              אני מאמין שלאדם שמולי כבר יש בתוכו הרבה יותר תשובות ממה שנדמה
              לו. לפעמים צריך רק זרקור במקום הנכון.
            </blockquote>
            <p>אביחי</p>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">העקרונות שמובילים אותי</p>
            <h2>איך אני מחזיק את המרחב האימוני</h2>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="value-card">
                <Icon size={27} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
