<script>
	import Wrapper from './Wrapper.svelte';
</script>

<Wrapper headingClass="header-heading" label="U Bílé růže">
	<div class="mx-auto justify-center rounded-md bg-black py-6 sm:px-6 lg:flex lg:py-7 lg:px-8">
		<div
			class="flex items-center justify-center text-sm font-extrabold tracking-tight text-white no-underline sm:text-base md:text-3xl"
		>
			<div class="header-heading flex items-center uppercase">
				<span class="block">U bílé růže</span>
				<a href="/" aria-label="Erbovní štít U Bílé růže" class="coat-of-arms px-5">
					<img class="coat" src="coat-of-arms.svg" alt="Erb" />
					<span><img class="rose" src="rose.svg" alt="Růže" /></span>
				</a>
				<span class="block">Horažďovice</span>
			</div>
		</div>
	</div>
</Wrapper>

<style lang="scss">
	.coat-of-arms {
		position: relative;
		height: 60px;

		@include up('md') {
			height: 120px;
		}

		.coat {
			height: 60px;
			width: 54px;

			@include up('md') {
				height: 120px;
				width: 108px;
			}
		}

		span {
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			img {
				height: 60px;
				width: 54px;

				@include up('md') {
					height: 100px;
					width: 111px;
				}
			}
		}

		.rose {
			transform-origin: 50% 50%;
			animation: rotate-right 20s linear infinite;
			position: relative;
			top: 7%;
			height: 80%;
			margin: 0 auto;
		}

		@keyframes rotate-right {
			from {
				transform: rotate(0deg);
			}

			to {
				transform: rotate(360deg);
			}
		}
	}
</style>
