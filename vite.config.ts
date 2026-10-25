import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			csp: {
				mode: 'auto',
				directives: {
					'default-src': ['self'],
					'script-src': ['self', 'https://va.vercel-scripts.com'],
					'style-src': ['self', 'unsafe-inline'],
					'img-src': ['self', 'data:'],
					'font-src': ['self'],
					'connect-src': [
						'self',
						'https://vitals.vercel-insights.com',
						'https://va.vercel-scripts.com',
						...(mode === 'development' ? (['ws://127.0.0.1:*', 'ws://localhost:*'] as const) : [])
					],
					'object-src': ['none'],
					'base-uri': ['self'],
					'form-action': ['self'],
					'frame-ancestors': ['none']
				}
			},
			adapter: adapter({
				runtime: 'nodejs24.x'
			})
		})
	]
}));
