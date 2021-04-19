module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1170px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: theme => ({
        'service-special': "url('/src/assets/service-spacial.jpg')",
       })
      
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus', 'group-hover'],
      transitionProperty: ['hover', 'focus', 'group-hover'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
