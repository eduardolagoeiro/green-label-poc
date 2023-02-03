<script lang="ts">
	import { fade } from 'svelte/transition';
	import { linear } from 'svelte/easing';
</script>

<div
	class="flex grow flex-col justify-between"
	in:fade={{ duration: 400, delay: 50, easing: linear }}
>
	<slot />
</div>
