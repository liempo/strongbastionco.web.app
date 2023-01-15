<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import type { MenuItem } from '@/types/component.types'
	import Icon from './icon.svelte'

	let isDropdownOpen: boolean = false
	let container: HTMLElement

	export let items: MenuItem[]

	// Check items for duplicate ids
	const ids = items.map((item) => item.id)
	const duplicates = ids.filter((item, index) => ids.indexOf(item) != index)
	if (duplicates.length > 0) {
		throw new Error(`Duplicate ids found in menu items: ${duplicates}`)
	}

	const windowOnClick = (e: MouseEvent) => {
		if (container && !container.contains(e.target as Node)) {
			isDropdownOpen = false
		}
	}

	const dispatcher = createEventDispatcher()
	const onMenuItemClick = (menuItemId: string) => {
		dispatcher('menu-item-click', { menuItemId })
	}
</script>

<svelte:window on:click={windowOnClick} />
<div bind:this={container}>
	<!-- Create a dropdown menu with button -->
	<button data-dropdown-toggle="menuDropdown" on:click={() => (isDropdownOpen = !isDropdownOpen)}
		><slot /></button
	>
	<div
		class={`grid grid-flow-row grid-cols-1 overflow-visible absolute right-5 z-10 bg-white rounded-lg shadow-lg ease-in-out transition duration-200  ${
			isDropdownOpen ? 'scale-100 visible' : 'scale-0 invisible'
		}`}
		data-dropdown-menu
	>
		{#each items as item}
			<button
				class="flex px-4 py-2 justify-start hover:bg-gray-100 gap-4 items-center"
				on:click={() => onMenuItemClick(item.id)}
			>
				<Icon name={item.icon} size={16} class="fill-brand-primary" />
				<span class="text-sm text-gray-700">{item.label}</span>
			</button>
		{/each}
	</div>
</div>
