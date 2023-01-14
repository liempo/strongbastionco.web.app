<script lang="ts">
	import type { MenuItem } from '@/types/component.types'
	import Icon from './icon.svelte'

	let isDropdownOpen: boolean = false
	let container: HTMLElement

	export let items: MenuItem[]

	const windowOnClick = (e: MouseEvent) => {
		if (container && !container.contains(e.target as Node)) {
			isDropdownOpen = false
		}
	}
</script>

<svelte:window on:click={windowOnClick} />
<div bind:this={container}>
	<!-- Create a dropdown menu with button -->
	<button data-dropdown-toggle="menuDropdown" on:click={() => (isDropdownOpen = !isDropdownOpen)}
		><slot /></button
	>
	<div
		class={`overflow-visible absolute right-5 z-10 bg-white rounded-lg shadow-lg ease-in-out transition duration-200  ${
			isDropdownOpen ? 'scale-100 visible' : 'scale-0 invisible'
		}`}
		data-dropdown-menu
	>
		{#each items as item}
			<div class="flex px-4 py-2 justify-start hover:bg-gray-100 gap-4 items-center">
				<Icon name={item.icon} size={16} class="fill-brand-primary" />
				<span class="text-sm text-gray-700">{item.label}</span>
			</div>
		{/each}
	</div>
</div>
