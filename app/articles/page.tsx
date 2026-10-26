import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, MessagesSquare, Target } from "lucide-react";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "מאמרים על גברים, רגשות ושינוי",
  description: "מחשבות וכלים על גבריות, זוגיות, קבלת החלטות, הורות וחיבור רגשי מאת אביחי צוררו.",
  alternates: { canonical: "/articles" },
};

const topics = [
  { icon: MessagesSquare, title: "רגשות ותקשורת", text: "איך נותנים שם למה שקורה בפנים ומדברים עליו בלי לאבד את עצמנו." },
  { icon: Target, title: "החלטות ושינוי", text: "איך מזהים מה באמת חשוב, מפסיקים להסתובב במעגל ובוחרים צעד אפשרי." },
  { icon: BookOpen, title: "גבריות, זוגיות והורות", text: "מחשבות על התפקידים שאנחנו ממלאים ועל האדם שאנחנו רוצים להיות בתוכם." },
];

export default function ArticlesPage() {
  return (
    <main>
      <PageHero eyebrow="מאמרים ותובנות" title="מחשבות שלא נגמרות במשפט השראה.">
        <p>כאן ירוכזו בהדרגה מאמרים, תרגילים ושאלות על גברים, רגשות, קשרים והבחירות שמעצבות אותנו.</p>
      </PageHero>
      <section className="section">
        <div className="container topic-grid">
          {topics.map(({ icon: Icon, title, text }) => (
            <article className="topic-card" key={title}>
              <Icon size={30} />
              <h2>{title}</h2>
              <p>{text}</p>
              <span>מאמרים ראשונים יעלו בקרוב</span>
            </article>
          ))}
        </div>
        <div className="container articles-note">
          <p>בינתיים אפשר לקרוא תכנים חדשים בעמוד הפייסבוק של זרקור.</p>
          <a className="text-link" href="https://www.facebook.com/zarkor.life.coaching" target="_blank" rel="noreferrer">לעמוד הפייסבוק <ArrowLeft size={17} /></a>
          <Link className="button button-ghost" href="/contact">יש נושא שמעסיק אותך ? בוא נדבר</Link>
        </div>
      </section>
    </main>
  );
}
