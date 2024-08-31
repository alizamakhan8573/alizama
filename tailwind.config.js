/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        gridTemplateColumns: {
          'auto': 'repeat(auto-fit, minmax(200px,1fr))',
        },
        fontFamily: {
          Outfit: ['Outfit', 'sans-serif'],
          Ovo: ['Ovo', 'serif'],
        },
        colors: {
            lightHover: ['#fcf4ff'],
            daerkHover: ['#fcf4ff'],
            darkTheme: '#11001F',
        },
        boxShadow: {
            'black':'4px 4px 0 #fff',
            'white': '4px 4px 0 #fff',
        },
      },
    },
    darkMode: 'class', // Use 'class' or 'media' instead of 'selector'
  };
  