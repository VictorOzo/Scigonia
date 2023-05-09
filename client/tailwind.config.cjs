/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			colors: {
				sunglow: {
					DEFAULT: '#FFCA31',
					50: '#FFF9E9',
					100: '#FFF4D4',
					200: '#FFE9AB',
					300: '#FFDF83',
					400: '#FFD45A',
					500: '#FFCA31',
					600: '#F8B800',
					700: '#C08E00',
					800: '#886500',
					900: '#503B00',
				},
				'great-blue': {
					DEFAULT: '#2A669F',
					50: '#E4F7F8',
					100: '#CCEEF2',
					200: '#9CD7E5',
					300: '#6CB9D8',
					400: '#3B94CB',
					500: '#2A669F',
					600: '#234B83',
					700: '#1B3366',
					800: '#14204A',
					900: '#0C102E',
				},
			},
		},
	},
	plugins: [],
};
