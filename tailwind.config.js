module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // AI-inspired futuristic color palette
        ai: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // Primary AI blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        cyber: {
          100: '#e0f7ff',
          200: '#b3ecff',
          300: '#80e0ff',
          400: '#4dd5ff',
          500: '#1ac9ff',  // Vibrant cyber blue
          600: '#00a3cc',
          700: '#007799',
          800: '#005266',
          900: '#002c33',
        },
        neural: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',  // Neural purple
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        matrix: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Matrix green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        platinum: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',  // Neutral platinum
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      typography: (theme) => ({
        ai: {
          css: {
            '--tw-prose-headings': theme('colors.ai.600'),
            '--tw-prose-links': theme('colors.cyber.500'),
            '--tw-prose-bold': theme('colors.neural.700'),
            '--tw-prose-code': theme('colors.matrix.500'),
            '--tw-prose-quote-borders': theme('colors.ai.300'),
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