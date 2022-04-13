<!-- This example requires Tailwind CSS v2.0+ -->
<script>
	import Youtube from '$lib/Youtube.svelte';
	import Gallery from '$lib/gallery/Gallery.svelte';
	import pivnice from '$lib/gallery/data/pivnice';
	import Section from '$lib/Section.svelte';
</script>

<Section headingClass="heading-pivnice" label="Pivnice">
	<div class="flex justify-center">
		<div class=" bg-[wheat]">
			<div class="mb-[24px]">
				<h5 class="heading-pivnice mb-2 text-center text-xl font-medium uppercase text-gray-900">
					Penzion a&nbsp;pivnice
				</h5>
				<p class="font-lgith mb-[28px] text-center text-sm text-gray-700 md:text-base">
					Nabízíme ubytování ve 2-lůžkových pokojích s&nbsp;WC a&nbsp;sprchou. V&nbsp;penzionu se
					nachází pivnice, vhodná pro pořádání různých firemních akcí, oslav či večírků. Penzion je
					kulturní památkou v městské památkové zóně Horažďovice.
				</p>
				<Youtube />
			</div>
			<Gallery data={pivnice} />
		</div>
	</div>
</Section>
