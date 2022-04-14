<script>
	import { crossfade, fade } from 'svelte/transition';
	import focusGallery from '$lib/functions/focusGallery';
	export let data;
	export let oneTile = false;
	export let galleryOption = false;

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

<div class:one-tile={oneTile}>
	<div class="gallery-container">
		{#each data as d (d.banner_image)}
			<div class="gallery-container-inner">
				<div
					role="img"
					loading="lazy"
					aria-label={d.name}
					on:click={() => handlePreviewClick(d.banner_image)}
					class="image"
					style="background-image: url({d.banner_image});"
				/>
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
				class:gallery-option={galleryOption}
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

<style lang="scss">
	$gallery-height: 666px;
	$gallery-width: 1000px;

	.one-tile {
		.gallery-container {
			grid-template-columns: repeat(1, 1fr);
			& :nth-child(n + 2) {
				display: none;
			}
		}
	}

	.gallery-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
		padding-top: 0;

		& :nth-child(n + 4) {
			display: none;
		}

		@include up('md') {
			padding-top: 0;
			grid-template-columns: repeat(4, 1fr);

			& :nth-child(-n + 4) {
				display: block;
			}
		}

		img {
			-webkit-tap-highlight-color: transparent;
		}

		.gallery-container-inner {
			-webkit-tap-highlight-color: transparent;
			position: relative;
			.placeholder {
				&:before {
					position: absolute;
					z-index: -1;
					content: '';
					display: block;
					width: 100%;
					aspect-ratio: 1/1;
					background: transparent;
				}
			}
		}
	}

	.visually-hidden {
		display: none;
	}

	.image {
		width: 100%;
		margin: 0 auto;
		border-radius: 6px;
		aspect-ratio: 1/1;
		background: center / cover no-repeat;
		transition: ease transform 0.3s;
		cursor: pointer;
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
	}

	.gallery-wrapper {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -40%);
		max-width: $gallery-width;
		width: 80%;
		margin: 0 auto;

		img {
			max-height: $gallery-height;
			aspect-ratio: 2/1;
			width: 100%;
			object-fit: cover;
			margin-bottom: 4px;
			border-radius: 6px;
		}

		@include down('sm') {
			width: 90%;
		}
	}

	.close-wrapper {
		opacity: 0;
		animation: fade-in 1s forwards;
		animation-delay: 0.5s;
		position: absolute;
		right: -20px;
		top: -20px;
		cursor: pointer;
		padding: 40px;
		transition: ease transform 0.3s;
		outline: 0;
		-webkit-tap-highlight-color: transparent;
		&:hover {
			transform: scale(1.1);
		}

		@include down('sm') {
			top: -10px;
			right: -10px;
			padding: 20px;
		}
	}

	.close {
		position: relative;
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: white;

		&:after {
			position: absolute;
			top: 50%;
			left: 15px;
			transform: translateY(-50%) rotate(45deg);
			content: '';
			display: block;
			width: 20px;
			height: 2px;
			background: black;
		}

		&:before {
			position: absolute;
			top: 50%;
			left: 15px;
			transform: translateY(-50%) rotate(-45deg);
			content: '';
			display: block;
			width: 20px;
			height: 2px;
			background: black;
		}

		@include down('sm') {
			transform: scale(0.7);

			&:hover {
				transform: scale(0.7);
			}
		}
	}

	.gallery {
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		gap: 5px;
		justify-content: center;
		outline: none;
		height: 20%;
		width: 100%;

		.image {
			margin: 0;
			height: 100%;
			max-height: 135px;
			max-width: 135px;
			width: 100%;
		}

		// &.gallery-option {
		// }
	}

	.image-viewer {
		position: fixed;
		z-index: 1;
		left: 50%;
		width: 100%;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.5);

		button {
			display: none;
		}
	}

	.active {
		border-radius: 6px;
		transform: translateY(-15px);

		@include down('sm') {
			transform: translateY(-10px);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
