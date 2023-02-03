<script>
	import '../app.css';
</script>

<slot />

<style lang="postcss">
	:global(html) {
		@apply text-primary-color;
	}
</style>
