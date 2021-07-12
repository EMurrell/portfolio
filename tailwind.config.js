module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mygreen: "#3A6351",
        myorange: "#E48257",
        mybeige: "#F2EDD7",
        midtone: "#4C4343",
        myblack: "#231F1F",
        myblue: "#9EBDD0",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.9s ease-out",
      },
    },
    fontFamily: {
      body: ["Fahkwang"],
      headline: ["Syne"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
