/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: "100%",
        md: "768px",
        lg: "1200px",
        xl: "1280px",
        "2xl": "1340px",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1340px",
    },
    extend: {
      boxShadow: {
        lg: "0px 2px 8px -2px rgba(0, 0, 0, 0.05), 0px 16px 32px -4px rgba(0, 0, 0, 0.08)" 
      },
      colors: {
        zinc: {
          700: 'rgba(255, 255, 255, 0.1)',
          800: 'rgba(255, 255, 255, 0.06)',
        }
      }
    },
  },
  plugins: [],
}


