<script lang="ts">
	import Button from '../../../ui/button.svelte';
	import Select from '../../../ui/select.svelte';

	export let step = 1;

	let options = [
		{ value: 'gas', label: `Gasolina` },
		{ value: 'diesel', label: `Diesel` }
	];

	let selected: string = options[0].value;
</script>

{#if step === 1}
	<h1 class="pb-2 text-4xl">Vamos conservar a Amazônia</h1>
	<p class="pb-8 text-sm">Em apenas 04 passos você ajuda a salvar o planeta Terra.</p>

	<div class="flex flex-col gap-4">
		<Button primary on:click={() => step++}>Começar o cálculo</Button>
		<Button on:click={() => (step = 0)}>Quero saber mais</Button>
	</div>
{:else if step === 2}
	<div>
		<p class="uppercase">Combustível</p>
		<h1 class="pb-2 text-4xl">Qual foi o combustível utilizado?</h1>
	</div>

	<Select {options} bind:selected />

	<Button primary on:click={() => step--}>Avançar</Button>
{/if}
