import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    title: "Atendimento humanizado",
    desc: "Consulta com calma, explicando tudo e respeitando o tempo do seu pet.",
  },
  {
    title: "Cães e gatos",
    desc: "Foco em clínica geral, prevenção e acompanhamento de rotina.",
  },
  {
    title: "Estrutura de hospital móvel",
    desc: "Materiais e protocolos para levar mais segurança até a sua casa.",
  },
];

export function Bio() {
  return (
    <section id="bio" className="section">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="max-w-xl">
            <Badge
              variant="secondary"
              className="border-border bg-muted text-foreground"
            >
              Sobre
            </Badge>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
              Dra. Larissa
            </h2>
            <p className="mt-4 text-muted-foreground leading-7">
              Veterinária com atuação em atendimento domiciliar, com foco em
              clínica geral de cães e gatos, prevenção e orientação para tutores.
              A consulta em casa reduz o estresse e melhora a experiência do pet
              — e dá mais clareza pra você sobre cada etapa do cuidado.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-softSm">
                <div className="text-sm font-semibold text-foreground">
                  CRMV
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  CRMV-DF 12345
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5 shadow-softSm">
                <div className="text-sm font-semibold text-foreground">
                  Atendimento
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Consultas, vacinas, check-ups e acompanhamento.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((h) => (
              <Card
                key={h.title}
                className="shadow-softSm"
              >
                <CardHeader>
                  <CardTitle className="text-base">{h.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </CardContent>
              </Card>
            ))}

            <div className="rounded-[28px] border border-border bg-card p-6 shadow-softSm">
              <div className="text-sm font-semibold text-foreground">
                O que você ganha
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Menos estresse pro pet e mais segurança no manejo</li>
                <li>• Orientação clara e plano de cuidados por escrito</li>
                <li>• Acompanhamento pós-consulta quando necessário</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
