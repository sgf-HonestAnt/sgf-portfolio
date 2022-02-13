module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      mono: ['"Fira Code"', "ui-monospace"],
    },
    borderRadius: {
      lg: "10px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
