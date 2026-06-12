/** @type {import('tailwindcss').Config} */
// v2 "Yorimichi Trail" palette — warm paper, sumi ink, moss green, vermilion.
// Token NAMES kept from v1 so every page re-skins automatically.
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink': '#f6f2e8',          // base background (warm paper)
        'panel': '#ede7d8',        // raised paper
        'line': '#d9d1c0',         // hairline borders
        'acid': '#6b8e0f',         // moss green (readable on paper)
        'bud': '#a7d321',          // logo chartreuse, fills only
        'leaf': '#4e7d52',         // deep leaf green
        'beni': '#c2451f',         // vermilion (hanko / markers)
        'fog': '#2a2723',          // sumi ink text
        'mute': '#79715f',         // secondary text
        'dark-bg': '#f6f2e8',
        'dark-highlight': '#d9d1c0',
        'dark-accent': '#ede7d8',
        'text-primary': '#2a2723',
        'text-secondary': '#79715f',
        'text-tertiary': '#a39a85',
        'accent-cyan': '#6b8e0f',
      },
      fontFamily: {
        'sans': ['Sawarabi Gothic', 'M PLUS 1', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        'disp': ['M PLUS 1', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        'tc': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
