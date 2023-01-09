<script lang="ts">
	import Table from '@/components/table.svelte'
</script>

<Table
	headers={['Username', 'Account Type', 'Date Created', 'Last Seen']}
	data={[
		['admin', 'Admin', '2021-01-01', '2021-01-01'],
		['user', 'User', '2021-01-01', '2021-01-01']
	]}
	onRowClick={(e) => {
		console.log(e)
	}}
/>
