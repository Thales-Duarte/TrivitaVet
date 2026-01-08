import {
  Syringe,
  Stethoscope,
  Microscope,
  HeartPulse,
  Pill,
  PawPrint,
  Scissors,
  ClipboardPlus,
  BriefcaseMedical,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: BriefcaseMedical,
    title: "Hospital móvel",
    desc: "Estrutura e protocolos para levar mais segurança ao atendimento em casa.",
  },
  {
    icon: Stethoscope,
    title: "Consultas",
    desc: "Avaliação clínica completa, orientação e plano de cuidados.",
  },
  {
    icon: Syringe,
    title: "Vacinas",
    desc: "Aplicação segura com carteira e recomendações personalizadas.",
  },
  {
    icon: Microscope,
    title: "Exames",
    desc: "Coleta domiciliar e encaminhamento para laboratório parceiro.",
  },
  {
    icon: HeartPulse,
    title: "Check-up",
    desc: "Prevenção e saúde em dia: avaliação de rotina para cães e gatos.",
  },
  {
    icon: Pill,
    title: "Medicações",
    desc: "Administração de medicamentos e protocolos sob orientação.",
  },
  {
    icon: ClipboardPlus,
    title: "Atestados & laudos",
    desc: "Documentação quando necessária, com responsabilidade técnica.",
  },
  {
    icon: Scissors,
    title: "Procedimentos",
    desc: "Curativos, aplicação de fluidos e pequenos procedimentos.",
  },
  {
    icon: PawPrint,
    title: "Orientação nutricional",
    desc: "Ajustes de dieta e rotina para cada fase e necessidade.",
  },
];

export function ServicesGrid() {
  return (
    <section id="servicos" className="section">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Serviços
          </h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Clínica geral para cães e gatos, com atendimento domiciliar e foco no
            bem-estar.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const pill =
              idx % 3 === 0
                ? "bg-primary/10 text-primary"
                : idx % 3 === 1
                  ? "bg-accent/15 text-accent"
                  : "bg-warning/15 text-warning";
            return (
              <Card
                key={s.title}
                className="group hover-lift transition-transform hover:-translate-y-0.5"
              >
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
