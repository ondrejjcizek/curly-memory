<script>
	export let headingClass = '';
	export let label;
</script>

<section
	class="mx-auto max-w-4xl px-[12px] py-[12px] md:px-[24px]"
	aria-labelledby={headingClass}
	aria-label={label}
>
	<slot />
</section>
