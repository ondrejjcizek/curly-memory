<!-- This example requires Tailwind CSS v2.0+ -->
<script>
	import Gallery from '$lib/gallery/gallery.svelte';
</script>

<div class="bg-black">
	<div
		class=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
	>
		<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl flex items-center">
			<img class="h-20 mr-4" src="u-bile-ruze-logo.svg" alt="" />
			<div>
				<span class="block">U bílé růže</span>
				<span class="block text-slate-400">Penzion a pivnice</span>
			</div>
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

<div class="py-16 bg-purple-200">
	<div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
		<div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
			<div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
				<div class="mb-12 space-y-4">
					<h3 class="text-2xl font-semibold text-purple-900">Dvoulůžko</h3>
					<p class="mb-6">Cena: 900,- Kč</p>
					<a href="#" class="block font-medium text-purple-600">Rezervovat</a>
				</div>
				<Gallery />
			</div>
			<div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
				<div class="mb-12 space-y-4">
					<h3 class="text-2xl font-semibold text-purple-900">Třílůžko</h3>
					<p class="mb-6">Cena: 1300,- Kč</p>
					<a href="#" class="block font-medium text-purple-600">Rezervovat</a>
				</div>
				<Gallery />
			</div>
			<div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
				<div class="mb-12 space-y-4">
					<h3 class="text-2xl font-semibold text-purple-900">Prácheňský apartmán 4 + 2</h3>
					<p class="mb-6">Cena: 2.500,- Kč</p>
					<a href="#" class="block font-medium text-purple-600">Rezervovat</a>
				</div>
				<Gallery />
			</div>
		</div>
	</div>
</div>
