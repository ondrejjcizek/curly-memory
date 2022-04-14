<script>
	import Gallery from '$lib/components/Gallery.svelte';
	import Youtube from '$lib/components/Youtube.svelte';
	import pivnice from '$lib/data/pivnice';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import PageTransitions from '$lib/components/PageTransitions.svelte';
</script>

<PageTransitions>
	<Wrapper headingClass="heading-pivnice" label="Pivnice">
		<div class="flex justify-center">
			<div class="bg-[wheat]">
				<div class="mb-[24px]">
					<p class="mb-[28px] text-center text-base font-normal text-black md:text-base">
						Penzion je kulturní památkou v městské památkové zóně Horažďovice. Nabízíme ubytování ve
						2-lůžkových pokojích s&nbsp;WC a&nbsp;sprchou. V&nbsp;penzionu se nachází pivnice,
						vhodná pro pořádání různých firemních akcí, oslav či večírků.
					</p>
					<div class="flex gap-[40px]">
						<a
							href="/rezervace"
							class="decoration-none w-full rounded-md bg-black py-3 px-3 text-center text-sm text-white no-underline hover:bg-slate-700 md:text-base"
							>Rezervace</a
						>
						<Youtube />
					</div>
				</div>
				<Gallery data={pivnice} />
			</div>
		</div>
	</Wrapper>
</PageTransitions>
