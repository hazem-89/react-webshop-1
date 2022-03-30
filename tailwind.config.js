module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      themeColor: "#936EFE",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};