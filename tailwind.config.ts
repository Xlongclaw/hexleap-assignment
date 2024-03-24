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
        sm:'450px',
        xs:'340px',
      },
      boxShadow:{
        custom:'0px 4px 8px 0px #0000000D',
        "inner-custom":'inset 0px 4px 8px 0px #0000000D'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        
      }
    },
  },
  plugins: [],
  darkMode:'class'
};
export default config;
