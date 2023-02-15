/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/components/**/*.{html,js,tsx}", "./src/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          interactive: {
            default: "#0054BA",
          },
          neutral: {
            medium: "#EFF4F6",
          },
        },
        core: {
          primary: "#142855",
        },
        text: {
          interactive: {
            hover: "#00295C",
          },
        },
        border: {
          neutral: {
            subdued: "#DFE9EC",
          },
        },
      },
    },
    screens: {
      xs: "320px",

      sm: "768px",

      md: "1024px",

      lg: "1440px",
    },
  },
  plugins: [],
};
