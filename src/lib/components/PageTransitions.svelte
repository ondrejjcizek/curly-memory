<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 25, duration: 250, delay: 300 }} out:fly={{ y: 25, duration: 250 }}>
	<slot />
</div>
