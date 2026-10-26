const browser = typeof window !== 'undefined';

export type Theme = 'light' | 'dark';

export const THEME_KEY = '1in5ky.theme';

const THEME_COLOR: Record<Theme, string> = { light: '#7B2334', dark: '#14110E' };

class ThemeStore {
	current = $state<Theme>('light');

	/** app.html のインラインスクリプトが解決済みの data-theme を読み取る */
	hydrate(): void {
		if (!browser) return;
		this.current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
	}

	toggle(): void {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = this.current;
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', THEME_COLOR[this.current]);
		try {
			localStorage.setItem(THEME_KEY, this.current);
		} catch {
			// Ignore storage quota or privacy-mode restrictions
		}
	}
}

export const theme = new ThemeStore();
