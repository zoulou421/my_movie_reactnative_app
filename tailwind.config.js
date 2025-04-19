/** @type {import('tailwindcss').Config} */
module.exports = {
  //Note:Update this to include the paths to all of your components
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

