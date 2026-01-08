import { Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="section">
      <div className="container py-14 md:py-16">
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar consulta pelo WhatsApp"
          className="group relative block overflow-hidden rounded-[28px] border border-border bg-card shadow-softSm outline-none transition md:rounded-[36px] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-soft"
        >
          <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(closest-side,rgba(27,67,50,0.12),transparent)]" />
          <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(closest-side,rgba(244,162,97,0.10),transparent)] [mask-image:radial-gradient(closest-side,black,transparent)]" />

          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-12">
            <div>
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Pronto para cuidar do seu pet sem sair de casa?
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-7">
                Agende pelo WhatsApp e receba um orçamento transparente antes da
                visita. Taxa zero de deslocação no DF para consultas agendadas.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="inline-flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </span>
                <span className="text-muted-foreground/60">•</span>
                <span className="text-muted-foreground">Cães e gatos</span>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-2 rounded-lg bg-warning px-6 py-3 text-sm font-semibold text-warning-foreground shadow-softSm transition group-hover:brightness-95">
              <MessageCircle className="h-4 w-4" />
              Agendar Consulta
            </div>
          </div>

          {/* overlay sutil para reforçar que é clicável */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(244,162,97,0.12),transparent_55%,rgba(27,67,50,0.06))]" />
          </div>
        </a>
      </div>
    </section>
  );
}
