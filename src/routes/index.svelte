<script>
	import Gallery from '$lib/components/Gallery.svelte';
	import Youtube from '$lib/components/Youtube.svelte';
	import pivnice from '$lib/data/pivnice';
	import penzion from '$lib/data/penzion';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import PageTransitions from '$lib/components/PageTransitions.svelte';
</script>

<PageTransitions>
	<Wrapper headingClass="heading-pivnice" label="Pivnice">
		<div class="flex justify-center">
			<div class="bg-[wheat]">
				<div class="mb-[24px]">
					<p
						class="mb-[28px] text-center text-sm font-normal leading-6 tracking-wide text-black md:text-base"
					>
						<b
							><a
								class="rounded bg-black p-[4px] text-white no-underline hover:bg-[#333333]"
								href="rezervace">Penzion</a
							></b
						>
						je kulturní památkou v&nbsp;<b>městské památkové zóně Horažďovice</b>. Nabízíme
						ubytování ve 2-lůžkových pokojích s&nbsp;WC a&nbsp;sprchou. V&nbsp;penzionu se nachází
						<b>pivnice</b>, vhodná pro pořádání různých firemních akcí, oslav či večírků.
					</p>
				</div>
				<div class="mb-[24px]">
					<Gallery data={pivnice} />
				</div>
				<div class="mb-[24px] flex gap-[12px]">
					<a
						href="/rezervace"
						class="decoration-none w-full rounded-md bg-black py-3 px-3 text-center text-sm text-white no-underline hover:bg-[#333333] md:text-base"
						>Rezervace pokoje</a
					>
					<Youtube />
				</div>
				<Gallery data={penzion} />
			</div>
		</div>
	</Wrapper>
</PageTransitions>
