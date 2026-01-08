import Link from "next/link";
import { Dog, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Taxa zero", href: "#taxa-zero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Dra. Larissa", href: "#bio" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="#home" className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary">
                <Dog className="h-10 w-10" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-none text-foreground">
                  {siteConfig.name}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {siteConfig.tagline}
                </div>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-7">
              Atendimento veterinário domiciliar em {siteConfig.region}. Comodidade,
              segurança e carinho para o seu pet.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground">Links rápidos</div>
            <ul className="mt-4 grid gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-foreground">Contato</div>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4" />
                <a
                  className="link hover:text-foreground"
                  href={`tel:${siteConfig.phoneE164}`}
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4" />
                <a
                  className="link hover:text-foreground"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="mt-0.5 h-4 w-4" />
                <a
                  className="link hover:text-foreground"
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram @trivita_vet
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>{siteConfig.region}</span>
              </li>
              <li className="text-xs">
                Horário: Seg a Sáb • 8h às 20h
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </div>
          <div>
            Feito com Next.js + Tailwind.
          </div>
        </div>
      </div>
    </footer>
  );
}
