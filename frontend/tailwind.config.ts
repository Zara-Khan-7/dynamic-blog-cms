import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "banner" : "url('../public/assets/bannerblog.jpg')",
          "programmingbanner" : "url('../public/assets/programming.png')",
          "mentalhealthbanner" : "url('../public/assets/mental6.jpg')",
          "subscribe" : "url('../public/assets/subscribe.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
