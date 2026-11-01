import { test, expect } from '@playwright/test';

test.describe('1in5ky E2E smoke tests', () => {
	test('split region: birth certificate loads its regional baby portrait', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		// Choose the modern era, then the new sub-Saharan profile through the normal birth roll.
		await page.evaluate(() => {
			let calls = 0;
			Math.random = () => calls++ === 0 ? 0.99 : 0.65;
		});
		await page.locator('button.cta').first().click();
		const cert = page.locator('.cert');
		await expect(cert).toBeVisible();
		await expect(cert.locator('.fields')).toContainText(/年 [\d,]+/);
		await expect(cert.locator('.caption-title')).toHaveText('現代コンゴ民主共和国');
		const portrait = cert.locator('.frame img');
		await expect(portrait).toBeVisible();
		await expect(portrait).toHaveAttribute('src', '/images/babies/mod_congo.webp');
		await expect(portrait).toHaveJSProperty('complete', true);
		await expect(portrait).toHaveJSProperty('naturalWidth', 400);
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
		await expect(life.locator('.income-val')).toContainText('/年');

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

	test('decision modal: hides, restores and keeps keyboard focus inside the active decision', async ({ page }) => {
		const pageErrors: Error[] = [];
		page.on('pageerror', (error) => pageErrors.push(error));
		await page.goto('/', { waitUntil: 'networkidle' });
		// A reproducible modern life survives infancy and encounters a dated historical wave.
		await page.evaluate(() => {
			let calls = 0;
			Math.random = () => calls++ === 0 ? 0.99 : 0.5;
		});
		await page.locator('button.cta').first().click();
		await expect(page.locator('.cert')).toBeVisible();
		await page.locator('.cert button.cta').click();
		await page.locator('.bottombar button').filter({ hasText: '»' }).click();

		const dialog = page.getByRole('dialog');
		const firstChoice = dialog.locator('.choices button').first();
		const lastChoice = dialog.locator('.choices button').last();
		const close = dialog.getByRole('button', { name: '閉じる' });
		await expect(dialog).toBeVisible();
		await expect(firstChoice).toBeFocused();
		await expect(page.locator('.life-shell')).toHaveAttribute('inert');
		await lastChoice.focus();
		await page.keyboard.press('Tab');
		await expect(close).toBeFocused();
		await page.keyboard.press('Shift+Tab');
		await expect(lastChoice).toBeFocused();

		await page.keyboard.press('Escape');
		await expect(dialog).not.toBeVisible();
		await expect(page.locator('.life-shell')).not.toHaveAttribute('inert');
		const restore = page.getByRole('button', { name: '決断に戻る' });
		await expect(restore).toBeFocused();
		await restore.click();
		await expect(firstChoice).toBeFocused();
		await close.click();
		await expect(dialog).not.toBeVisible();
		await restore.click();
		await firstChoice.click();
		await expect(dialog).not.toBeVisible();
		expect(pageErrors).toEqual([]);
	});

	test('birth loading: shows a spinner inside the button without shifting the page', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		let held = false;
		let release = () => {};
		const gate = new Promise<void>((resolve) => { release = resolve; });
		await page.route('**/*', async (route) => {
			if (!held && route.request().resourceType() === 'script') {
				held = true;
				await gate;
			}
			await route.continue();
		});
		const button = page.getByRole('button', { name: '生まれる', exact: true });
		await button.scrollIntoViewIfNeeded();
		const before = await button.boundingBox();
		await button.click();
		try {
			await expect(button).toHaveAttribute('aria-busy', 'true');
			await expect(button).toBeDisabled();
			await expect(button.locator('.spinner')).toBeVisible();
			await expect(page.getByText('生まれる時代のデータを読み込んでいます…')).toHaveCount(0);
			expect(await button.boundingBox()).toEqual(before);
		} finally { release(); }
		await expect(page.locator('.cert')).toBeVisible();
	});

	test('rebirth: keeps the current certificate visible instead of flashing the title screen', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.evaluate(() => { Math.random = () => 0.99; });
		await page.getByRole('button', { name: '生まれる', exact: true }).click();
		await expect(page.locator('.cert')).toBeVisible();
		const previousName = await page.locator('.cert .bio h2').textContent();
		let release = () => {};
		const gate = new Promise<void>((resolve) => { release = resolve; });
		let held = false;
		await page.route('**/*', async (route) => {
			if (!held && route.request().resourceType() === 'script') { held = true; await gate; }
			await route.continue();
		});
		await page.evaluate(() => { Math.random = () => 0.01; });
		const button = page.getByRole('button', { name: '生まれ直す', exact: true });
		await button.click();
		try {
			await expect(button).toHaveAttribute('aria-busy', 'true');
			await expect(button.locator('.spinner')).toBeVisible();
			await expect(page.locator('.cert .bio h2')).toHaveText(previousName!);
			await expect(page.locator('.intro')).toHaveCount(0);
		} finally { release(); }
		await expect(button).toHaveAttribute('aria-busy', 'false');
		await expect(page.locator('.cert .bio h2')).not.toHaveText(previousName!);
	});

	test('birth data: handles a failed chunk and recovers after reloading', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		let failed = false;
		await page.route('**/*', (route) => {
			if (!failed && route.request().resourceType() === 'script') {
				failed = true;
				return route.abort();
			}
			return route.continue();
		});
		await page.evaluate(() => {
			let calls = 0;
			Math.random = () => calls++ === 0 ? 0.99 : 0.65;
		});
		await page.locator('button.cta').first().click();
		await expect(page.getByRole('alert')).toContainText('時代のデータを読み込めませんでした');
		await expect(page.locator('.cert')).not.toBeVisible();
		await page.getByRole('button', { name: '再読み込みしてやり直す' }).click();
		await page.waitForLoadState('networkidle');
		await page.locator('button.cta').first().click();
		await expect(page.locator('.cert')).toBeVisible();
	});

	test('Chinese family names: father and child share a surname while mother keeps her own', async ({ page }) => {
		await page.goto('/', { waitUntil: 'networkidle' });
		await page.evaluate(() => {
			const draws = [0.99, 0.1, 0.1, 0.1, 0.5, 0.99, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.6, 0.2, 0.2, 0.2, 0.1];
			Math.random = () => draws.shift() ?? 0.99;
		});
		await page.locator('button.cta').first().click();
		await expect(page.locator('.cert .bio h2')).toHaveText('陳勇');
		await page.locator('.cert button.cta').click();
		await expect(page.locator('.life .nm')).toHaveText('陳勇');
		const family = page.getByRole('region', { name: '家族', exact: true });
		await expect(family).toContainText('陳軍');
		await expect(family).toContainText('林麗');
		await expect(family).toContainText('夫婦はそれぞれの姓を保持');
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
