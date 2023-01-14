<script lang="ts">
	import Table from '@/components/table.svelte'
	import type { TableData } from '@/types/component.types'

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

	let menu = [
		{
			icon: 'user',
			label: 'Edit'
		},
		{
			icon: 'user',
			label: 'Delete'
		}
	]
</script>

<Table {data} {menu} />
