import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				brand: {
					100: '#d9ed93',
					200: '#b6e38d',
					300: '#98da8c',
					400: '#75c894'
				},
				dark: {
					base: '#121212',
					100: '#1E1E1E',
					200: '#232323'
				},
				lime: '#BFFF00',
				violet: '#8F00FF'
			}
		}
	},
	plugins: [typography]
} satisfies Config;
