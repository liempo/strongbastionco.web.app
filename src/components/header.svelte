<script lang="ts">
	import Icon from './icon.svelte'

	export let title: string
</script>

<div class="flex justify-between mb-4 items-center">
	<h2 class="text-2xl font-medium">{title}</h2>

	<div class="p-2 bg-white rounded-full drop-shadow">
		<div class="flex justify-end items-center bg-brand-background rounded-full">
			<Icon name="search" class="m-2 fill-brand-primary" />
			<input
				type="text"
				class="py-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
				placeholder="Search"
			/>
		</div>
	</div>
</div>
