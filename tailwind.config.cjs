const plugin = require('tailwindcss/plugin');

module.exports = {
	plugins: [
		plugin(function ({ addVariant, e }) {
			addVariant('child(3)', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					return `.${e(`child(3)${separator}${className}`)}:nth-child(3)`;
				});
			});
		})
	]
};

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: []
};

module.exports = config;
