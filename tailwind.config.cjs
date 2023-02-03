/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			warn: 'var(--warn)',
			white: 'var(--white)',
			'primary-color': 'var(--primary-color)',
			'text-acent': 'var(--text-acent)'
		}
	},
	plugins: []
};
