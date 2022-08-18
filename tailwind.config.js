/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {

    extend: {
      colors:{
        primary:"#011936",
        secondary:"#0F2149",
        dimWhite:"#738197",
        dimBlue:"#1F3261",
        card:"#0F2149"
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
      },
    },
    screens:{
      xs:"480px",
      ss:"620px",
      sm:"768px",
      md:"1060px",
      lg:"1200px",
      xl:"1700px",
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  variants:{
    scrollbar: ['dark']
  },
}

