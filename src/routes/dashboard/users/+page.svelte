<script lang="ts">
	import Table from '@/components/table.svelte'
	import type { MenuItem, TableData } from '@/types/component.types'

	// Generate random tableData
	let data: TableData = []
	for (let i = 0; i < 10; i++) {
		data.push({
			id: i,
			name: 'John Doe',
			email: 'gonzalesalec@gmail.com',
			type: 'Admin'
		})
	}

	let menu: MenuItem[] = [
		{
			id: 'delete',
			icon: 'user',
			label: 'Delete'
		}
	]

	const onRowActionClick = (e: CustomEvent) => {
		const { menuItemId, rowIndex } = e.detail
		switch (menuItemId) {
			case 'delete':
				// Delete the row and update the table
				data = data.filter((row) => row.id !== rowIndex)

				break

			default:
				break
		}
	}
</script>

<Table {data} {menu} on:row-action-click={onRowActionClick} />
