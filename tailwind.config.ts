import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Theme configuration is now in src/app/globals.css using @theme
      // This allows Tailwind CSS 4 to use the new CSS-based configuration
    },
  },
  plugins: [],
};

export default config;
