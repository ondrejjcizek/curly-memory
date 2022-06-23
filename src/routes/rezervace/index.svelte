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
	import { scrollBottom } from 'svelte-scrolling';
</script>

<PageTransitions>
	<Wrapper headingClass="heading-pivnice" label="Pivnice">
		<div class="flex justify-center">
			<div class="w-full bg-[wheat]">
				<div class="mb-[24px]">
					<p
						class="text-center text-sm font-normal leading-6 tracking-wide text-black md:text-base"
					>
						<b>Penzion</b> je kulturní památkou v&nbsp;<b>městské památkové zóně Horažďovice</b>.
						Nabízíme ubytování ve 2-lůžkových pokojích s&nbsp;WC a&nbsp;sprchou. V&nbsp;penzionu se
						nachází
						<b
							><a
								class="rounded bg-black p-[4px] text-white no-underline hover:bg-[#333333]"
								href="/">pivnice</a
							></b
						>, vhodná pro pořádání různých firemních akcí, oslav či večírků.
					</p>
				</div>
			</div>
		</div>
		<ul
			class="mb-[24px] flex flex-nowrap gap-[12px] gap-[12px] overflow-hidden overflow-x-auto text-center text-white"
		>
			<li
				class="flex min-w-[190px] items-center items-center justify-center rounded-md bg-black p-3 text-xs md:text-sm"
			>
				V&nbsp;penzionu je možnost využití kuchyňky, infrasauny, kulečníku a&nbsp;šipek.
			</li>
			<li
				class="flex min-w-[190px] items-center items-center justify-center rounded-md bg-black p-3 text-xs md:text-sm"
			>
				V&nbsp;kuchyňce je k&nbsp;dispozici lednice, mikrovlnka a&nbsp;rychlovarná konvice.
			</li>
			<li
				class="flex min-w-[190px] items-center items-center justify-center rounded-md bg-black p-3 text-xs md:text-sm"
			>
				Televize u&nbsp;nás nehledejte.
			</li>
			<li
				class="flex min-w-[190px] items-center items-center justify-center rounded-md bg-black p-3 text-xs md:text-sm"
			>
				Prosíme, své čtyřnohé mazlíčky nechte doma.
			</li>
		</ul>
		<button
			class="mb-[24px] w-full rounded-md bg-[#013220] py-5 px-3 text-center text-xs text-white no-underline hover:bg-[#015f3c] md:text-sm md:text-base"
			on:click={() => scrollBottom()}>Rezervujte telefonicky nebo e-mailem</button
		>
		<div class="text-gray-500 xl:px-0">
			<div
				class="vertical-slider mx-auto flex flex-nowrap gap-[12px] overflow-hidden overflow-x-scroll"
			>
				<div
					class="min-w-[190px] rounded-2xl bg-[#013220] px-5 py-5 shadow-xl md:min-w-[220px] md:py-8 md:px-8"
				>
					<div class="flex h-full flex-col justify-between text-center">
						<h3 class="text-sm font-semibold text-white md:text-base">Dvoulůžkový pokoj</h3>
						<p class="mt-2 mb-2 text-sm text-white md:text-base">900,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={dvouluzkovyPrvniPokoj} />
					</div>
				</div>
				<div
					class="min-w-[190px] rounded-2xl bg-[#013220] px-5 py-5 shadow-xl md:min-w-[220px] md:py-8 md:px-8"
				>
					<div class="flex h-full flex-col justify-between text-center">
						<h3 class="text-sm font-semibold text-white md:text-base">Dvoulůžkový pokoj</h3>
						<p class="mt-2 mb-2 text-sm text-white md:text-base">900,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={dvouluzkovyDruhyPokoj} />
					</div>
				</div>
				<div
					class="min-w-[190px] rounded-2xl bg-[#013220] px-5 py-5 shadow-xl md:min-w-[220px] md:py-8 md:px-8"
				>
					<div class="flex h-full flex-col justify-between text-center">
						<h3 class="text-sm font-semibold text-white md:text-base">Dvoulůžkový pokoj</h3>
						<p class="mt-2 mb-2 text-sm text-white md:text-base">900,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={manzelskaPostel} />
					</div>
				</div>
				<div
					class="min-w-[190px] rounded-2xl bg-[#013220] px-5 py-5 shadow-xl md:min-w-[220px] md:py-8 md:px-8"
				>
					<div class="flex h-full flex-col justify-between text-center">
						<h3 class="text-sm font-semibold text-white md:text-base">Třílůžkový pokoj</h3>
						<p class="mt-2 mb-2 text-sm text-white md:text-base">1300,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={triluzkovyPokoj} />
					</div>
				</div>
				<div
					class="min-w-[190px] rounded-2xl bg-[#013220] px-5 py-5 shadow-xl md:min-w-[220px] md:py-8 md:px-8"
				>
					<div class="flex h-full flex-col justify-between text-center">
						<h3 class="text-sm font-semibold text-white md:text-base">
							Apartmán - manželská postel
						</h3>
						<p class="mt-2 mb-2 text-sm text-white md:text-base">1.500,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={apartman} />
					</div>
				</div>
				<div
					class="min-w-[190px] rounded-2xl bg-[#013220] px-5 py-5 shadow-xl md:min-w-[220px] md:py-8 md:px-8"
				>
					<div class="flex h-full flex-col justify-between text-center">
						<h3 class="text-sm font-semibold text-white md:text-base">
							Prácheňský apartmán pro 6&nbsp;osob
						</h3>
						<p class="mt-2 mb-2 text-sm text-white md:text-base">2.500,- Kč</p>
						<Gallery oneTile={true} galleryOption={true} data={prachenskyApartman} />
					</div>
				</div>
			</div>
		</div>
	</Wrapper>
</PageTransitions>
