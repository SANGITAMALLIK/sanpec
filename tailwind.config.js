/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  
  // Safelist for Electric Power Layout - ensures these classes aren't purged in production
  safelist: [
    // Background colors
    'bg-gray-50',
    'bg-white',
    'bg-[#101631]',
    'bg-[#CD091B]',
    'bg-gray-100',
    'bg-gray-400',
    'bg-black/50',
    
    // Border colors
    'border-[#101631]',
    'border-[#CD091B]',
    'border-transparent',
    'border-gray-200',
    
    // Text colors
    'text-white',
    'text-gray-400',
    'text-[#CD091B]',
    
    // Font weights
    'font-semibold',
    'font-bold',
    
    // Border widths
    'border-l-2',
    'border-l-4',
    'border-r-2',
    'border-r',
    
    // Hover states
    'hover:bg-gray-50',
    'hover:bg-white',
    
    // Transitions
    'transition-colors',
    
    // Z-index
    'z-10',
    'z-30',
    'z-40',
    
    // Positioning
    'fixed',
    'sticky',
    'absolute',
    'relative',
    
    // Display
    'hidden',
    'block',
    'flex',
    
    // Custom heights
    'h-[370px]',
    'min-h-screen',
  ],
  
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    
    extend: {
      maxWidth: {
        '7_5xl': '90rem', // 1440px
      },
      
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "body-color": "#788293",
        "body-color-dark": "#959CB1",
        "gray-dark": "#1E232E",
        "gray-light": "#F0F2F9",
        stroke: "#E3E8EF",
        "stroke-dark": "#353943",
        "bg-color-dark": "#171C28",
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      
      dropShadow: {
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
      },
    },
  },
  plugins: [],
};