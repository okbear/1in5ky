import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'http://127.0.0.1:5199';

export default defineConfig({
	testDir: './tests',
	timeout: 30000,
	expect: {
		timeout: 5000
	},
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'list',
	use: {
		baseURL,
		trace: 'on-first-retry'
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'mobile-chrome',
			use: { ...devices['Pixel 5'] }
		}
	],
	// If BASE_URL is not set (e.g. running locally against dev server), launch webServer
	webServer: process.env.BASE_URL
		? undefined
		: {
				command: 'bun run dev --port 5199 --host 127.0.0.1',
				url: 'http://127.0.0.1:5199',
				reuseExistingServer: !process.env.CI,
				timeout: 120000
			}
});
