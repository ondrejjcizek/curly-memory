<script>
	import Wrapper from './Wrapper.svelte';
</script>

<Wrapper headingClass="header-heading" label="Kontakt">
	<div
		class="flex flex-col items-center justify-between gap-[24px] rounded-md bg-black p-[24px] text-xs text-white md:flex-row md:text-sm lg:text-base"
	>
		<div class="flex flex-col items-center gap-[4px] md:items-start">
			<a class="footer-link" href="mailto:korytar@seznam.cz">korytar.k@seznam.cz</a>
			<a class="footer-link" href="tel:+420737334392">+420 737 334 392</a>
			<a
				class="footer-link hidden md:block"
				target="_blank"
				href="https://goo.gl/maps/oTb2ei8oDo5bsFWu9">Hradební 65, 341 01 Horažďovice</a
			>
		</div>
		<div class="flex flex-col items-center gap-[24px]">
			<div class="flex gap-[24px]">
				<div>
					<div>PO 14:00 - 22:00</div>
					<div>ÚT 14:00 - 22:00</div>
					<div>ST 14:00 - 22:00</div>
					<div>ČT 14:00 - 22:00</div>
				</div>
				<div>
					<div>PÁ 14:00 - 24:00</div>
					<div>SO 11:00 - 22:00</div>
					<div>NE 11:00 - 21:00</div>
				</div>
			</div>
			<a class="footer-link md:hidden" target="_blank" href="https://goo.gl/maps/oTb2ei8oDo5bsFWu9"
				>Hradební 65, 341 01 Horažďovice</a
			>
		</div>
	</div>
</Wrapper>

<style lang="scss">
	.footer-link {
		text-decoration: none;
		padding: 4px;
	}
	@include up('md') {
		.footer-link {
			text-decoration-color: transparent;
			text-underline-offset: 5px;
			text-decoration-thickness: 2px;
			transition: ease text-decoration-color 0.5s;

			&:hover {
				text-decoration: underline;
				text-decoration-color: white;
				text-underline-offset: 5px;
				text-decoration-thickness: 2px;
			}
		}
	}
</style>
