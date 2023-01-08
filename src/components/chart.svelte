<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	export let id: string
	export let options: ApexCharts.ApexOptions

	onMount(async () => {
		if (!browser) return
		const { default: ApexCharts } = await import('apexcharts')
		const chart = new ApexCharts(document.querySelector(`#${id}`), options)
		chart.render()
	})
</script>

<div {id} />
