import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: '#FF8100',         // Botões, ícones, destaques
        secundario: '#FFCE00',       // Alertas, hover, indicadores
        fundoCard: '#E0E0E0',        // Fundo de cards, caixas
        textoSecundario: '#BDBDBD',  // Subtítulos, descrições
        titulo: '#333333',           // Títulos fortes
        textoPrincipal: '#000000',   // Corpo do texto
        fundoGeral: '#FFFFFF',       // Background principal
      },
      fontFamily: {
        titulo: ['"Poppins"', 'sans-serif'],
        corpo: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        tituloGrande: '2.5rem', // 40px
        subtitulo: '1.5rem',     // 24px
        corpo: '1rem',           // 16px
        pequeno: '0.875rem',     // 14px
      },
      spacing: {
        paddingCard: '1.5rem',
        gapPadrao: '1rem',
      },
      borderRadius: {
        suave: '0.5rem',
        arredondado: '1rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.05)',
        hover: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
