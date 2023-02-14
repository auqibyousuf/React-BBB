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
        icon: {
          interactive: {
            hover: "#00295C",
          },
        },
      },
    },
  },
  plugins: [],
};
