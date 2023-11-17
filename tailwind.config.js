/** @type {import('tailwindcss').Config} */
import { themeColor } from "./src/features/common";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: themeColor.primary,
        "primary-fa": themeColor.primaryFa,
        secondary: themeColor.secondary,
        "blue-green": themeColor.blueGreen,
        "blue-sky": themeColor.skyBlue,
        "selective-yellow": themeColor.selectiveYellow,
      },
    },
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px",
    },
    maxHeight: {
      700: "42rem",
    },
  },
  plugins: [],
};
