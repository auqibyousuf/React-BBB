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
            inverted: {
              hover: "#9AC5F9",
            },
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
            inverted: {
              pressed: "#C5DDFB",
            },
          },
        },
        border: {
          neutral: {
            subdued: "#DFE9EC",
          },
          input: {
            default: "#74929A",
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
    fontFamily: {
      BrHendrixRegular: ["BrHendrix Regular"],
      BrHendrixLight: ["BrHendrix Light"],
      BrHendrixSemiBold: ["BrHendrix SemiBold"],
      BrHendrixBold: ["BrHendrix Bold"],
      BrHendrixThin: ["BrHendrix Thin"],
    },
  },
  plugins: [],
};
