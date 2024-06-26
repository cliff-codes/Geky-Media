module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: { screens: { md: { max: "1050px" }, sm: { max: "550px" },ms: {max: "720px"}, xs:{ max: "480px"} }, extend: {},

    textShadow: {
      'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
      'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
      'xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
