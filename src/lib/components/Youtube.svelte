<script>
	import { fade } from 'svelte/transition';
	import Youtube from 'svelte-youtube-embed';

	let active = false;

	const openModal = () => {
		active = true;
		document.getElementById('modal').classList.toggle('hidden');
		document.querySelector('.backdrop').classList.toggle('active');
	};

	const closeModal = () => {
		document.getElementById('modal').classList.toggle('hidden');
		document.querySelector('.backdrop').classList.toggle('active');
		active = false;
	};

	const keyHandler = (e) => {
		if (e.key === 'Escape') {
			document.getElementById('modal').classList.add('hidden');
			active = false;
		}
	};
</script>

<svelte:window on:keydown={keyHandler} />

<button
	class="w-full rounded-md bg-black py-3 px-3 text-sm text-white hover:bg-slate-700 md:text-base"
	on:click={openModal}>Videoprohlídka</button
>

{#if active}
	<div class="backdrop" on:click={closeModal} transition:fade={{ duration: 300 }} />
{/if}

<div
	class="absolute top-[50%] left-0 z-20 hidden w-full translate-y-[-50%] overflow-y-auto"
	id="modal"
>
	{#if active}
		<div
			transition:fade={{ duration: 300, delay: 500 }}
			class="height-100vh flex items-center justify-center px-4 pt-4 pb-20 text-center sm:p-0"
		>
			<span class="hidden sm:inline-block sm:h-screen sm:align-middle" />

			<div
				class="align-center sm:my-8sm:align-middle inline-block w-9/12 max-w-screen-md transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-headline"
			>
				<Youtube id="DIjJDlEHGps" />

				<div class="close-wrapper" on:click={closeModal}>
					<span class="close" />
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.backdrop {
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		display: block;
		height: 100%;
		width: 100%;
		backdrop-filter: blur(10px);
		background-color: rgba(255, 255, 255, 0.5);
	}

	.active {
		display: block;
	}

	#modal {
		z-index: 3;
	}

	.yt {
		background: red;
		position: relative;
		height: 100%;
		width: 100%;

		button {
			display: none;
		}

		.video-title {
			display: none;
		}
	}
</style>
