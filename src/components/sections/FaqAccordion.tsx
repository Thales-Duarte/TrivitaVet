import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quais animais vocês atendem?",
    a: "Atendemos principalmente cães e gatos. Em casos específicos, consulte disponibilidade pelo WhatsApp.",
  },
  {
    q: "O atendimento domiciliar é mais caro?",
    a: "Nem sempre. O valor depende do tipo de atendimento e do que será necessário fazer. Antes da visita, você recebe um orçamento transparente — e no DF não cobramos taxa de deslocação para consultas agendadas.",
  },
  {
    q: "Vocês aplicam vacinas em casa?",
    a: "Sim. Levamos todo o material necessário e orientamos sobre o calendário vacinal ideal para o seu pet.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Aceitamos PIX e cartão (débito/crédito). Se você preferir parcelar, confirme as opções no agendamento.",
  },
  {
    q: "Em quanto tempo vocês conseguem atender?",
    a: "Depende da agenda e da região do DF. Muitas vezes conseguimos atendimento no mesmo dia (principalmente com agendamento cedo).",
  },
  {
    q: "Vocês atendem urgência/emergência?",
    a: "Em casos graves (dificuldade para respirar, convulsão, sangramento intenso, prostração extrema), a prioridade é levar imediatamente a um pronto atendimento 24h. Para situações urgentes, chame no WhatsApp: a gente orienta rapidamente o melhor caminho.",
  },
  {
    q: "O que eu preciso enviar no WhatsApp para agilizar?",
    a: "Nome do pet, idade, raça (se souber), peso aproximado, sintomas e há quanto tempo começaram. Se puder, envie foto/vídeo e informe sua região no DF.",
  },
];

export function FaqAccordion() {
  return (
    <section id="faq" className="section">
      <div className="container py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Tire suas dúvidas antes de agendar.
          </p>
        </div>

        <div className="mt-8 rounded-[28px] border border-border bg-card p-5 shadow-softSm md:mt-10 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="last:border-b-0"
              >
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
