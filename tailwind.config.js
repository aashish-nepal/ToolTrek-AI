module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
          },
        },
        typography: (theme) => ({
          indigo: {
            css: {
              '--tw-prose-headings': theme('colors.indigo.600'),
              '--tw-prose-links': theme('colors.indigo.600'),
              '--tw-prose-bold': theme('colors.indigo.700'),
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  };