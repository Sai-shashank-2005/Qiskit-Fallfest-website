/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        text: 'rgb(var(--color-text-rgb) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted-rgb) / <alpha-value>)',
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        quantum: 'rgb(var(--color-quantum-rgb) / <alpha-value>)',
        lavender: 'rgb(var(--color-lavender-rgb) / <alpha-value>)',
        border: 'rgb(var(--color-border-rgb) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
