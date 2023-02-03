<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	class="flex grow flex-col justify-between"
	in:fade={{ duration: 500, delay: 100 }}
>
	<slot />
</div>
