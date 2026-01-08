import { Badge } from "@/components/ui/badge";

export function ZeroFeeBand() {
  return (
    <section
      id="taxa-zero"
      aria-label="Taxa zero de deslocação"
      className="section bg-background"
    >
      <div className="container py-10 md:py-12">
        <div className="rounded-[28px] border border-border bg-card p-6 shadow-softSm md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <Badge
                variant="secondary"
                className="rounded-full border-border bg-muted text-foreground"
              >
                Novidade
              </Badge>
              <h2 className="mt-3 text-pretty text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Taxa zero de deslocação
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                No DF, você paga apenas pelo atendimento — sem taxa extra de
                deslocação em consultas agendadas.
              </p>
            </div>

            <div className="grid gap-2 rounded-2xl bg-muted/70 p-4 md:min-w-[280px]">
              <div className="text-sm font-semibold text-foreground">
                DF • Consultas agendadas
              </div>
              <div className="text-xs text-muted-foreground">
                Confirmação rápida pelo WhatsApp antes da visita.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
