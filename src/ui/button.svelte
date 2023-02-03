<script lang="ts">
	export let primary: boolean = false;

	let buttonProps = {
		class: [$$restProps.class]
	};
</script>

<button
	on:click
	on:focus
	on:mouseover
	on:mouseenter
	on:mouseleave
	{...buttonProps}
	class="w-100 h-12 rounded-3xl border-2 border-solid border-primary-color"
	class:primary
>
	<slot />
</button>

<style lang="postcss">
	.primary {
		@apply bg-primary-color;
		@apply text-text-acent;
	}
</style>
