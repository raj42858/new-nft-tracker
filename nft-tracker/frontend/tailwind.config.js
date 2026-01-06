/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Keep all color utilities (bg-, text-, border-, etc.) for dynamic scores/colors
    {
      pattern: /(bg|text|border)-(red|orange|rose|violet|neutral|white|black)-(100|200|300|400|500|600|700|800|900)/,
    },
    // Grid/List view, spacing, sizing
    'grid', 'list', 'gap-1', 'gap-2', 'gap-4', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5',
    'rounded-lg', 'rounded-md', 'shadow-lg',
    'text-xs', 'text-sm', 'text-base', 'text-lg',
    'font-medium', 'w-full', 'h-full', 'flex', 'items-center', 'justify-center',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
