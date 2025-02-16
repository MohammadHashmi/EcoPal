/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
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
  			main: '#A3E636',
  			overlay: 'rgba(0,0,0,0.8)',
  			bg: '#000',
  			text: '#000',
  			border: '#000',
  			darkBg: '#2c312b',
  			darkText: '#eeefe9',
  			darkBorder: '#000',
  			secondaryBlack: '#212121'
  		},
  		borderRadius: {
  			base: '0px'
  		},
  		boxShadow: {
  			light: '4px 4px 0px 0px #000',
  			dark: '4px 4px 0px 0px #000'
  		},
  		translate: {
  			boxShadowX: '4px',
  			boxShadowY: '4px',
  			reverseBoxShadowX: '-4px',
  			reverseBoxShadowY: '-4px'
  		},
  		fontWeight: {
  			base: '500',
  			heading: '700'
  		},
  		animation: {
  			marquee: 'marquee 10s linear infinite',
  			marquee2: 'marquee2 10s linear infinite'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			marquee2: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
