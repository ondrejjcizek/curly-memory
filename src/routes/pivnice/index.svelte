<script>
	import Beerhouse from '$lib/beerhouse/beerhouse.svelte';
</script>

<div class="py-16 bg-slate-400">
	<div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
		<div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
			<div class="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
				<div class="mb-12 space-y-4">
					<h3 class="text-2xl font-semibold text-slate-800">Prácheňský apartmán pro 6 osob</h3>
					<p class="mb-6">Cena: 2.500,- Kč</p>
					<a href="#" class="block font-medium text-slate-800">Rezervovat</a>
				</div>
				<Beerhouse />
			</div>
		</div>
	</div>
</div>
