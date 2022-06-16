module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f3a952",
        signIn: "hsla(0,0%,100%,.25)",
        popUp: "rgba(0,0,0,.6)",
        textMenu: "#4e5054",
        menuIcon: "#4e4054",
      },
      screens: {
        xl: { max: "1200px" },
        lg: { max: "1023px" },
        ms: { max: "767px" },
        sx: { max: "576px" },
      },
    },
  },
  plugins: [],
};
