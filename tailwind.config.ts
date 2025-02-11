import { Calculator } from "lucide-react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#222222",
        foreground: "#FFEDE1",
        sand: '#F7BD96',
        pink: '#F4817C',
        orange: '#F18E4B',
        blue: '#6A8F94',
        green: '#C9D5AD',
        grey:'#333333',
        "sg-red": '#AE514B',
        "sg-blue": '#2C94D1',
        "sg-yellow": '#F29542',
        "vestra-green": '#7CE37F',
        "luna-blue": '#40567A',
        "fs-green": '#646A28',
        "fs-pink": '#FD7463',
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)"],
        raleway: ["var(--font-raleway)"],
        lora: ["var(--font-lora)"],
      },
      height: {
        projects: "calc(100vh - 168px)",
      },
      fontSize: {
        fluid: 'clamp(2rem, 7.5vw, 150px)'
      },
      keyframes:{
      float: {
        '0%, 100%': {
          left: '0',
          transform: 'translateY(0)',
        },
        '50%' : {
          left: 'calc(100% - 150px)',
          transform: 'translateY(calc(100% - 150px))',
        }
      },
    },
    animation: {
      float: 'float 20s ease-in-out infinite',
    },
  },
},
  plugins: [],
} satisfies Config;
