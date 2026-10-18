import { test, expect } from '@playwright/test';

test.describe('1in5ky E2E smoke tests', () => {
	test('smoke: can complete full life cycle from birth to death certificate', async ({ page }) => {
		// Capture any unhandled page errors or crashes
		const pageErrors: Error[] = [];
		page.on('pageerror', (err) => pageErrors.push(err));

		// 1. Visit root and ensure hydration is ready
		await page.goto('/', { waitUntil: 'networkidle' });

		// 2. Click the start button (CTA) to roll a life
		const rollBtn = page.locator('button.cta').first();
		await expect(rollBtn).toBeVisible();
		await rollBtn.click();

		// 3. Confirm transition to Certificate screen (.cert exists)
		const cert = page.locator('.cert');
		await expect(cert).toBeVisible();

		// 4. Click CTA on Certificate to begin the simulation
		const beginBtn = cert.locator('button.cta');
		await expect(beginBtn).toBeVisible();
		await beginBtn.click();

		// 5. Confirm transition to Life screen (.life exists)
		const life = page.locator('.life');
		await expect(life).toBeVisible();

		// 6. Fast-forward through life by answering decisions and advancing years
		// Maximum 50 iterations to avoid infinite loops, stops as soon as .dead appears
		for (let i = 0; i < 50; i++) {
			if (await page.locator('.dead').isVisible()) {
				break;
			}

			// If a decision modal is open, click the first choice
			const choiceBtn = page.locator('.scrim .choices button').first();
			if (await choiceBtn.isVisible()) {
				await choiceBtn.click();
				await page.waitForTimeout(100);
				continue;
			}

			// Otherwise click "次の決断まで »" if visible
			const ffBtn = page.locator('.topbar button').filter({ hasText: '»' }).first();
			if (await ffBtn.isVisible()) {
				await ffBtn.click();
				await page.waitForTimeout(100);
			} else {
				await page.waitForTimeout(200);
			}
		}

		// 7. Verify we successfully reached Death/Results screen without JavaScript crashes
		await expect(page.locator('.dead')).toBeVisible({ timeout: 10000 });

		// 8. Click reborn button and verify we can loop back to Certificate
		const rebornBtn = page.locator('.dead button.cta');
		await expect(rebornBtn).toBeVisible();
		await rebornBtn.click();
		await expect(page.locator('.cert')).toBeVisible();

		// Ensure 0 unhandled console/page errors occurred
		expect(pageErrors).toEqual([]);
	});
});
