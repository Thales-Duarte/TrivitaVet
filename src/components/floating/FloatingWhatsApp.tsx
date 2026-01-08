"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
	return (
		<Link
			href={siteConfig.whatsapp}
			target="_blank"
			rel="noreferrer"
			aria-label="Chamar no WhatsApp"
			className="pressable icon-pop fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-warning/30 bg-warning text-warning-foreground shadow-softSm transition hover:brightness-95 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 md:bottom-8 md:right-8 motion-safe:hover:-translate-y-0.5"
			style={{ borderRadius: 9999 }}
		>
			<MessageCircle className="h-5 w-5" />
		</Link>
	);
}

