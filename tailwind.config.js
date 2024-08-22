/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "800px",
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins Regular",
        PoppinsBold: "Poppins Bold",
        PoppinsItalic: "Poppins Italic",
        PoppinsExtraBold: "Poppins ExtraBold",
      },
      colors: {
        CustomPurple: "hsl(259, 100%, 65%)",
        LightRed: "hsl(0, 100%, 67%)",
        LightGrey: "hsl(0, 0%, 86%)",
        SmokeyGrey: "hsl(0, 1%, 44%)",
      },
    },
  },
  plugins: [],
};
