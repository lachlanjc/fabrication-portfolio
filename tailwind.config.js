/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'var(--font-relative-pro)',
      mono: 'var(--font-relative-mono)',
    },
    extend: {
      boxShadow: {
        card: '0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)',
      },
      aria: {
        dualcol: 'colcount="2"',
      },
    },
  },
  plugins: [],
}
