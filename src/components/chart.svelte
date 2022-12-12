<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

	const options = {
		chart: {
			type: 'bar'
		},
		series: [
			{
				name: 'sales',
				data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
			}
		],
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
		}
	}

	onMount(async () => {
		if (!browser) return
		const { default: ApexCharts } = await import('apexcharts')
		const chart = new ApexCharts(document.querySelector('#chart'), options)
		chart.render()
	})
</script>

<div id="chart" />
