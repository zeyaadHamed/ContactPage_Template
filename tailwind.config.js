/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "/assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "hsl(148, 38%, 91%)",
        errorInput: "hsl(0, 66%, 54%)",
        buttonColor: "hsl(169, 82%, 27%)",
        formColor: "hsl(0, 0%, 100%)",
        inputColor: "hsl(186, 15%, 59%)",
        textColor: "hsl(187, 24%, 22%)",
      },
      fontSize: {
        primaryFont: "16px",
        bigFont: "34px",
        smallFont: "14px",
      },
    },
  },
  plugins: [],
}

