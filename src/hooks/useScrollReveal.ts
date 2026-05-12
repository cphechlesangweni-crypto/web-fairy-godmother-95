import { useEffect, useRef } from "react";

/*
 * useScrollReveal — Intersection Observer hook for scroll-triggered animations.
 *
 * Returns a ref to attach to any container element.
 * All children with the `data-reveal` attribute inside that container will
 * animate in when they enter the viewport.
 *
 * Supported `data-reveal` values:
 *   "fade-up"    — fade + translate-Y up (default)
 *   "fade-down"  — fade + translate-Y down
 *   "fade-left"  — fade + translate-X from left
 *   "fade-right" — fade + translate-X from right
 *   "fade"       — simple opacity fade
 *   "scale"      — scale up from 0.92
 *   "blur"       — blur + fade in
 *
 * Stagger children by adding `data-reveal-delay="100"` (ms) on each element.
 */

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean; // if true, animation plays only once (default: true)
}

export default function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.12, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>("[data-reveal]");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.revealDelay || "0", 10);
            setTimeout(() => {
              el.classList.add("revealed");
            }, delay);
            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return containerRef;
}
