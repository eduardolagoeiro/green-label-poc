<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	$: cssVarStyles = Object.entries(data.style)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<div
	style={cssVarStyles}
	class="calculator-bg flex min-h-screen w-full items-end overflow-x-hidden px-6 pb-6"
>
	<div class="flex min-h-[66.6vh] w-full flex-col justify-between rounded-3xl bg-white p-6">
		<img class="pb-6" width="48px" height="48px" src={data.logo} alt="logo ipiranga" />
		<slot />
	</div>
</div>

<style lang="postcss">
	.calculator-bg {
		background: url('/calculator-bg.png');
		background-size: cover;
	}
</style>
