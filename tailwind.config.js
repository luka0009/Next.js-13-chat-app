/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-1': 'linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);',
        'gradient-2': 'linear-gradient(-225deg, #FFAA1D 0%, #299617 29%, #FA5B3D 67%, lawngreen 100%);',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
