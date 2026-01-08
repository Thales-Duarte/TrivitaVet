import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", ".dark"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Cores base via CSS variables (compatível com shadcn/ui)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Destaque (ouro/laranja) — uso controlado para quebrar monocromia
        warning: {
          DEFAULT: "hsl(var(--brand))",
          // Contraste para texto/ícone em cima do laranja
          foreground: "hsl(var(--foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /**
         * Trivita Vet Design System (aproximado do logo)
         * - primary: verde floresta (confiança / natureza)
         * - accent/cta: mostarda/laranja (ação)
         * - base: creme (orgânico / aconchego)
         */
        trivita: {
          forest: "#1B4332", // Verde Escuro (Principal)
          forestDark: "#0D2119", // Verde Profundo (Texto)
          accent: "#68914D", // Verde Claro (Acento)
          gold: "#F4A261", // Laranja/Ouro
          cream: "#FDF8F1", // Creme
          ink: "#0D2119", // Texto
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        // "neomorphism" leve / soft
        soft: "0 12px 30px rgba(15, 23, 42, 0.08)",
        softSm: "0 10px 20px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
