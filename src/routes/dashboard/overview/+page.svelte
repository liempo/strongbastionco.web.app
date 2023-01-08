<script lang="ts">
	import Chart from '@/components/chart.svelte'
	import Icon from '@/components/icon.svelte'
</script>

<content>
	<!-- Summary of sales, expenses, and income -->
	<summary class="flex justify-evenly gap-4">
		<div class="rounded-2xl drop-shadow-sm p-6 bg-white flex gap-2 items-center flex-1">
			<div class="bg-brand-background rounded-full my-auto p-2 mr-2">
				<Icon name="revenue" size={32} class="fill-brand-accent" />
			</div>
			<div>
				<p class="text-gray-400 text-sm">Sales</p>
				<p class="text-brand-primary text-xl font-semibold">PHP 12, 345.12</p>
			</div>
		</div>
		<div class="rounded-2xl drop-shadow-sm p-6 bg-white flex gap-2 items-center flex-1">
			<div class="bg-brand-background rounded-full my-auto p-2 mr-2">
				<Icon name="expenses" size={32} class="fill-brand-accent" />
			</div>
			<div>
				<p class="text-gray-400 text-sm">Expenses</p>
				<p class="text-brand-primary text-xl font-semibold">PHP 12, 345.12</p>
			</div>
		</div>
		<div class="rounded-2xl drop-shadow-sm p-6 bg-white flex gap-2 items-center flex-1">
			<div class="bg-brand-background rounded-full my-auto p-2 mr-2">
				<Icon name="income" size={32} class="fill-brand-accent" />
			</div>
			<div>
				<p class="text-gray-400 text-sm">Income</p>
				<p class="text-brand-primary text-xl font-semibold">PHP 12, 345.12</p>
			</div>
		</div>
	</summary>

	<!-- Grid for bigger cards -->
	<preview class="grid grid-cols-2 gap-4 mt-4">
		<!-- Sales by category -->
		<div class="rounded-2xl drop-shadow-sm p-6 bg-white">
			<h3 class="text-brand-primary text-xl font-semibold">Sales by Category</h3>
			<Chart
				id="sales-by-category"
				options={{
					series: [44, 55, 41, 17, 15],
					chart: {
						type: 'donut'
					},
					labels: ['Apparel', 'Electronics', 'Furniture', 'Groceries', 'Others']
				}}
			/>
		</div>

		<!-- Sales by location -->
		<div class="rounded-2xl drop-shadow-sm p-6 bg-white">
			<h3 class="text-brand-primary text-xl font-semibold">Sales by Location</h3>
			<Chart
				id="sales-by-location"
				options={{
					chart: {
						type: 'bar'
					}
				}}
			/>
		</div>
	</preview>
</content>
