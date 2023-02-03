<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	$: cssVarStyles = Object.entries(data.style)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
</script>

<div
	style={cssVarStyles}
	class="calculator-bg flex w-full grow items-end overflow-x-hidden px-6 pb-6 text-primary-color"
>
	<div class="flex min-h-[438px] w-full grow flex-col rounded-3xl bg-white p-6">
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
