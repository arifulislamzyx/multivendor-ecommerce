import { Container } from '@mui/material';
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '450px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },

    container:{
      center:true,
      padding:"2px",
      screens: {
        'sm': '450px',
        'md': '768px',
        'lg': '1150px',
        'xl': '1400px',
        '2xl': '1536px',
        'custom': '1400px', 
      },
    },
  

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
