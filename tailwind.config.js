/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-highlight': '#1a1a1a',
        'dark-accent': '#0f0f1e',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0b0',
        'text-tertiary': '#808080',
        'accent-cyan': '#06b6d4',
      },
      fontFamily: {
        'sans': ['Montserrat', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'Garamond', 'serif'],
      },
      backgroundImage: {
        'dark-noise': `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='darkNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='200' height='200' fill='%230a0a0a' filter='url(%23darkNoise)' opacity='0.08'/%3E%3C/svg%3E")`,
        'gradient-purple-blue': 'linear-gradient(135deg, #A7D321 0%, #7ec943 100%)',
        'gradient-pink-purple': 'linear-gradient(135deg, #A7D321 0%, #6BA92A 100%)',
        'gradient-blue-green': 'linear-gradient(135deg, #A7D321 0%, #5a8f1f 100%)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
