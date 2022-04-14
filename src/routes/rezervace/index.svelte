<script>
	import Gallery from '$lib/components/Gallery.svelte';
	import pivnice from '$lib/data/pivnice';
	import Youtube from '$lib/components/Youtube.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import PageTransitions from '$lib/components/PageTransitions.svelte';

	import dvouluzkovyPrvniPokoj from '$lib/data/dovuluzkovyPrvniPokoj';
	import dvouluzkovyDruhyPokoj from '$lib/data/dvouluzkovyDruhyPokoj';
	import triluzkovyPokoj from '$lib/data/triluzkovyPokoj';
	import manzelskaPostel from '$lib/data/manzelskaPostel';
	import apartman from '$lib/data/apartman';
	import prachenskyApartman from '$lib/data/prachesnkyApartman';
	import penzion from '$lib/data/penzion';
</script>

<PageTransitions>
	<Wrapper headingClass="heading-pivnice" label="Pivnice">
		<div class="mb-[24px] flex justify-center">
			<div class="bg-[wheat]">
				<div class="mb-[24px]">
					<h5 class="heading-pivnice mb-2 text-center text-xl font-medium uppercase text-gray-900">
						Penzion
					</h5>
					<p class="font-lgith mb-[28px] text-center text-sm text-gray-700 md:text-base">
						Nabízíme ubytování ve 2-lůžkových pokojích s&nbsp;WC a&nbsp;sprchou. V&nbsp;penzionu se
						nachází pivnice, vhodná pro pořádání různých firemních akcí, oslav či večírků. Penzion
						je kulturní památkou v městské památkové zóně Horažďovice.
					</p>
					<div class="flex gap-[12px]">
						<a
							href="/"
							class="decoration-none w-full rounded-md bg-black py-3 px-3 text-center text-sm text-white no-underline hover:bg-slate-700 md:text-base"
							>Pivnice</a
						>
						<Youtube />
					</div>
				</div>
				<Gallery data={penzion} />
			</div>
		</div>
		<div class="text-gray-500 xl:px-0">
			<div class="mx-auto grid w-full grid-cols-2 gap-[12px] md:grid-cols-3">
				<div class="rounded-2xl bg-[#734B5E] px-5 py-5 shadow-xl md:py-8 md:px-8">
					<div class="relative text-center">
						<h3 class="text-base font-semibold text-white">Dvoulůžkový pokoj</h3>
						<p class="mt-4 text-white">900,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={dvouluzkovyPrvniPokoj} />
					</div>
				</div>
				<div class="rounded-2xl bg-[#734B5E] px-5 py-5 shadow-xl md:py-8 md:px-8">
					<div class="relative text-center">
						<h3 class="text-base font-semibold text-white">Dvoulůžkový pokoj</h3>
						<p class="mt-4 text-white">900,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={dvouluzkovyDruhyPokoj} />
					</div>
				</div>
				<div class="rounded-2xl bg-[#734B5E] px-5 py-5 shadow-xl md:py-8 md:px-8">
					<div class="relative text-center">
						<h3 class="text-base font-semibold text-white">Třílůžkový pokoj</h3>
						<p class="mt-4 text-white">1300,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={triluzkovyPokoj} />
					</div>
				</div>
				<div class="rounded-2xl bg-[#734B5E] px-5 py-5 shadow-xl md:py-8 md:px-8">
					<div class="relative text-center">
						<h3 class="text-base font-semibold text-white">Dvoulůžkový pokoj</h3>
						<p class="mt-4 text-white">2.500,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={manzelskaPostel} />
					</div>
				</div>
				<div class="rounded-2xl bg-[#734B5E] px-5 py-5 shadow-xl md:py-8 md:px-8">
					<div class="relative text-center">
						<h3 class="text-base font-semibold text-white">Apartmán - manželská postel</h3>
						<p class="mt-4 text-white">2.500,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={apartman} />
					</div>
				</div>
				<div class="rounded-2xl bg-[#734B5E] px-5 py-5 shadow-xl md:py-8 md:px-8">
					<div class="relative text-center">
						<h3 class="text-base font-semibold text-white">Prácheňský apartmán pro 6 osob</h3>
						<p class="mt-4 text-white">2.500,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={prachenskyApartman} />
					</div>
				</div>
			</div>
		</div>
	</Wrapper>
</PageTransitions>
