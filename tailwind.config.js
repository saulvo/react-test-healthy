/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#414141',
        secondary: '#FFCC21',
        tertiary: '#777777',
        quaternary: '#2E2E2E',
      },
      maxWidth: {
        ct: '60rem',
        p95: '95%',
      },
      screens: {
        xs: '480px',
      },
      padding: {
        full: '100%',
      },
    },
  },
  plugins: [],
};
