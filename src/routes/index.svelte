<!-- This example requires Tailwind CSS v2.0+ -->
<script>
	import ModalVideo from '$lib/modalVideo.svelte';
	import Gallery from '$lib/gallery/gallery.svelte';
	import pivnice from '$lib/gallery/data/pivnice';
</script>

<div class="flex justify-center">
	<div class="max-w-sm rounded-lg bg-white shadow-lg">
		<Gallery data={pivnice} />
		<div class="p-6">
			<h5 class="mb-2 text-xl font-medium text-gray-900">Penzion a&nbsp;pivnice</h5>
			<p class="mb-4 text-base text-gray-700">
				Nabízíme ubytování ve 2-lůžkových pokojích s&nbsp;WC a&nbsp;sprchou. V&nbsp;penzionu se
				nachází pivnice, vhodná pro pořádání různých firemních akcí, oslav či večírků. Penzion je
				kulturní památkou v městské památkové zóně Horažďovice.
			</p>
			<ModalVideo />
		</div>
	</div>
</div>
