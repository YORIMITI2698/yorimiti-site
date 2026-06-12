/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink': '#101216',          // base background (near-black, blue tint)
        'panel': '#181c22',        // raised surfaces
        'line': '#2a2f37',         // hairline borders
        'acid': '#a7d321',         // brand chartreuse (logo) = playhead green
        'leaf': '#6db36d',         // secondary green (existing accent)
        'fog': '#f2f3f0',          // primary text
        'mute': '#9aa0a6',         // secondary text
        'dark-bg': '#101216',
        'dark-highlight': '#2a2f37',
        'dark-accent': '#181c22',
        'text-primary': '#f2f3f0',
        'text-secondary': '#9aa0a6',
        'text-tertiary': '#6b7178',
        'accent-cyan': '#a7d321',
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
