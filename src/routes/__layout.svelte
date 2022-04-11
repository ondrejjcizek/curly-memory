<script>
	import '../app.scss';
</script>

<header class="bg-black">
	<div
		class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
	>
		<a
			href="/"
			class="flex items-center text-3xl font-bold tracking-tight text-white no-underline sm:text-4xl"
		>
			<div class="align-center flex">
				<span class="block">U bílé růže</span>
				<div class="coat-of-arms">
					<img class="coat" src="coat-of-arms.svg" alt="" />
					<span><img class="rose" src="rose.svg" alt="" /></span>
				</div>
				<span class="block text-slate-400">Horažďovice</span>
			</div>
		</a>
	</div>
</header>

<main>
	<slot />
</main>

<style lang="sass">
	.coat-of-arms
		position: relative
		height: 140px
		padding: 0 20px

		.coat
			height: 100%

		span
			display: block
			position: relative
			height: 100%
			transform-origin: 0 100%

			.rose
				
				// animation: rotate-right 5s linear infinite
				position: absolute
				// top: 5%
				// left: 19%
				height: 80%
				

			&::after
				position: absolute
				top: 100%
				left: 0
				width: 5px
				height: 5px
				content: ''
				background-color: #f0f
				border-radius: 50%
				transform: translate(-50%, -50%)
		
		@keyframes rotate-right
			from  
				transform: rotate(0deg) 
			
			to 
				transform: rotate(360deg) 


</style>
