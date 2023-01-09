<script lang="ts">
	import Table from '@/components/table.svelte'

	// generate sample data

	let data = [
		{
			id: 1,
			name: 'John Doe',
			email: 'sdt',
			role: 'Admin'
		}
	]
</script>

<Table {data} />
