// tailwind.config.js
module.exports = {
  
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}"
  ],
  plugins: [
    require('tailwindcss-animated')
  ],
  // ...
};