const getColor = (cssVar) => `hsl(var(${cssVar}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.jsx',
    './src/components/**/*.jsx',
    './src/patterns/**/*.jsx',
    './src/views/**/*.jsx',
  ],
  theme: {
    colors: {
      base: {
        DEFAULT: getColor('--base'),
        content: getColor('--base-c'),
      },
      neutral: {
        DEFAULT: getColor('--neutral'),
        content: getColor('--neutral-c'),
      },
      gray: {
        DEFAULT: getColor('--gray-p'),
        secondary: getColor('--gray-s'),
        tertiary: getColor('--gray-t'),
      },

      current: 'currentColor',
      transparent: 'transparent',
    },
    extend: {
      letterSpacing: {
        md: '.5em',
      },
    },
  },
  plugins: [require('@tushargugnani/tailwind-group-peer-checked')],
};
