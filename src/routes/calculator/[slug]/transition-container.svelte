<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div
	class="flex grow flex-col justify-between"
	in:fade={{ duration: 400, delay: 50 }}
>
	<slot />
</div>
