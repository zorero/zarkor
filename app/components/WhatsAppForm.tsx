"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";

export function WhatsAppForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const note = String(form.get("note") ?? "").trim();
    const message = [
      "היי אביחי, הגעתי דרך האתר ואשמח לשיחת התאמה.",
      `שם: ${name}`,
      `טלפון: ${phone}`,
      email ? `מייל: ${email}` : "",
      note ? `מה מביא אותי עכשיו: ${note}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/972528260661?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-heading">
        <p className="eyebrow">שיחת התאמה ללא עלות</p>
        <h2>השאר פרטים</h2>
        <p>בלחיצה על הכפתור תיפתח הודעת WhatsApp מוכנה לשליחה.</p>
      </div>
      <label>שם מלא<input name="name" type="text" autoComplete="name" required placeholder="איך לפנות אליך ?" /></label>
      <div className="form-row">
        <label>טלפון<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="050-0000000" /></label>
        <label>מייל, לא חובה<input name="email" type="email" autoComplete="email" placeholder="name@example.com" /></label>
      </div>
      <label>מה מביא אותך עכשיו ?<textarea name="note" rows={4} placeholder="אפשר לכתוב במשפט אחד. אפשר גם להשאיר ריק." /></label>
      <button className="button button-primary" type="submit"><Send size={18} /> פתיחת הודעה ב-WhatsApp</button>
      <small className="privacy-note">הפרטים אינם נשמרים באתר. הם עוברים ל-WhatsApp רק לאחר אישורך.</small>
    </form>
  );
}
