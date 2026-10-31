import { test, expect } from '@playwright/test';

test.describe('1in5ky E2E smoke tests', () => {
	test('split region: birth certificate shows a neutral portrait when regional artwork is unavailable', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		// Choose the modern era, then the new sub-Saharan profile through the normal birth roll.
		await page.evaluate(() => {
			let calls = 0;
			Math.random = () => calls++ === 0 ? 0.99 : 0.65;
		});
		await page.locator('button.cta').first().click();
		const cert = page.locator('.cert');
		await expect(cert).toBeVisible();
		await expect(cert.locator('.caption-title')).toHaveText('現代サハラ以南アフリカ');
		const portrait = cert.getByRole('img', { name: '出生時の肖像画は準備中' });
		await expect(portrait).toBeVisible();
		await expect(cert.locator('.frame img')).toHaveCount(0);
		const frameBox = await cert.locator('.frame').boundingBox();
		const portraitBox = await portrait.boundingBox();
		expect(portraitBox!.width).toBeLessThanOrEqual(frameBox!.width);
		expect(portraitBox!.height).toBeLessThanOrEqual(frameBox!.height);
	});

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

		// 6. Fast-forward through life by answering decisions and advancing years until death
		// Maximum 200 iterations (safe ceiling well beyond MAX_AGE 110 with all decisions answered)
		for (let i = 0; i < 200; i++) {
			if (await page.locator('.dead').isVisible()) {
				break;
			}

			// If a decision modal is open, click the first choice
			const choiceBtn = page.locator('.scrim .choices button').first();
			if (await choiceBtn.isVisible()) {
				await choiceBtn.click();
				await page.waitForTimeout(50);
				continue;
			}

			// Otherwise click "次の決断まで »" in the sticky bottom bar if visible
			const ffBtn = page.locator('.bottombar button').filter({ hasText: '»' }).first();
			if (await ffBtn.isVisible()) {
				await ffBtn.click();
				await page.waitForTimeout(50);
			} else {
				await page.waitForTimeout(100);
			}
		}
		// 7. Verify we successfully reached Death/Results screen without JavaScript crashes
		await expect(page.locator('.dead')).toBeVisible({ timeout: 10000 });

		// 8. Click reborn button and verify we can loop back to Certificate
		const rebornBtn = page.locator('.dead button.cta');
		await expect(rebornBtn).toBeVisible();
		await rebornBtn.click();
		await expect(page.locator('.cert')).toBeVisible();

		// 9. Click back button on Certificate and verify returning to Title screen
		const backBtn = page.locator('.cert button.back');
		await expect(backBtn).toBeVisible();
		await backBtn.click();
		await expect(page.locator('.intro')).toBeVisible();

		// Ensure 0 unhandled console/page errors occurred
		expect(pageErrors).toEqual([]);
	});

	test('decision modal: can close modal, view background, and reopen via "決断に戻る"', async ({ page }) => {
		const pageErrors: Error[] = [];
		page.on('pageerror', (err) => pageErrors.push(err));

		await page.goto('/', { waitUntil: 'networkidle' });

		// Roll a life and begin
		await page.locator('button.cta').first().click();
		const cert = page.locator('.cert');
		await expect(cert).toBeVisible();
		await cert.locator('button.cta').click();

		const life = page.locator('.life');
		await expect(life).toBeVisible();

		// Advance until a decision modal appears
		let foundDecision = false;
		for (let i = 0; i < 40; i++) {
			if (await page.locator('.scrim .choices button').first().isVisible()) {
				foundDecision = true;
				break;
			}
			if (await page.locator('.dead').isVisible()) {
				// Character died before a decision; re-roll by restarting
				break;
			}
			const ffBtn = page.locator('.bottombar button').filter({ hasText: '»' }).first();
			if (await ffBtn.isVisible()) {
				await ffBtn.click();
			}
			await page.waitForTimeout(100);
		}

		if (foundDecision) {
			const scrim = page.locator('.scrim');
			await expect(scrim).toBeVisible();

			// 1. Click close button on modal
			const closeBtn = page.locator('.dec-close-btn');
			await expect(closeBtn).toBeVisible();
			await expect(closeBtn).toHaveText('閉じる');
			await closeBtn.click();

			// 2. Modal is now hidden, background is interactive
			await expect(scrim).not.toBeVisible();
			const lifeShell = page.locator('.life-shell');
			await expect(lifeShell).not.toHaveAttribute('inert');

			// 3. Bottom bar has "決断に戻る" button instead of "次の決断まで »"
			const returnBtn = page.locator('.bottombar button').filter({ hasText: '決断に戻る' }).first();
			await expect(returnBtn).toBeVisible();

			// 4. Click "決断に戻る" to reopen modal
			await returnBtn.click();
			await expect(scrim).toBeVisible();

			// 5. Select a choice to resolve decision
			const choiceBtn = page.locator('.scrim .choices button').first();
			await expect(choiceBtn).toBeVisible();
			await choiceBtn.click();

			// Modal closes after choice selection
			await expect(scrim).not.toBeVisible();
		}

		expect(pageErrors).toEqual([]);
	});

	test('theme toggle: overrides OS scheme and persists across reload', async ({ browser }) => {
		const ctx = await browser.newContext({ colorScheme: 'dark' });
		const page = await ctx.newPage();
		const html = page.locator('html');

		await page.goto('/', { waitUntil: 'networkidle' });
		await expect(html).toHaveAttribute('data-theme', 'dark');

		const toggle = page.locator('.theme-toggle');
		await toggle.click();
		await expect(html).toHaveAttribute('data-theme', 'light');
		await expect(toggle).toHaveAttribute('aria-pressed', 'false');

		await page.reload({ waitUntil: 'networkidle' });
		await expect(html).toHaveAttribute('data-theme', 'light');
		await expect(toggle).toHaveAttribute('aria-pressed', 'false');

		await ctx.close();
	});
});
