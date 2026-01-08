import Image from "next/image";
import { HeartPulse, Home, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const items = [
	{
		icon: Home,
		title: "Menos estresse",
		desc: "Seu pet é atendido no lugar onde se sente mais seguro — sem deslocamento e sem sala de espera.",
		pill: "bg-primary/10 text-primary",
	},
	{
		icon: ShieldCheck,
		title: "Segurança e cuidado",
		desc: "Protocolos, orientação e atenção individualizada para uma experiência mais humana.",
		pill: "bg-accent/15 text-accent",
	},
	{
		icon: HeartPulse,
		title: "Acompanhamento",
		desc: "Plano de cuidados e acompanhamento contínuo para manter a saúde do seu pet em dia.",
		pill: "bg-warning/15 text-warning",
	},
];

export function WhyChoose() {
	return (
		<section id="sobre" className="section">
			<div className="container grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-20">
				{/* Conteúdo */}
				<div className="order-2 md:order-1">
					<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
						Por que escolher?
					</h2>
					<p className="mt-3 text-muted-foreground leading-7">
						O atendimento domiciliar reduz o estresse do pet, evita deslocamentos e
						proporciona uma experiência mais humana. Você recebe orientação
						individualizada, com tempo de consulta e foco total no bem-estar.
					</p>

					<div className="mt-8 grid gap-4">
						{items.map((i) => {
							const Icon = i.icon;
							return (
								<Card key={i.title} className="border-border bg-card shadow-softSm">
									<CardHeader className="flex flex-row items-start gap-4">
										<div
											className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${i.pill}`}
											aria-hidden="true"
										>
											<Icon className="h-6 w-6" />
										</div>
										<div className="min-w-0">
											<CardTitle className="text-base">{i.title}</CardTitle>
											<div className="mt-1 text-sm text-muted-foreground leading-7">
												{i.desc}
											</div>
										</div>
									</CardHeader>
								</Card>
							);
						})}
					</div>
				</div>

				{/* Imagem */}
				<div className="order-1 md:order-2">
					<div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-card shadow-softSm md:rounded-[36px]">
						<Image
							src="/why-choose.jpg"
							alt={`Atendimento veterinário em casa — ${siteConfig.name}`}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(27,67,50,0.10),transparent)]" />
					</div>
				</div>
			</div>
		</section>
	);
}
