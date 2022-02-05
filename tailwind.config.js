module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    animation: {
      'ping-slow': 'ping 3s linear infinite',
    },
    screens: {
      sm: '641px',
      md: '769px',
      lg: '1025px',
      xl: '1113px',
      xxl: '1241px',
      xxxl: '1501px',
      'xxxl-down': { raw: '(max-width: 1500px)' },
      'xxl-down': { raw: '(max-width: 1240px)' },
      'xl-down': { raw: '(max-width: 1112px)' },
      'lg-down': { raw: '(max-width: 1024px)' },
      'md-down': { raw: '(max-width: 768px)' },
      'sm-down': { raw: '(max-width: 640px)' },
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        black: '#212b36',
        dark: '#090E34',
        'dark-700': '#090e34b3',
        primary: '#3056D3',
        secondary: '#13C296',
        'body-color': '#637381',
        warning: '#FBBF24',
      },
    },
  },
  plugins: [],
};
