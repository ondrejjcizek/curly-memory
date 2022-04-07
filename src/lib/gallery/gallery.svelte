<script>
	import { tick } from 'svelte';
	import { crossfade, fade } from 'svelte/transition';
	import data from './data';
	import keyboard from './useKeyboard';
	let selected = '';
	let gallery;
	const [send, receive] = crossfade({
		duration: () => 350,
		fallback: fade
	});

	const handlePreviewClick = (imageURL) => {
		selected = imageURL;
	};

	$: currentIdx = selected ? data.findIndex((d) => d.banner_image === selected) : -1;

	const shortcut = {
		ArrowRight: async (e) => {
			e.preventDefault();
			const nextIdx = (currentIdx + 1) % data.length;
			selected = data[nextIdx].banner_image;
			await tick();
			const active = gallery.querySelector('[data-selected="true"]');
			if (active) {
				active.scrollIntoView();
			}
		},
		ArrowLeft: async (e) => {
			e.preventDefault();
			const nextIdx = currentIdx === 0 ? data.length - 1 : (currentIdx - 1) % data.length;
			selected = data[nextIdx].banner_image;
			await tick();
			const active = gallery.querySelector('[data-selected="true"]');
			if (active) {
				active.scrollIntoView();
			}
		}
	};
</script>

<div class="gallery-container">
	{#each data as d (d.banner_image)}
		<div>
			{#if d.banner_image !== selected}
				<div
					role="img"
					loading="lazy"
					aria-label={d.name}
					out:send={{ key: d.banner_image }}
					in:receive={{ key: d.banner_image }}
					on:click={() => handlePreviewClick(d.banner_image)}
					class="image"
					style="background-image: url({d.banner_image});"
				/>
			{/if}
		</div>
	{/each}
</div>

{#if selected}
	<div
		class="image-viewer"
		on:click={(e) => {
			if (e.target === e.currentTarget) {
				selected = '';
			}
		}}
	>
		<button
			on:click={() => {
				const nextIdx = (currentIdx - 1) % data.length;
				selected = data[nextIdx].banner_image;
			}}
		>
			上一張
		</button>
		<button
			on:click={() => {
				const nextIdx = (currentIdx + 1) % data.length;
				selected = data[nextIdx].banner_image;
			}}
		>
			下一張
		</button>
		<img in:receive={{ key: selected }} out:send={{ key: selected }} src={selected} />
		<div
			aria-label="圖片檢視器，可用鍵盤左右鍵導覽"
			role="group"
			bind:this={gallery}
			use:keyboard={{ shortcut }}
			class="gallery"
			tabindex={0}
		>
			{#each data as d (d.name)}
				<div
					role="img"
					aria-label={d.name}
					data-selected={selected === d.banner_image}
					class:active={selected === d.banner_image}
					on:click={() => (selected = d.banner_image)}
					class="image"
					style="background-image:url({d.banner_image})"
				/>
			{/each}
		</div>
	</div>
{/if}
<p class="visually-hidden" aria-atomic={true} aria-live="assertive">
	{#if data[currentIdx]}
		您現在正在查看：{data[currentIdx].name}
	{/if}
</p>

<style>
	* {
		box-sizing: border-box;
	}
	/* 	img { max-width: 100%; } */

	.gallery-container {
		display: grid;
		grid-template-columns: repeat(3, 100px);
		grid-gap: 10px;
	}

	.visually-hidden {
		visibility: hidden;
	}

	.image {
		width: 100%;
		height: 100px;
		background: center / cover no-repeat;
	}

	.gallery {
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		gap: 8px;
		overflow-x: auto;
		justify-content: space-between;
	}

	.gallery > .image {
		flex-shrink: 0;
		width: 100px;
		height: 100px;
	}

	.image-viewer {
		padding: 20px;
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		background-color: rgba(100, 100, 100, 0.8);
	}

	.active {
		border: 3px solid #000;
	}

	.image-viewer > img {
		max-height: 70%;
	}
</style>
