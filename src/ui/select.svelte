<script lang="ts">
	export let options: { value: string; label: string }[];

	export let selected: string;
</script>

<select
	bind:value={selected}
	class="w-100 box-border rounded-lg border-2 border-solid border-primary-color bg-white p-4 text-sm"
>
	{#each options as opt}
		<option value={opt.value}>
			{opt.label}
		</option>
	{/each}
</select>
