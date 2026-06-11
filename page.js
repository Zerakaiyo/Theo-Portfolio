/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'Arial', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'cinema': '0.32em',
      },
      backgroundImage: {
        'grain': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.11) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
