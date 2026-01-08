import {
  CalendarCheck,
  ClipboardList,
  Stethoscope,
  ShieldPlus,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: CalendarCheck,
    title: "Agendamento",
    desc: "Você chama no WhatsApp e escolhe o melhor horário.",
  },
  {
    icon: ClipboardList,
    title: "Triagem",
    desc: "Entendemos a necessidade do pet e orientamos a preparação.",
  },
  {
    icon: Stethoscope,
    title: "Visita",
    desc: "Atendimento completo em casa, com calma e atenção.",
  },
  {
    icon: ShieldPlus,
    title: "Acompanhamento",
    desc: "Plano de cuidados e suporte após a consulta.",
  },
];

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Como funciona
          </h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Um processo simples, rápido e centrado no bem-estar do seu pet.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const pill =
              idx % 3 === 0
                ? "bg-accent/15 text-accent"
                : idx % 3 === 1
                  ? "bg-warning/15 text-warning"
                  : "bg-primary/10 text-primary";
            return (
              <Card key={s.title} className="border-border bg-card shadow-softSm">
                <CardHeader>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${pill}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
