<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Icon from './icon.svelte'
	import Menu from './menu.svelte'
	import type { MenuItem, TableData, TableRow } from '@/types/component.types'

	export let data: TableData
	$: headers =
		data.length > 0
			? data // Get the headers from the data
					.map((row) => Object.keys(row))
					.reduce((prev, next) => prev.concat(next))
					.filter((value, index, self) => self.indexOf(value) === index)
			: []

	// Decide whether or not to show the menu (overwrite to force)
	export let menu: MenuItem[] = []
	$: isMenuIconVisible = menu.length > 0
	let dispatcher = createEventDispatcher()
	// Dispatch an event when a menu item is clicked with row data
	function onRowActionClick(menuId: string, rowIndex: number) {
		dispatcher('row-action-click', {
			menuItemId: menuId,
			rowIndex: rowIndex
		})
	}
</script>

<div class="overflow-x-auto drop-shadow">
	<div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
		<table class="min-w-full leading-normal table-auto">
			<thead>
				<tr class="text-sm font-ormal text-left text-brand-primary uppercase">
					{#each headers as header}
						<th scope="col" class="px-5 py-3 bg-white border-b border-gray-200">
							{header}
						</th>
					{/each}
					{#if isMenuIconVisible}
						<td class="px-5 py-5 bg-white border-b border-gray-200 w-12" />
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each data as row, index}
					<tr class="text-brand-primary text-sm">
						{#each headers as key}
							<td class="px-5 py-5 bg-white border-b border-gray-200">
								<p class="whitespace-no-wrap">{row[key]}</p>
							</td>
						{/each}

						{#if isMenuIconVisible}
							<td class="bg-white border-b border-gray-200">
								<Menu
									items={menu}
									on:menu-item-click={(e) => onRowActionClick(e.detail.menuItemId, index)}
								>
									<Icon name="menu" size={24} class="fill-brand-primary" />
								</Menu>
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
