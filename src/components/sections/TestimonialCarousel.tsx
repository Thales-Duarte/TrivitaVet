"use client";

import { Star, User } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mariana P.",
    text: "Atendimento impecável! Minha gata ficou tranquila em casa e a doutora explicou tudo com muita calma. O orçamento veio claro antes da visita.",
  },
  {
    name: "Carlos R.",
    text: "Muito prático. Agendei pelo WhatsApp e no mesmo dia tivemos a consulta. Sem taxa de deslocação no DF e sem surpresa no final.",
  },
  {
    name: "Fernanda S.",
    text: "Vacinas e check-up sem estresse. Pontualidade, cuidado e orientações bem detalhadas do que fazer depois.",
  },
  {
    name: "João L.",
    text: "Excelente atendimento domiciliar. Economizei tempo e meu cachorro ficou bem mais calmo do que ficaria na clínica.",
  },
  {
    name: "Bianca M.",
    text: "Equipe atenciosa. Tiraram minhas dúvidas, passaram o plano de cuidados e fizeram acompanhamento depois.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-warning text-warning" />
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  return (
    <section id="depoimentos" className="section">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Depoimentos
          </h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Quem já usou o serviço entende a diferença do cuidado em casa.
          </p>
        </div>

        <div className="relative mt-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="px-0"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.name}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="hover-lift h-full border-border shadow-softSm hover:border-foreground/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
                          <div className="grid h-full w-full place-items-center bg-warning/15 text-warning">
                            <User className="h-6 w-6" aria-hidden="true" />
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-base">{t.name}</CardTitle>
                          <div className="mt-1">
                            <Stars />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-7">
                        “{t.text}”
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
