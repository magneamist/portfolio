import { Calculator } from "lucide-react";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			sand: '#F7BD96',
  			pink: '#F4817C',
  			orange: '#F18E4B',
  			blue: '#6A8F94',
  			green: '#C9D5AD',
  			grey: '#333333',
  			'sg-red': '#AE514B',
  			'sg-blue': '#2C94D1',
  			'sg-yellow': '#F29542',
  			'sg-green': '#92C863',
  			'vestra-green': '#7CE37F',
  			'luna-blue': '#40567A',
  			'fs-green': '#646A28',
  			'fs-pink': '#FD7463',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			alexandria: [
  				'var(--font-alexandria)'
  			],
  			raleway: [
  				'var(--font-raleway)'
  			],
  			lora: [
  				'var(--font-lora)'
  			]
  		},
  		height: {
  			projects: 'calc(100vh - 168px)'
  		},
  		fontSize: {
  			fluid: 'clamp(2rem, 7.5vw, 150px)',
  			smallfluid: 'clamp(1rem, 8vw, 150px)'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					left: '0',
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					left: 'calc(100% - 150px)',
  					transform: 'translateY(calc(100% - 150px))'
  				}
  			}
  		},
  		animation: {
  			float: 'float 20s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
