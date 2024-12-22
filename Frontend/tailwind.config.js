/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "5vw" : "5vw",
        "7vw" : "7vw",
        "9vw" : "9vw"
      },
      zIndex: {
        "60": "60", // Add a higher z-index value
        "70": "70", // Add an even higher value
        "custom-low": "5", // Add a custom lower z-index value
      }
    },
  },
  plugins: [],
}

