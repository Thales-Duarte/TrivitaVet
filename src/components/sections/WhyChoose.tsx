import Image from "next/image";
import { HeartPulse, Home, ShieldCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyChoose() {
  return (
    <section id="sobre" className="section">
      <div className="container grid gap-12 py-16 md:grid-cols-2 md:py-20">
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
            <Card className="border-border bg-card shadow-softSm">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Conforto e comodidade</CardTitle>
                  <CardContent className="px-0 pb-0">
                    <p className="text-sm text-muted-foreground">
                      Sem trânsito e sem espera. Nós vamos até você com tudo
                      preparado.
                    </p>
                  </CardContent>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card shadow-softSm">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-warning/15 text-warning">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Menos estresse</CardTitle>
                  <CardContent className="px-0 pb-0">
                    <p className="text-sm text-muted-foreground">
                      Ambiente conhecido, manejo mais fácil e pet mais tranquilo.
                    </p>
                  </CardContent>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card shadow-softSm">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Qualidade e segurança</CardTitle>
                  <CardContent className="px-0 pb-0">
                    <p className="text-sm text-muted-foreground">
                      Protocolos e materiais adequados para um atendimento
                      completo.
                    </p>
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
            <Image
              src="/why-choose.jpg"
              alt="Pet relaxado recebendo atendimento"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
