import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        xl:'1250px',
        lg:'950px',
        md:'700px',
        smd:'560px',
        sm:'450px',
        xs:'340px',
      },
      boxShadow:{
        custom:'0px 4px 8px 0px #0000000D',
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
export default config;
