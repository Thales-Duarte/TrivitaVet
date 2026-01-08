"use client";

import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-softSm ring-1 ring-border transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}
