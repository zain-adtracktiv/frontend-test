import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        'extra-bold': '800',
        'super-bold': '900',
      },
      colors: {
        backgroundColor: '#D7DBE4',
        borderColor: '#ABB3C6',
        selectedColor: '#473AEE',
        selectedBg: '#E6E4FC',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
export default config;
