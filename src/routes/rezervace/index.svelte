<script>
	import Gallery from '$lib/gallery/gallery.svelte';
	import pivnice from '$lib/gallery/data/pivnice';
	import dvouluzkovyPokoj from '$lib/gallery/data/dvouluzkovyPokoj';
</script>

<a
	href="#"
	class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		Noteworthy technology acquisitions 2021
	</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400">
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
		order.
	</p>
</a>

<div class="bg-slate-400 py-16">
	<div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
		<div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
			<div class="rounded-2xl bg-white px-8 py-12 shadow-xl sm:px-12 lg:px-8">
				<div class="space-y-4">
					<h3 class="text-2xl font-semibold text-slate-800">Dvoulůžkový pokoj</h3>
					<p class="">Cena: 900,- Kč</p>
					<a href="#" class="block font-medium text-slate-800">Rezervovat</a>
				</div>
				<Gallery data={dvouluzkovyPokoj} />
			</div>
			<div class="rounded-2xl bg-white px-8 py-12 shadow-xl sm:px-12 lg:px-8">
				<div class="mb-12 space-y-4">
					<h3 class="text-2xl font-semibold text-slate-800">Třílůžkový pokoj</h3>
					<p class="">Cena: 1300,- Kč</p>
					<a href="#" class="block font-medium text-slate-800">Rezervovat</a>
				</div>
				<Gallery data={pivnice} />
			</div>
			<div class="rounded-2xl bg-white px-8 py-12 shadow-xl sm:px-12 lg:px-8">
				<div class="mb-12 space-y-4">
					<h3 class="text-2xl font-semibold text-slate-800">Prácheňský apartmán pro 6 osob</h3>
					<p class="">Cena: 2.500,- Kč</p>
					<a href="#" class="block font-medium text-slate-800">Rezervovat</a>
				</div>
			</div>
		</div>
	</div>
</div>
