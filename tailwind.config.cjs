/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif']
			},
			colors: {
				brand: {
					white: '#fffaff',
					black: '#1e1b18',
					accent: '#e6007e',
					primary: {
						dark: '#0a2463',
						light: ' #3e92cc'
					}
				}
			}
		}
	},
	plugins: []
}
