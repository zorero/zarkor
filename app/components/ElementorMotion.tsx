"use client";

import { useEffect } from "react";

/** Elementor entrance animations: reveal when the element enters the viewport. */
export function ElementorMotion() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-elementor-motion]");
    document.documentElement.classList.add("elementor-motion-ready");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("elementor-motion-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("elementor-motion-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("elementor-motion-ready");
    };
  }, []);
  return null;
}
