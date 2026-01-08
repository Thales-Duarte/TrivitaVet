import { Badge } from "@/components/ui/badge";

const areas = [
  "Asa Norte",
  "Asa Sul",
  "Lago Norte",
  "Lago Sul",
  "Sudoeste",
  "Noroeste",
  "Águas Claras",
  "Guará",
  "Taguatinga",
  "Ceilândia",
  "Samambaia",
  "Vicente Pires",
];

export function Coverage() {
  return (
    <section id="cobertura" className="section">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Área de cobertura
          </h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Atendemos todo o Distrito Federal. Confirme seu bairro pelo WhatsApp
            e a gente te orienta sobre horários e disponibilidade.
          </p>
          <p className="mt-3 text-[14px] leading-6 text-muted-foreground sm:text-sm sm:leading-7">
            Veterinário a domicílio no DF: Asa Norte, Asa Sul, Lago Norte, Lago
            Sul, Águas Claras, Guará, Taguatinga, Ceilândia e mais.
          </p>
        </div>

        <div className="mt-8 rounded-[28px] border border-border bg-card p-6 shadow-softSm md:p-8">
          <div className="text-[13px] font-medium text-muted-foreground sm:text-xs">
            Principais regiões atendidas
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {areas.map((a) => (
              <Badge
                key={a}
                variant="secondary"
                className="rounded-full border-border bg-muted text-foreground"
              >
                {a}
              </Badge>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Não encontrou seu bairro? A gente avalia a disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
