import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./theme.config.ts",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
