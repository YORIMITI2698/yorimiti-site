/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e27',
        'dark-secondary': '#1a1f3a',
        'text-primary': '#f0f4ff',
        'text-secondary': '#a8b2d1',
        'accent-cyan': '#06b6d4',
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(135deg, #A7D321 0%, #7ec943 100%)',
        'gradient-pink-purple': 'linear-gradient(135deg, #A7D321 0%, #6BA92A 100%)',
        'gradient-blue-green': 'linear-gradient(135deg, #A7D321 0%, #5a8f1f 100%)',
        'washi-texture': `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='2' /%3E%3C/filter%3E%3Crect width='100' height='100' fill='%23ffffff' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
}
