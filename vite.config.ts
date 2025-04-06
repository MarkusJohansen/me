import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: true, // allow external access
		allowedHosts: ['www.markusjohansen.no'] // allow this domain
	}
});
