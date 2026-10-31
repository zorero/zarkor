import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppForm } from "./components/WhatsAppForm";
import { ElementorMotion } from "./components/ElementorMotion";
import { TestimonialCarousel } from "./components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "זרקור | אימון אישי לגברים באשדוד ובזום | אביחי צוררו",
  description: "אימון אישי לגברים עם אביחי צוררו בקליניקה באשדוד או בזום. תהליך של 12 מפגשים לחיבור לרגשות, קבלת החלטות ושינוי מעשי בחיים.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "זרקור | אימון אישי לגברים באשדוד ובזום | אביחי צוררו",
    description: "אימון אישי לגברים עם אביחי צוררו בקליניקה באשדוד או בזום. תהליך של 12 מפגשים לחיבור לרגשות, קבלת החלטות ושינוי מעשי בחיים.",
    url: "/",
    type: "website",
    locale: "he_IL",
  },
};

const qualities = [
  { title: "מקצועיות", text: "כלים מתקדמים שיעזרו לך לצמוח ולהתפתח." },
  { title: "יחס אישי", text: "הקשבה עמוקה והבנה של הצרכים הייחודיים שלך." },
  { title: "אינטואיציה", text: "היכולת לחדור לעומק ולקלוט את מה שאתה באמת צריך." },
  { title: "אינטליגנציה רגשית", text: "תמיכה רגשית וחיבור עמוק שיעזרו לך להתמודד עם אתגרים." },
];
const sessionFacts = [
  { image: "icon7-1.svg", lines: <>תהליך האימון<br/>מורכב מ-12 מפגשים</> },
  { image: "icon8-2.svg", lines: <>המפגשים מתקיימים<br/>בקליניקה באשדוד או בזום</> },
  { image: "icon9-1.svg", lines: <>אורך המפגש<br/>כשעה</> },
  { image: "icon10-1.svg", lines: <>התהליך כולל משימות<br/>כדי להעמיק ולהעצים את השינוי</> },
];
const questions = [
  "האם אתם נמצאים לקראת צומת קבלת החלטות חשובה בחייכם ?",
  "האם אתם מרגישים לא מסופקים בזוגיות, בעבודה או בהורות ?",
  "האם אתם מרגישים מתוסכלים מאיך שהחיים חולפים לידכם ?",
];
const testimonials = [
  "אביחי בעיניי הוא מאמן מקצועי ביותר, ולא יכולתי למצוא טוב יותר. הוא יודע לגעת בנקודות הנכונות והמדויקות לפי כל אדם באשר הוא. אני מעריך את כל מה שהוא עשה בשבילי, ואני מתחיל דרך בגרסה חדשה של עצמי.",
  "עברתי תהליך מעולה עם אביחי, אני אדם סגור והוא הצליח להגיע אלי בטבעיות ובזרימה הנכונה, הוא ידע היכן להתעקש והיכן לשחרר. היו לי בעיות במערכות יחסים עם הילדים והמשפחה, נושאים עמוקים שרציתי לדון בהם לעומק והוא היה מדויק למטרה.",
  "אביחי הוא הרבה יותר ממאמן. הוא מלווה אמיתי שמבין לעומק את הצרכים של האדם מולו. כל מפגש איתו היה משמעותי ובעל ערך, והוא הצליח לכוון אותי בדיוק לנקודות שדורשות שינוי והתמקדות.",
];

function ContactStrip({ id }: { id: string }) {
  return (
    <section className="source-contact" id={id}>
      <div className="container">
        <h2>לקביעת שיחת התאמה ללא עלות ולפרטים נוספים</h2>
        <WhatsAppForm />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="source-site">
      <ElementorMotion />
      <section className="source-hero">
        <div className="source-hero-quick-contact" aria-label="דרכי יצירת קשר מהירות">
          <a href="https://wa.me/972528260661" target="_blank" rel="noopener noreferrer" aria-label="שליחת הודעה בוואטסאפ"><Image src="/images/elementor/icon2.svg" width={60} height={60} alt="" aria-hidden="true" /></a>
          <a href="tel:+972528260661" aria-label="התקשרו אליי"><Image src="/images/elementor/icon1.svg" width={60} height={60} alt="" aria-hidden="true" /></a>
        </div>
        <div className="container source-hero-content">
          <div className="source-hero-brand" data-elementor-motion="fadeInUp" data-motion-delay="600"><Image src="/images/elementor/zarkor-logo-1.svg" width={340} height={230} alt="זרקור: מאמן לגברים, שנשים אוהבות" priority /></div>
          <h1 data-elementor-motion="fadeIn" data-motion-delay="800">המסע שלי החל בתור לקוח. היום, אני כאן כדי לעזור לך להתחיל את שלך.</h1>
          <p>חוויתי על בשרי את הכוח של אימון אישי. אחרי שנים של חיפוש, מצאתי את הכלים והתמיכה ששינו את חיי מקצה לקצה. היום, אני כאן כדי להעביר את זה הלאה ולעזור לך להשיג את מה שחשוב לך.</p>
        </div>
      </section>

      <section className="source-qualities">
        <div className="container">
          <h2 data-elementor-motion="fadeIn" data-motion-delay="600">עם ניסיון של 7 שנים בליווי אנשים בתהליכי טרנספורמציה, אני מביא איתי:</h2>
          <div className="source-qualities-grid">
            {qualities.map(item => <article key={item.title}><h3 data-elementor-motion="fadeIn" data-motion-delay="400">{item.title}</h3><p data-elementor-motion="fadeIn" data-motion-delay="600">{item.text}</p></article>)}
          </div>
          <p className="source-qualities-closing" data-elementor-motion="fadeIn" data-motion-delay="600">אני מאמין שכל אחד יכול להשיג את המטרות שלו. אם אתה מוכן להשקיע בעצמך ולעשות שינוי משמעותי בחיים, אני כאן כדי ללוות אותך בכל צעד ושלב.</p>
        </div>
      </section>

      <section className="source-image-band">
        <div className="container" data-elementor-motion="fadeInUp" data-motion-delay="600"><h2>בוא נבנה ביחד את העתיד שאתה חולם עליו.</h2><p>בעזרת כלים מתקדמים שיעזרו לך לצמוח ולהתפתח.</p></div>
      </section>
      <ContactStrip id="contact-first"/>

      <section className="source-process" id="process">
        <div className="container">
          <h2 className="source-section-title" data-elementor-motion="fadeIn" data-motion-delay="600">על התהליך</h2>
          <p className="source-process-intro">בתהליך האימון נצא למסע לגילוי עצמי. נלמד להוציא מתיק הגב את הדברים המכבידים, כמו פרדיגמות וחסמים שמעכבים אותנו. במהלך המסע נגיע לצמתים שבהם הבחירה תהיה שלך, והתפקיד שלי יהיה לשאול את השאלות הנכונות כדי להאיר בעזרת זרקור את הדרך.</p>
          <div className="source-facts">
            {sessionFacts.map(({ image,lines },index)=><div key={index} className="source-fact" data-elementor-motion="zoomIn"><span className="source-icon"><img src={`/images/elementor/${image}`} width="62" height="62" alt="" /></span><p>{lines}</p></div>)}
          </div>
          <div className="source-slogan" data-elementor-motion="fadeIn" data-motion-delay="600"><h3>אין בעיות לפתור רק אמת לגלות</h3></div>
        </div>
      </section>

      <section className="source-fit">
        <div className="container">
          <h2 className="source-section-title">האם זה בכלל בשבילי ?</h2>
          <div className="source-fit-grid">
            {questions.map((q,i)=><article key={q} data-elementor-motion="zoomIn"><img className="source-fit-symbol" src="/images/elementor/v.svg" width="52" height="52" alt="" /><p>{q}</p></article>)}
          </div>
          <p className="source-fit-conclusion">אם עניתם כן על אחת (או יותר) מהשאלות, זה הרגע ליצור קשר ולקבוע פגישת התאמה ללא עלות.</p>
        </div>
      </section>
      <ContactStrip id="contact-second"/>

      <section className="source-testimonials">
        <div className="container">
          <h2 className="source-section-title" data-elementor-motion="fadeIn" data-motion-delay="600">מתאמנים ממליצים</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </main>
  );
}
