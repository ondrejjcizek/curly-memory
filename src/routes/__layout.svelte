<script>
	import '../app.scss';
</script>

<header class="bg-black">
	<div
		class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
	>
		<h2 class="flex items-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
			<img class="rotate mr-4 h-20" src="u-bile-ruze-logo.svg" alt="" />
			<div>
				<span class="block">U bílé růže</span>
				<span class="block text-slate-400">Horažďovice</span>
			</div>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow">
				<a
					href="/rezervace"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-lg font-semibold text-black no-underline hover:bg-slate-400"
				>
					Penzion
				</a>
			</div>
			<div class="ml-3 inline-flex rounded-md shadow">
				<a
					href=""
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-lg font-semibold text-black no-underline hover:bg-slate-400"
				>
					Pivnice
				</a>
			</div>
		</div>
	</div>
</header>

<main>
	<slot />
</main>

<style lang="sass">
	.rotate
		animation: rotate-right 40s linear infinite
		
	@keyframes rotate-right
		from  
			transform: rotate(0deg)
		
		to 
			transform: rotate(360deg)
</style>
