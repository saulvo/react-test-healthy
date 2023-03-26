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
        'primary/300': '#FFCC21',
        'primary/400': '#FF963C',
        'primary/500': '#EA6C00',
        'secondary/300': '#8FE9D0',
        'dark/400': '#777777',
        'dark/500': '#414141',
        'dark/600': '#2E2E2E',
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
