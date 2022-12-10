<script lang="ts">
	import Header from '@/components/header.svelte'
	import Table from '@/components/table.svelte'
</script>

<content>
	<Header title="Overview" />
	<Table
		headers={['Product', 'Date Ordered', 'Quantity', 'Price', 'Total']}
		data={Array.from({ length: 20 }, () => {
			return [
				'Product Name',
				'2021-01-01',
				Math.floor(Math.random() * 100),
				Math.floor(Math.random() * 100),
				Math.floor(Math.random() * 100)
			]
		})}
	/>
</content>
