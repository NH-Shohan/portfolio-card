/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#2eb88a",
      "primary-light": "#2eb88a1a",
      white: "#fbfbfb",
      black: "#262626",
      text: "#a0a0a0",
      background: "#4242424d",
    },
  },
  plugins: [],
};
