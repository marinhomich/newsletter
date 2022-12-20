/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          claro: "#C5DFFF",
          escuro: "#061E3C",
          hover: "#1057B0",
        },
      },
    },
  },
  plugins: [],
}
