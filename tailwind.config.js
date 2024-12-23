/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
    "./public/index.html",        // Optionally include your public index file
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom color
        primary: {
          
          DEFAULT: '#0F9F96',
          light:'#07F8E7',
        },
        
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      screens: {
        xs: '480px', // Optional extra small screen breakpoint
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
