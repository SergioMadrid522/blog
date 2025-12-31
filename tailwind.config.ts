/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aquí definimos tus fuentes personalizadas
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      // Aquí definimos tu paleta "Dark Luxury"
      colors: {
        background: "#0a0a0a", // Fondo principal (Gris casi negro)
        surface: "#171717", // Fondo tarjetas/modales
        primary: "#ededed", // Texto principal (Blanco roto)
        secondary: "#a3a3a3", // Texto secundario (Gris medio)
        muted: "#525252", // Texto terciario (Gris oscuro)
        accent: "#d4b572", // Dorado Champagne
      },
    },
  },
  plugins: [],
};
