/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A", // Fondo principal oscuro
        elementBackground: "#2C2C2C", // Fondo de elementos (tarjetas, inputs)
        primary: "#00C896", // Verde suave para botones y elementos principales
        secondary: "#FFFFFF", // Blanco suave para textos principales
        textSecondary: "#A8A8A8", // Gris claro para textos secundarios
        accent: "#FFD700", // Dorado claro para destacar elementos importantes
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
