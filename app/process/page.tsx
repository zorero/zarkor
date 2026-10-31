import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "תהליך אימון אישי לגברים | 12 מפגשים בזרקור",
  description: "איך נראה תהליך אימון אישי בזרקור ? הכירו תהליך בן 12 מפגשים עם אביחי צוררו: זיהוי דפוסים, בחירה בצעדים מעשיים וכלים להמשך הדרך.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "תהליך אימון אישי לגברים | 12 מפגשים בזרקור",
    description: "איך נראה תהליך אימון אישי בזרקור ? הכירו תהליך בן 12 מפגשים עם אביחי צוררו: זיהוי דפוסים, בחירה בצעדים מעשיים וכלים להמשך הדרך.",
    url: "/process",
    type: "website",
    locale: "he_IL",
  },
};

const steps = [
  { number: "01", title: "מכירים ומגדירים כיוון", text: "נבין מה הביא אותך, מה היית רוצה לשנות ואיך נדע שהתהליך באמת מועיל לך." },
  { number: "02", title: "מזהים את מה שמנהל אותך", text: "נפגוש דפוסים, אמונות, פחדים ותגובות אוטומטיות שמצמצמים את מרחב הבחירה שלך." },
  { number: "03", title: "מתרגלים דרך חדשה", text: "נחבר בין ההבנות לבין פעולה באמצעות ניסויים ומשימות שמותאמים לחיים שלך." },
  { number: "04", title: "מסכמים וממשיכים עצמאית", text: "נבחן מה השתנה, מה עדיין דורש תשומת לב ואילו כלים ימשיכו איתך אחרי התהליך." },
];

export default function ProcessPage() {
  return (
    <main>
      <PageHero eyebrow="על התהליך" title="מסע עם כיוון, בלי מסלול קשיח.">
        <p>
          תהליך האימון בנוי מ-12 מפגשים, אבל הוא לא פס ייצור. הקצב, השאלות
          והמשימות משתנים בהתאם למה שאתה מביא לחדר.
        </p>
      </PageHero>

      <section className="section">
        <div className="container timeline">
          {steps.map((step) => (
            <article className="timeline-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div><h2>{step.title}</h2><p>{step.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container practical-grid">
          <div>
            <p className="eyebrow">הפרטים המעשיים</p>
            <h2>מה חשוב לדעת לפני שמתחילים</h2>
          </div>
          <ul className="practical-list">
            <li><CheckCircle2 /> <span><b>12 מפגשים</b><small>תהליך ממוקד עם התחלה, אמצע וסיום.</small></span></li>
            <li><CheckCircle2 /> <span><b>כשעה למפגש</b><small>זמן שמאפשר להעמיק וגם להישאר ממוקדים.</small></span></li>
            <li><CheckCircle2 /> <span><b>אשדוד או זום</b><small>אפשר להיפגש בקליניקה או מרחוק.</small></span></li>
            <li><CheckCircle2 /> <span><b>עבודה בין המפגשים</b><small>משימות קצרות שמחברות את החדר לחיים.</small></span></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container narrow centered-text">
          <p className="eyebrow">גבולות ברורים</p>
          <h2>אימון אישי אינו טיפול נפשי.</h2>
          <p className="large-copy">
            האימון מתאים למי שמסוגל לתפקד ורוצה לעבוד על מטרות, בחירות ודפוסים.
            כאשר עולה צורך טיפולי, אפנה אותך לאיש או אשת מקצוע מתאימים. זו לא
            התחמקות, זו אחריות.
          </p>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
