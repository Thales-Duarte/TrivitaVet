"use client";

import Link from "next/link";
import {
	Instagram,
	Mail,
	Phone,
	MessageCircle,
	Menu,
	X,
	MapPin,
	Dog,
} from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const nav = [
	{ label: "Home", href: "#home" },
	{ label: "Sobre", href: "#sobre" },
	{ label: "Taxa zero", href: "#taxa-zero" },
	{ label: "Serviços", href: "#servicos" },
	{ label: "Dra. Larissa", href: "#bio" },
	{ label: "Equipe", href: "#equipe" },
	{ label: "Depoimentos", href: "#depoimentos" },
	{ label: "FAQ", href: "#faq" },
];

export function Header() {
	const [open, setOpen] = React.useState(false);
	const activeId = useScrollSpy();

	React.useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 text-foreground backdrop-blur">
			<div className="container flex h-20 items-center justify-between">
				<Link
					href="#home"
					className="flex items-center gap-3"
					aria-label={`${siteConfig.name} - Início`}
				>
					<div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
						<Dog className="h-6 w-6" aria-hidden="true" />
					</div>
					<div className="hidden sm:block">
						<div className="text-sm font-semibold leading-none text-foreground">
							{siteConfig.name}
						</div>
						<div className="mt-1 text-xs text-muted-foreground">
							{siteConfig.region}
						</div>
					</div>
				</Link>

				<nav className="hidden items-center gap-6 lg:flex">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className={cn(
								"link text-sm font-medium text-muted-foreground hover:text-foreground",
								activeId === item.href.slice(1)
									? "text-foreground [background-size:100%_2px]"
									: "",
							)}
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="hidden items-center gap-3 lg:flex">
					<a
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
						href={`tel:${siteConfig.phoneE164}`}
						aria-label="Telefone"
					>
						<Phone className="h-4 w-4" />
					</a>
					<a
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
						href={siteConfig.instagram}
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
					>
						<Instagram className="h-4 w-4" />
					</a>
					<a
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
						href={`mailto:${siteConfig.email}`}
						aria-label="E-mail"
					>
						<Mail className="h-4 w-4" />
					</a>
					<a
						className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
						href="#cobertura"
						aria-label="Área de Cobertura"
					>
						<MapPin className="h-4 w-4" />
					</a>
					<Button asChild size="default" variant="cta" className="shadow-softSm">
						<a
							href={siteConfig.whatsapp}
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							<MessageCircle className="h-4 w-4" />
							Agendar Consulta
						</a>
					</Button>
				</div>

				<div className="flex items-center gap-2 lg:hidden">
					<Button asChild variant="cta" size="icon" className="rounded-full">
						<a
							href={siteConfig.whatsapp}
							target="_blank"
							rel="noreferrer"
							aria-label="Agendar via WhatsApp"
							className="link"
						>
							<MessageCircle className="h-5 w-5" />
						</a>
					</Button>
					<button
						type="button"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
						onClick={() => setOpen((v) => !v)}
						aria-label={open ? "Fechar menu" : "Abrir menu"}
					>
						{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</div>

			<div
				className={cn(
					"lg:hidden motion-safe:transition-[max-height,opacity] motion-safe:duration-300 motion-safe:ease-out",
					open
						? "pointer-events-auto max-h-[640px] opacity-100"
						: "pointer-events-none max-h-0 opacity-0",
				)}
			>
				<div className="container pb-6">
					<div className="rounded-3xl border border-border bg-card p-4 shadow-softSm">
						<div className="grid gap-2">
							{nav.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={() => setOpen(false)}
									className={cn(
										"rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted",
										activeId === item.href.slice(1)
											? "bg-warning/10"
											: "",
									)}
								>
									{item.label}
								</a>
							))}
						</div>
						<div className="mt-4 grid gap-3">
							<Button asChild size="lg" variant="cta" className="w-full">
								<a
									href={siteConfig.whatsapp}
									target="_blank"
									rel="noreferrer"
									className="link"
								>
									<MessageCircle className="h-4 w-4" />
									Agendar Consulta
								</a>
							</Button>

							<div className="flex items-center justify-center gap-3">
								<a
									className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
									href={`tel:${siteConfig.phoneE164}`}
									aria-label="Telefone"
								>
									<Phone className="h-4 w-4" />
								</a>
								<a
									className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
									href={siteConfig.instagram}
									target="_blank"
									rel="noreferrer"
									aria-label="Instagram"
								>
									<Instagram className="h-4 w-4" />
								</a>
								<a
									className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:bg-muted hover:text-foreground"
									href={`mailto:${siteConfig.email}`}
									aria-label="E-mail"
								>
									<Mail className="h-4 w-4" />
								</a>
							</div>

							<p className="text-center text-xs text-muted-foreground">
								Atendimento em {siteConfig.region} e região.
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
