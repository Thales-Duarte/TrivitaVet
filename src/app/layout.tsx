import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// Texto: Inter (legibilidade e espaçamento ótimos em mobile)
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Títulos: Montserrat (identidade da marca)
const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: ajuste para o domínio final (ex.: https://trivitavet.com.br)
  metadataBase: new URL("https://trivitavet.com.br"),
  title: {
    default: "Trivita Vet | Veterinário a domicílio em Brasília-DF",
    template: "%s | Trivita Vet",
  },
  description:
    "Saúde e bem-estar para o seu pet onde ele se sente melhor: em casa. Agende pelo WhatsApp.",
  applicationName: "Trivita Vet",
  keywords: [
    "veterinário a domicílio",
    "veterinário em casa",
    "atendimento veterinário",
    "vacina em domicílio",
    "Brasília",
    "Brasília-DF",
    "DF",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: "Trivita Vet | Veterinário a domicílio em Brasília-DF",
    description:
      "Saúde e bem-estar para o seu pet onde ele se sente melhor: em casa. Agende pelo WhatsApp.",
    siteName: "Trivita Vet",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Trivita Vet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trivita Vet | Veterinário a domicílio em Brasília-DF",
    description:
      "Saúde e bem-estar para o seu pet onde ele se sente melhor: em casa. Agende pelo WhatsApp.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
