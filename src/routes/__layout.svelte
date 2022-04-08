<script>
	import '../app.scss';
</script>

<header class="bg-black">
	<div
		class=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
	>
		<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl flex items-center">
			<img class="rotate h-20 mr-4" src="u-bile-ruze-logo.svg" alt="" />
			<div>
				<span class="block">U bílé růže</span>
			</div>
		</h2>
		<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
			<div class="inline-flex rounded-md shadow">
				<a
					href="/rezervace"
					class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-slate-400"
				>
					Rezervace
				</a>
			</div>
			<div class="ml-3 inline-flex rounded-md shadow">
				<a
					href="/pivnice"
					class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-slate-400"
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
		animation: rotate-right 30s linear infinite

	@keyframes rotate-right
		from  
			transform: rotate(0deg)
		
		to 
			transform: rotate(360deg)
</style>
