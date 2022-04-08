<!-- This example requires Tailwind CSS v2.0+ -->
<script>
	import Beerhouse from '$lib/gallery/beerhouse/beerhouse.svelte';
</script>

<div class="bg-slate-400 py-16">
	<div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
		<div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
			<div class="rounded-2xl bg-white px-8 py-12 shadow-xl sm:px-12 lg:px-8">
				<div class="mb-12 space-y-4">
					<p class="mb-6">
						Nabízíme ubytování ve 2-lůžkových pokojích s WC a sprchou. V penzionu se nachází
						pivnice, vhodná pro pořádání různých firemních akcí, oslav či večírků. Penzion je
						kulturní památkou v městské památkové zóně Horažďovice.
					</p>
					<a href="#" class="block font-medium text-slate-800">Videoprohlídka</a>
				</div>
				<Beerhouse />
			</div>
		</div>
	</div>
</div>
