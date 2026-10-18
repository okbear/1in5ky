import { injectAnalytics } from '@vercel/analytics/sveltekit';

const dev = import.meta.env.DEV;

injectAnalytics({
	mode: dev ? 'development' : 'production'
});
