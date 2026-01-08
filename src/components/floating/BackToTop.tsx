"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    // Safari fallback
    try {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } catch {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, []);

  return reduced;
}

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);
  const reducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={
        "fixed bottom-5 right-[5.25rem] z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-softSm backdrop-blur transition md:bottom-8 md:right-[6.25rem] " +
        (visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0")
      }
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
