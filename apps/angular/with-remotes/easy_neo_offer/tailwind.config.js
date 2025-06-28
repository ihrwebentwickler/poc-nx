/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('@angular-devkit/core');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1366px',
      '2xl': '1920px',
    },
  },
  plugins: [],
};
