"use client";

import * as React from "react";

type ScrollSpyOptions = {
  /** CSS selector for tracked sections (defaults to "section[id]") */
  selector?: string;
  /** Root margin for IntersectionObserver */
  rootMargin?: string;
  /** Threshold for IntersectionObserver */
  threshold?: number | number[];
};

/**
 * Tracks the currently visible section id using IntersectionObserver.
 * Designed for one-page nav highlighting (scrollspy).
 */
export function useScrollSpy(options: ScrollSpyOptions = {}) {
  const {
    selector = "section[id]",
    rootMargin = "-40% 0px -55% 0px",
    threshold = [0, 0.1, 0.25, 0.5, 0.75, 1],
  } = options;

  const [activeId, setActiveId] = React.useState<string>("home");

  React.useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    ).filter((s) => !!s.id);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with highest intersection ratio that's intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      { root: null, rootMargin, threshold },
    );

    for (const section of sections) observer.observe(section);

    return () => observer.disconnect();
  }, [selector, rootMargin, threshold]);

  return activeId;
}
