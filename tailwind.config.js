/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // large AND clearly wider than tall (not roughly square)
        wide: { raw: "(min-width: 1024px) and (min-aspect-ratio: 6/5)" },      },
    },
  },
  plugins: [],
}