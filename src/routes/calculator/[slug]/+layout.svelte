<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	$: cssVarStyles = Object.entries(data.style)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<div
	style={cssVarStyles}
	class="calculator-bg flex min-h-screen items-end overflow-x-hidden px-6 pb-6"
>
	<div class="h-fit rounded-3xl bg-white p-6 ">
		<slot />
	</div>
</div>

<style lang="postcss">
	.calculator-bg {
		background: url('/calculator-bg.png');
		background-size: cover;
	}
</style>
