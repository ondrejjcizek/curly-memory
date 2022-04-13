<script>
	import '../app.scss';
	import Section from '$lib/Section.svelte';
</script>

<Section headingClass="" label="U bílé růže - Horažďovice">
	<header class="bg-[wheat]">
		<div
			class="mx-auto max-w-7xl justify-center rounded-md bg-black py-6 sm:px-6 lg:flex lg:py-7 lg:px-8"
		>
			<div
				class="flex items-center justify-center text-sm font-extrabold tracking-tight text-white no-underline sm:text-base md:text-3xl"
			>
				<div class="flex items-center uppercase">
					<span class="block">U bílé růže</span>
					<a href="/" class="coat-of-arms px-5">
						<img class="coat" src="coat-of-arms.svg" alt="" />
						<span><img class="rose" src="rose.svg" alt="" /></span>
					</a>
					<span class="block">Horažďovice</span>
				</div>
			</div>
		</div>
	</header>
</Section>

<main class="max-w-7xl bg-[wheat]">
	<slot />
</main>

<style lang="sass">
	.coat-of-arms
		position: relative
		height: 60px

		@include up('md')
			height: 120px

		.coat
			height: 100%

		span
			display: block
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)
			width: 100%
			height: 100%

			.rose
				transform-origin: 50% 50%
				animation: rotate-right 20s linear infinite
				position: relative
				top: 7%
				height: 80%
				margin: 0 auto 
			
		
		@keyframes rotate-right
			from  
				transform: rotate(0deg) 
			
			to 
				transform: rotate(360deg) 


</style>
