/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        10: '0.625rem',
        15: '0.9375rem',
        22: '1.375rem',
      },
      colors: {
        primary: '#414141',
        secondary: '#FFCC21',
        tertiary: '#777777',
        quaternary: '#2E2E2E',
        orange: '#FF963C',
      },
      maxWidth: {
        ct: '60rem',
        p95: '95%',
      },
      screens: {
        xs: '480px',
      },
      margin: {
        2.5: '0.625rem',
      },
      padding: {
        full: '100%',
        5.5: '1.375rem',
      },
    },
  },
  plugins: [],
};
