<script>
	import { crossfade, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import focusGallery from './focusGallery';
	export let data;
	let selected = '';

	$: currentIdx = selected ? data.findIndex((d) => d.banner_image === selected) : -1;

	const [send, receive] = crossfade({
		duration: () => 100,
		fallback: fade
	});

	const handlePreviewClick = (imageURL) => {
		selected = imageURL;
	};

	const previousItem = () => {
		let nextIdx = (currentIdx - 1) % data.length;
		if (nextIdx === -1) {
			const last = data.length - 1;
			nextIdx = last;
		}
		selected = data[nextIdx].banner_image;
	};

	const nextItem = () => {
		const nextIdx = (currentIdx + 1) % data.length;
		selected = data[nextIdx].banner_image;
	};

	const closeButton = () => {
		selected = '';
	};

	const keyHandler = (e) => {
		if (e.key === 'Escape') {
			selected = '';
		} else if (e.key === 'ArrowRight') {
			nextItem();
		} else if (e.key === 'ArrowLeft') {
			previousItem();
		} else {
			return;
		}
	};
</script>

<!-- <svelte:window on:keydown={keyHandler} /> -->

<div>
	<div class="gallery-container">
		{#each data as d (d.banner_image)}
			<div class="gallery-container-inner">
				{#if d.banner_image !== selected}
					<div
						role="img"
						loading="lazy"
						aria-label={d.name}
						on:click={() => handlePreviewClick(d.banner_image)}
						class="image"
						style="background-image: url({d.banner_image});"
					/>
				{:else if d.banner_image == selected}
					<div
						role="img"
						loading="lazy"
						aria-label={d.name}
						class="image"
						style="background-image: url({d.banner_image});"
					/>
				{/if}
			</div>
		{/each}
	</div>
</div>

{#if selected}
	<div
		use:focusGallery
		class="image-viewer"
		on:keydown={keyHandler}
		in:receive={{ key: selected }}
		out:send={{ key: selected }}
	>
		<button on:click={previousItem}> Předchozí </button>
		<button on:click={nextItem}> Další </button>
		<div class="gallery-wrapper">
			<div class="close-wrapper" on:click={closeButton}>
				<span class="close" />
			</div>
			<img loading="lazy" src={selected} alt={data[currentIdx].name} />
			<div
				aria-label="image viewer, navigate with the left and right keys on the keyboard"
				role="group"
				class="gallery"
				id="focus-gallery"
				tabindex={0}
			>
				{#each data as d (d.name)}
					<div
						role="img"
						loading="lazy"
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
	</div>

	<p class="visually-hidden" aria-atomic={true} aria-live="assertive">
		{#if data[currentIdx]}
			Current Image Name: {data[currentIdx].name}
		{/if}
	</p>
{/if}
