import { User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    title: "Rede parceira",
    bio: "Profissionais de confiança para apoio e encaminhamento quando necessário.",
  },
  {
    title: "Apoio em exames",
    bio: "Coleta domiciliar e integração com laboratórios parceiros para laudos rápidos.",
  },
  {
    title: "Cuidado contínuo",
    bio: "Acompanhamento e orientações para manter a saúde do seu pet em dia.",
  },
];

export function Team() {
  return (
    <section id="equipe" className="section bg-background">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Equipe e parceiros
          </h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Uma rede de apoio para que você tenha acompanhamento e encaminhamento
            quando necessário — sem perder o cuidado em casa.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {team.map((m) => (
            <Card
              key={m.title}
              className="rounded-[28px] border border-trivita-forest/10 bg-card p-6 shadow-softSm"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-trivita-forest/10">
                    <div className="grid h-full w-full place-items-center bg-trivita-forest/10 text-trivita-forest">
                      <User className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <CardTitle>{m.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{m.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
