import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5C5AEF',
        'secondary': '#B2B9C8'
      },
      spacing: {
        25: '6.25rem', // 100px
        35: '8.75rem', // 140px
        90: '22.5rem' // 360px
      },
      borderWidth: {
        12: '12px'
      }
    }
  },
  plugins: [],
};
export default config;
