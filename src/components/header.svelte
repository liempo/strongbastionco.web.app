<script lang="ts">
	import { searchQuery } from '@/lib/store'
	import Icon from './icon.svelte'
	export let title: string
</script>

<div class="flex justify-between mb-4 items-center">
	<h2 class="text-2xl font-medium text-brand-primary">{title}</h2>
	<div class="px-2 py-1.5 bg-white rounded-full drop-shadow-sm flex">
		<div class="flex justify-end items-center bg-brand-background rounded-full">
			<Icon name="search" class="mx-4 fill-brand-primary" size={16} />
			<input
				bind:value={$searchQuery}
				type="text"
				class="py-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
				placeholder="Search"
			/>
		</div>
		<div class="rounded-full bg-brand-primary p-2 ml-4">
			<Icon name="user" class="fill-white" />
		</div>
	</div>
</div>
