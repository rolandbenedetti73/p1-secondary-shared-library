/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require('./tailwind.preset.js'),
  ],
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
