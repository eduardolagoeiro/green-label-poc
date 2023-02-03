<script lang="ts">
	import MaskInput from 'svelte-input-mask/MaskInput.svelte';
	import Button from '../../../ui/button.svelte';
	import Select from '../../../ui/select.svelte';
	import TransitionContainer from './transition-container.svelte';

	export let step = 1;

	let options = [
		{ value: 'gas', label: `Gasolina` },
		{ value: 'diesel', label: `Diesel` }
	];

	let selected: string = options[0].value;

	let value: number;

	let cpf: string = '';
</script>

{#if step === 1}
	<TransitionContainer>
		<h1 class="pb-2 text-4xl font-bold">Vamos conservar a Amazônia</h1>
		<p class="pb-8 text-sm">Em apenas 04 passos você ajuda a salvar o planeta Terra.</p>

		<div class="flex flex-col gap-4">
			<Button primary on:click={() => step++}>Começar o cálculo</Button>
			<Button on:click={() => (step = 0)}>Quero saber mais</Button>
		</div>
	</TransitionContainer>
{:else if step === 2}
	<TransitionContainer>
		<div>
			<p class="text-xs font-bold uppercase">Combustível</p>
			<h1 class="pb-2 text-4xl font-bold">Qual foi o combustível utilizado?</h1>
		</div>

		<Select {options} bind:selected />

		<Button primary on:click={() => step++}>Avançar</Button>
	</TransitionContainer>
{:else if step === 3}
	<TransitionContainer>
		<div>
			<p class="text-xs font-bold uppercase">Valor</p>
			<h1 class="pb-2 text-4xl font-bold">Qual foi o valor que você abasteceu?</h1>
		</div>

		<div class="relative w-full">
			<span class="absolute top-[calc(50%-1.25rem/2)] ml-[18px] text-sm">R$</span>
			<input
				type="number"
				bind:value
				min="5"
				step="0.01"
				placeholder="0,00"
				class="h-12 w-full rounded-lg border-2 border-solid border-primary-color indent-10 text-sm"
			/>
		</div>

		<Button primary on:click={() => step++}>Avançar</Button>
	</TransitionContainer>
{:else if step === 4}
	<TransitionContainer>
		<div>
			<p class="text-xs font-bold uppercase">Cálculo</p>
			<h1 class="pb-2 text-4xl font-bold">Árvores que serão conservadas.</h1>
		</div>

		<div class="relative flex w-full flex-col items-center py-8">
			<p class="pb-4 text-5xl font-bold">03</p>
			<div class="flex w-full justify-between py-2 px-4">
				<div class="font-bold">Minha emissão</div>
				<div>0,5 de tCO2e</div>
			</div>
			<div class="flex w-full justify-between rounded-lg bg-warn py-2 px-4">
				<div class="font-bold">Valor</div>
				<div>R$5,00</div>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<Button primary on:click={() => step++}>Avançar</Button>
			<Button on:click={() => (step = 0)}>Como funciona o cálculo</Button>
		</div>
	</TransitionContainer>
{:else if step === 5}
	<TransitionContainer>
		<div>
			<p class="text-xs font-bold uppercase">Reconhecimento</p>
			<h1 class="pb-2 text-4xl font-bold">Dados para criarmos o seu certificado</h1>
		</div>

		<div class="relative flex w-full flex-col items-center gap-4 py-8">
			<input
				class="h-12 w-full rounded-lg border-2 border-solid border-primary-color indent-4 text-sm"
				type="text"
				placeholder="Nome"
				name="Nome"
				id="name"
			/>
			<MaskInput
				class="h-12 w-full rounded-lg border-2 border-solid border-primary-color indent-4 text-sm"
				placeholder="CPF"
				maskChar="_"
				mask="000.000.000-00"
				on:change={({ detail }) => {
					cpf = detail.unmaskedValue;
				}}
			/>
			<input
				class="h-12 w-full rounded-lg border-2 border-solid border-primary-color indent-4 text-sm"
				type="email"
				placeholder="E-mail"
				name="email"
				id="email"
			/>
		</div>

		<div class="flex flex-col gap-4">
			<Button primary on:click={() => step++}>Avançar</Button>
			<Button on:click={() => (step = 0)}>Como funciona o cálculo</Button>
		</div>
	</TransitionContainer>
{/if}
