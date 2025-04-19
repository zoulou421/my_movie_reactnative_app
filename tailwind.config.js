/** @type {import('tailwindcss').Config} */
module.exports = {
  //Note:Update this to include the paths to all of your components
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets:[require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#151312',
        light:{
          100:'#D6C6FF',
          200:'#A8B5DB',
          300:'#9CA4AB'
        },
        dark:{
          100:'#221f3d',
          200:'#0f0d23',
        },
        accent: '#AB8BFF',
      },
    },
  },
  plugins: [],
}

