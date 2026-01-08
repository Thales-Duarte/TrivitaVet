import { Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function FinalCta() {
  return (
    <section className="section">
      <div className="container py-14 md:py-16">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-softSm md:rounded-[36px]">
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
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
                <span className="text-muted-foreground/60">•</span>
                <span className="text-muted-foreground">Cães e gatos</span>
              </div>
            </div>
            <Button asChild size="lg" variant="cta" className="shadow-softSm">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
