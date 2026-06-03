export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#2a2218',
        'brand-cream': '#f5f0ea',
        'brand-gold': '#c9a96e',
        'brand-secondary': '#6b5a48',
        'brand-muted': '#9e8a72',
        'brand-light': '#e8dfd3',
        'brand-warm': '#f0e8dc'
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
