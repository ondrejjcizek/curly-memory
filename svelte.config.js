import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: `@import './src/app.scss'`
			},
			postcss: true
		})
	],
	onwarn: (warning, handler) => {
		const { code, frame } = warning;
		if (code === 'css-unused-selector') return; // Because warnings about unused selectors from imported tailwind components

		handler(warning);
	}
};

export default config;
