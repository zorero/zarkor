"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialCarousel({ testimonials }: { testimonials: string[] }) {
  const [index, setIndex] = useState(0);
  const previous = () => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((current) => (current + 1) % testimonials.length);
  return (
    <div className="source-testimonial-carousel" role="region" aria-roledescription="קרוסלה" aria-label="המלצות מתאמנים" dir="rtl">
      <button className="testimonial-arrow testimonial-arrow-right" type="button" onClick={previous} aria-label="להמלצה הקודמת"><ChevronRight aria-hidden="true" size={54} strokeWidth={3} /></button>
      <blockquote className="source-testimonial-slide" aria-live="polite" aria-atomic="true">
        <span className="source-quote-top" aria-hidden="true">״</span>
        <p>{testimonials[index]}</p>
        <span className="source-quote-bottom" aria-hidden="true">״</span>
      </blockquote>
      <button className="testimonial-arrow testimonial-arrow-left" type="button" onClick={next} aria-label="להמלצה הבאה"><ChevronLeft aria-hidden="true" size={54} strokeWidth={3} /></button>
    </div>
  );
}
