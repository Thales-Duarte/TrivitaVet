import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden">
      <div className="container grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
        <div className="max-w-xl">
          <Badge
            variant="secondary"
            className="border-border bg-muted text-foreground"
          >
            Veterinário em Casa • {siteConfig.region}
          </Badge>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Atendimento veterinário em domicílio
          </h1>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Com a Dra. Larissa, seu pet recebe cuidado com mais conforto e menos
            estresse — atendimento para cães e gatos, com estrutura de hospital
            móvel.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="cta" className="shadow-soft">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#servicos" className="link">
                Ver serviços
              </a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-softSm">
              <div className="text-2xl font-bold text-foreground">+10</div>
              <div className="mt-1 text-xs text-muted-foreground">
                anos de experiência
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-softSm">
              <div className="text-2xl font-bold text-foreground">24h</div>
              <div className="mt-1 text-xs text-muted-foreground">
                suporte e orientação
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-softSm">
              <div className="text-2xl font-bold text-foreground">5★</div>
              <div className="mt-1 text-xs text-muted-foreground">
                avaliação dos clientes
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-[48px] bg-primary/10 blur-3xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-border bg-card shadow-softSm md:rounded-[36px]">
            <Image
              src="/why-choose.jpg"
              alt="Veterinária atendendo um cachorro em casa"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <svg
        className="block w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64L60,58.7C120,53,240,43,360,58.7C480,75,600,117,720,117.3C840,117,960,75,1080,58.7C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </section>
  );
}
