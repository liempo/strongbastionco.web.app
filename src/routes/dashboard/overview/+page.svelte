<script lang="ts">
	import Chart from '@/components/chart.svelte'
	import Header from '@/components/header.svelte'
	import Icon from '@/components/icon.svelte'

	export const ssr = false
</script>

<content>
	<Header title="Overview" />

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
</content>
