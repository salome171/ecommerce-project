/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      maxWidth:{
        container: "1440px"
      },
      screens: {
        xs: "320",
        sm: "375",
        sml: "500",
        md: "667",
        mdl: "768",
        lg: "960",
        lgl: "1024",
        xl: "1280px"
      },
      fontFamily: {
        titlefont: "Poppins"
      },
      colors: {
        amazonright: "#232F3E",
      }
    },
  },
  plugins: [],
}


