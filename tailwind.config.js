/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily:{
      ave:["roman","sans-serif"],
      book:["book","sans-serif"],
      med:["medium","sans-serif"],
      roboto:["Roboto", "serif"],
      comme: ["Comme", "serif"],
    
    }},
  },
  plugins: [],
}

