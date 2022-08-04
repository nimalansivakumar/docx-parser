module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter, sans-serif"],
      },
      height: {
        main: "88vh",
      },
      color: {
        gray: "#2e2e2e",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
