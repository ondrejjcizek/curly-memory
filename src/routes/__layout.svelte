<script>
	import '../app.scss';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<header>
	<Header />
</header>

<main class="mx-auto bg-[wheat]">
	{#key $page}
		<slot />
	{/key}
</main>

<footer>
	<Footer />
</footer>
