<script>
	const openModal = () => {
		document.getElementById('modal').classList.toggle('hidden');
		let video = document.querySelector('video');
		video.play();
	};

	const closeModal = () => {
		document.getElementById('modal').classList.toggle('hidden');
		let video = document.querySelector('video');
		video.pause();
	};

	const keyHandler = (e) => {
		if (e.key === 'Escape') {
			document.getElementById('modal').classList.add('hidden');
			let video = document.querySelector('video');
			video.pause();
		}
	};
</script>

<svelte:window on:keydown={keyHandler} />

<div class="flex h-full items-center justify-between">
	<button class="rounded bg-blue-500 py-3 px-4 text-white hover:bg-blue-700"
		>Rezervace pokoje</button
	>
	<button class="rounded bg-blue-500 py-3 px-4 text-white hover:bg-blue-700" on:click={openModal}
		>Videoprohlídka</button
	>
</div>
<div class="fixed top-0 left-0 z-10 hidden w-full overflow-y-auto" id="modal">
	<div
		class="min-height-100vh flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
	>
		<span class="hidden sm:inline-block sm:h-screen sm:align-middle" />
		<div
			class="align-center inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:align-middle"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-headline"
		>
			<video class="video" autoplay controls>
				<source
					src="https://firebasestorage.googleapis.com/v0/b/u-bile-ruze.appspot.com/o/Y2Mate.is%20-%20CYKLOTOULKY%20Horaz%CC%8Cd%CC%8Covice-DIjJDlEHGps-720p-1649699382612.mp4?alt=media&token=c7b8865a-b53f-4723-873f-10e15d8f4ef5"
					type="video/mp4"
				/>
				<track kind="captions" preload="meta" label="České titulky" srclang="cs" default />
			</video>

			<div class="close-wrapper" on:click={closeModal}>
				<span class="close" />
			</div>
		</div>
	</div>
</div>
