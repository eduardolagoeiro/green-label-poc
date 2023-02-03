<script lang="ts">
	import MaskInput from 'svelte-input-mask/MaskInput.svelte';

	export let mask: string | null = null;

	export let type: string = 'text';
	export let name: string;
	export let id: string;
	export let placeholder: string;

	export let value: string | number;

	let classes =
		'h-12 w-full rounded-lg border-2 border-solid border-primary-color indent-4 text-sm';
</script>

{#if mask}
	<MaskInput
		class={classes}
		{placeholder}
		maskChar="_"
		{mask}
		on:change={({ detail }) => {
			value = detail.unmaskedValue;
		}}
	/>
{:else}
	<input class={classes} {type} {placeholder} {name} {id} />
{/if}
