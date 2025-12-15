/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        platform: {
          primary: "#FF007F",
          secondary: "#F974CA",
          text: "#FFE7F3",
          dark: {
            900: "#37001A",
            800: "#2A0014",
            700: "#1D000E",
            600: "#14000A",
          },
        },
      },
      backgroundImage: {
        "platform-gradient": "linear-gradient(135deg, #FF007F 0%, #F974CA 100%)",
        "platform-gradient-dark": "linear-gradient(135deg, #37001A 0%, #2A0014 29%, #1D000E 57%, #14000A 100%)",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
