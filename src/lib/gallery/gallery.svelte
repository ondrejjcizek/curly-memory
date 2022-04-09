<script>
	import { crossfade, fade } from 'svelte/transition';
	export let data;
	export let scopeName;
	let selected = '';

	let gallery;

	$: currentIdx = selected ? data.findIndex((d) => d.banner_image === selected) : -1;

	const [send, receive] = crossfade({
		duration: () => 100,
		fallback: fade
	});

	const handlePreviewClick = (imageURL) => {
		selected = imageURL;
	};

	const shortcut = {};

	const previousItem = () => {
		const nextIdx = (currentIdx - 1) % data.length;
		selected = data[nextIdx].banner_image;
		console.log(nextIdx);
	};

	const nextItem = () => {
		const nextIdx = (currentIdx + 1) % data.length;
		selected = data[nextIdx].banner_image;
		console.log(nextIdx);
	};

	const closeButton = () => {
		selected = '';
	};

	const keyHandler = (e) => {
		if (e.key === 'Escape') {
			selected = '';
		} else if (e.key === 'ArrowRight') {
			nextItem();
			console.log(selected + ' KEY');
		} else if (e.key === 'ArrowLeft') {
			previousItem();
			console.log(selected + ' KEY');
		} else {
			return;
		}
	};
</script>

<!-- <svelte:window on:keydown={keyHandler} /> -->

<div class="main-wrapper">
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
			class="image-viewer"
			on:keydown={keyHandler}
			in:receive={{ key: selected }}
			out:send={{ key: selected }}
		>
			<!-- <button on:click={previousItem}> Předchozí </button>
			<button on:click={nextItem}> Další </button> -->
			<div class="gallery-wrapper">
				<div class="close-wrapper" on:click={closeButton}>
					<span class="close" />
				</div>
				<img loading="lazy" src={selected} alt={data[currentIdx].name} />
				<div
					aria-label="image viewer, navigate with the left and right keys on the keyboard"
					role="group"
					bind:this={gallery}
					class="gallery"
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
	{/if}
	<p class="visually-hidden" aria-atomic={true} aria-live="assertive">
		{#if data[currentIdx]}
			Current Image Name: {data[currentIdx].name}
		{/if}
	</p>
</div>
