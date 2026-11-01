<script lang="ts">
	import type { ChoiceOption, DecisionEvent } from '#lib/types';
	import { getEventImage } from '#lib/data/eventImages';

	let { decision: d, age, onchoose, ondismiss }: {
		decision: DecisionEvent;
		age: number;
		onchoose: (choice: ChoiceOption) => void;
		ondismiss: () => void;
	} = $props();
	const evImg = $derived(getEventImage(d.id));
	let dialogEl = $state<HTMLDivElement | null>(null);

	$effect(() => {
		const root = document.documentElement;
		const body = document.body;
		const { scrollX, scrollY } = window;
		const scrollbarWidth = window.innerWidth - root.clientWidth;
		const paddingRight = getComputedStyle(body).paddingRight;
		const properties = ['position', 'top', 'left', 'width', 'overflow', 'padding-right'];
		const previous = properties.map((property) => ({
			property,
			value: body.style.getPropertyValue(property),
			priority: body.style.getPropertyPriority(property)
		}));
		const rootOverflow = root.style.overflow;

		// Fix the page in place on touch browsers as well as desktop browsers.
		root.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.top = `-${scrollY}px`;
		body.style.left = `-${scrollX}px`;
		body.style.width = '100%';
		body.style.overflow = 'hidden';
		body.style.paddingRight = `calc(${paddingRight} + ${scrollbarWidth}px)`;

		return () => {
			for (const { property, value, priority } of previous) {
				if (value) body.style.setProperty(property, value, priority);
				else body.style.removeProperty(property);
			}
			root.style.overflow = rootOverflow;
			window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
		};
	});

	$effect(() => {
		d;
		dialogEl?.querySelector<HTMLButtonElement>('.choices button')?.focus();
	});

	const onBackdropClick = (event: MouseEvent): void => {
		if (event.target === event.currentTarget) ondismiss();
	};

	const onKeydown = (event: KeyboardEvent): void => {
		if (event.key === 'Escape') {
			event.preventDefault();
			ondismiss();
			return;
		}
		if (event.key !== 'Tab' || !dialogEl) return;
		const buttons = dialogEl.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
		const first = buttons[0];
		const last = buttons[buttons.length - 1];
		if (!first || !last) return;
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	};
</script>

<svelte:window onkeydown={onKeydown} />

	<div class="scrim" onclick={onBackdropClick} role="presentation">
		<div class="dec" class:dec-loss={d.isFamilyLoss} bind:this={dialogEl} role="dialog" aria-modal="true" aria-label={d.title}>
			<div class="hd" class:hd-loss={d.isFamilyLoss}>
				<span>{d.isFamilyLoss ? '訃報' : d.isLifecycle ? '人生の転機' : d.category === 'historical_wave' ? `歴史の大波 · ${d.historicalYearLabel ?? ''}` : '決断'} · {age}歳</span>
				<button
					type="button"
					class="dec-close-btn"
					aria-label="閉じる"
					onclick={ondismiss}
				>
					閉じる
				</button>
			</div>
			<div class="bd">
				<div class="dec-lead" class:has-visual={!!evImg}>
					{#if evImg}
						<div class="dec-visual">
							<div class="dec-frame">
								<img src={evImg.src} alt={evImg.alt} loading="eager" />
								{#if evImg.caption}
									<span class="dec-badge">{evImg.caption}</span>
								{/if}
							</div>
						</div>
					{/if}
					<div class="dec-text">
						<h2>{d.title}</h2>
						<p>{d.description}</p>
					</div>
				</div>
				<div class="fact">{d.factBox}</div>
				<div class="choices">
					{#each d.choices as ch (ch.id)}
						<button onclick={() => onchoose(ch)}>
							<b>{ch.label}</b>
							{#if ch.subLabel}
								<small>{ch.subLabel}</small>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>

<style>
	.scrim {
		overscroll-behavior: contain;
	}

	/* 決断モーダル内の挿絵カード */
	.dec-lead.has-visual {
		display: grid;
		grid-template-columns: 140px 1fr;
		gap: 16px;
		align-items: start;
		margin-bottom: 12px;
	}
	@media (max-width: 520px) {
		.dec-lead.has-visual {
			grid-template-columns: 1fr;
			gap: 12px;
		}
	}
	.dec-visual {
		max-width: 140px;
	}
	@media (max-width: 520px) {
		.dec-visual {
			max-width: 160px;
			margin: 0 auto;
		}
	}
	.dec-frame {
		position: relative;
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 4px;
		overflow: hidden;
		background: #14110e;
		border: 1px solid var(--rule);
		box-shadow: 0 2px 8px rgba(35, 28, 22, 0.12);
	}
	.dec-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.dec-badge {
		position: absolute;
		bottom: 6px;
		right: 6px;
		background: rgba(20, 17, 14, 0.85);
		color: #f4eee2;
		font-size: 10px;
		padding: 2px 6px;
		border-radius: 2px;
		letter-spacing: 0.03em;
		backdrop-filter: blur(4px);
		pointer-events: none;
	}
	.dec-text {
		min-width: 0;
	}
	.dec.dec-loss {
		border-color: var(--bad);
	}
	.dec .hd.hd-loss {
		background: rgba(168, 53, 43, 0.08);
		color: var(--bad);
		font-weight: 600;
	}
	.dec.dec-loss .choices button {
		border-color: var(--bad);
	}
	.dec.dec-loss .choices button:hover {
		background: rgba(168, 53, 43, 0.06);
	}
</style>
