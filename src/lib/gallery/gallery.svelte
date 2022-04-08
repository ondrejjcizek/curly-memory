<script>
	import { tick } from 'svelte';
	import { crossfade, fade } from 'svelte/transition';
	import data from './data';
	import keyboard from './useKeyboard';
	let selected = '';
	let gallery;
	const [send, receive] = crossfade({
		duration: () => 500,
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

	const previousItem = () => {
		const nextIdx = (currentIdx - 1) % data.length;
		selected = data[nextIdx].banner_image;
	};

	const nextItem = () => {
		const nextIdx = (currentIdx + 1) % data.length;
		selected = data[nextIdx].banner_image;
	};

	const closeButton = () => {
		selected = '';
	};

	const closeGallery = (e) => {
		if (e.target === e.currentTarget) {
			selected = '';
		}
	};
</script>

<div>
	<div class="gallery-container">
		{#each data as d (d.banner_image)}
			<div>
				{#if d.banner_image !== selected}
					<div
						role="img"
						loading="lazy"
						aria-label={d.name}
						out:send={{ key: d.banner_image }}
						on:click={() => handlePreviewClick(d.banner_image)}
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
		in:receive={{ key: selected }}
		out:send={{ key: selected }}
		on:click={closeGallery}
	>
		<button on:click={previousItem}> Předchozí </button>
		<button on:click={nextItem}> Další </button>
		<div class="gallery-wrapper">
			<div
				class="close-wrapper"
				in:receive={{ key: selected }}
				out:send={{ key: selected }}
				on:click={closeButton}
			>
				<span class="close" />
			</div>
			<img
				in:receive={{ key: selected }}
				out:send={{ key: selected }}
				src={selected}
				alt={data[currentIdx].name}
			/>
			<div
				aria-label="image viewer, navigate with the left and right keys on the keyboard"
				role="group"
				in:receive={{ key: selected }}
				out:send={{ key: selected }}
				bind:this={gallery}
				use:keyboard={{ shortcut }}
				class="gallery"
				tabindex={0}
			>
				{#each data as d (d.name)}
					<div
						role="img"
						out:send={{ key: d.banner_image }}
						in:receive={{ key: d.banner_image }}
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
