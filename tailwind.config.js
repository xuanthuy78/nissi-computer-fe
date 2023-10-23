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
    maxHeight: {
      500: "500px",
    },
  },
  plugins: [],
};
