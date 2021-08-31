module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mygreen: "#346751",
        myorange: "#E2654B",
        mybeige: "#f4ede4",
        midtone: "#4C4343",
        myblack: "#161616",
        myblue: "#9EBDD0",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(150px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(100)",
          },
        },

        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.3s ease-out",
        "fade-in-up": "fade-out-up 0.3s ease-out",
        "fade-in-right": "fade-in-right 0.7s ease-out",
        "fade-in-left": "fade-in-left 0.7s ease-out",
      },
    },
    fontFamily: {
      body: ["Montserrat"],
      headline: ["Syne"],
    },
  },
  variants: {
    animation: ["motion-safe"],

    extend: {},
  },
};
