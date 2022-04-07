<!-- This example requires Tailwind CSS v2.0+ -->
<script>
	import Gallery from '$lib/gallery/gallery.svelte';
</script>

<div class="bg-black">
	<div
		class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
	>
		<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
			<span class="block">U bílé růže</span>
			<span class="block text-slate-400">Penzion a pivnice</span>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow">
				<a
					href="#"
					class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-slate-400"
				>
					Rezervace
				</a>
			</div>
			<div class="ml-3 inline-flex rounded-md shadow">
				<a
					href="#"
					class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-slate-400"
				>
					Videoprohlídka
				</a>
			</div>
		</div>
	</div>
</div>

<Gallery />
