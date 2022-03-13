module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    {
      pattern: /^from/
    },
    {
      pattern: /^via/
    },
    {
      pattern: /^to/
    },
    {
      pattern: /^text/
    },
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: []
};
