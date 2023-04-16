const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {

	content: [
		'./pages/*.js',
		'./pages/**/*.js',
		'./atoms/*.js',
		'./atoms/**/*.js',
		'./molecules/*.js',
		'./molecules/**/*.js',
		'./molecules/**/**/*.js',
		'./organisms/*.js',
		'./organisms/**/*.js',
		'./organisms/**/**/*.js',
		'./stories/*.js',
		'./stories/**/*.js',
		'./components/**/*.js',
		'./components/*.js'],
	options: {
		whitelist: ['.grid', '.grid-cols-3', '.gap-x-5']
	},
	theme: {
		backgroundSize: {
			'full': '100% 100%',
			'cover': 'cover'
		},	  
		backgroundImage: {
		},
		colors: {
			...colors,
			primary : {
				"lightBlue":'#ADD8E6',
				"main": '#64C4D3',
			    "dark": '#D35055',
				"extradark": '#73476D',
				"light": '#F18B8F',
				"extralight": '#FDEEEF',
			},
			surface : {
				15: '#F8F8F8',
				"overlay-60": '#00000099',
				"overlay-40": '#00000066',
				"overlay-20": '#00000033',
				"background": '#DEDEDE',
			},
			green : {
				100 : '#71B691',
				40 : '#EEFAF4'
			},
			neutral : {
				60 : '#838383',
				50 : '#B8B8B8',
				40: '#F0F1F1',
				20 : '#F3F3F6'
			},
			red : {
				...colors['red'],
				350 : '#FF8181'
			},
			warning: {
				100: '#E99400'
			},
			success: {
				100: '#29823B'
			}
		},

		screens: {
			'xs': '320px',
			'2xs':'360px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'2lg': '1200px',
			'xl': '1280px',
			'2xl': '1536px',
		},

		extend: {
			gridTemplateColumns : (theme) => ({
				'250': 'repeat(auto-fill, minmax(270px, 1fr))',
			}),
			padding: (theme) => ({
				9.5: '2.375rem',
				30: '7.5rem',
				'214': '214px',
				'11px': '0.7rem',

			}),
			margin: (theme) => ({
				'-4': '-1rem',
				'left98': '98%'
			}),
			borderRadius: (theme) => ({
				'32px': '2rem',
				'3px':'0.1875rem'
			}),
			borderColor: () => ({
				'steel': '#74879A',
				'aquaPearl': '#4FBFD7',
				'blueViolet': '#A135E1',
				'green1': '#76D48F'
			}),
			backgroundColor: (theme) => ({
				...theme('colors'),
				'lapis-blue': '#252C86',
				'jacksons-purple': '#2B2C86',
				'lavender-mist': '#E7E9F0',
			}),
			textColor: (theme) => ({
				'text-mirage': '#18191F',
				'lapis-blue': '#252C86',
			}),
			fontWeight: (theme) => ({
				"aboveNormal": "450",
			}),
			fontSize: (theme) => ({
				'title:size': [33, 36],
				'40px': '2.5rem',
				'3.5xl': '2rem',
				'lg-h3': '1.17rem',
				'xs-h5': '.83rem',
				'xs-h6': '.67rem',
				'xxs': '0.50rem',
				'xs-10':'0.625rem'
			}),
			fontFamily: (theme) => ({
				'Nunito': 'Nunito',
				}),
			boxShadow: (theme) => ({
				'btn': '0px 2px 8px rgb(0 0 0 / 20%)'
			}),
			letterSpacing: (theme) => ({
				'1px': '0.063rem'
			}),
			lineHeight: (theme) => ({
				'38px': '2.375rem',
				'50px': '3.125rem',
				'85px': '5.313rem',

			}),
			width: (theme) => ({
				'694px': '694px',
				'18': '72px',
				'85': '340px',
				'2/7' : '45%'
			}),
			height: (theme) => ({
				'70vh': '70vh',
				'90vh': '90vh',
				
			}),
			maxWidth: () => ({
				9: '9rem',
				102.75: '25.6rem',
				}),
			animation: {
				shadowPulse: 'pulse-animation 2s infinite'
			},
			dropShadow: {
				'3xl': '0 5px 6px rgba(5, 4, 6, 0.13)',
				
			}
		}
	},
	variants: {
		extend: {
			animation: ['hover', 'focus'],
			scale: ['active', 'group-hover','hover'],
			borderRadius: ['hover', 'focus', 'first', 'last'],
			margin: ['first', 'last'],
		}
	},
	plugins: [
		require('tailwindcss-rtl'),
	]
};
