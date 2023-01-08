<script lang="ts">
	import { getStores } from '$app/stores'
	import type { LayoutData } from './$types'
	import Sidebar from '@/components/sidebar.svelte'
	import Header from '@/components/header.svelte'

	const { page } = getStores()

	export let data: LayoutData

	const { routes } = data
	let title: string

	page.subscribe(($page) => {
		title = routes.find((r) => r.routeId === $page.routeId)?.name ?? ''
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex">
	<aside class="sticky top-0 h-screen">
		<Sidebar routeId={$page.routeId} routeItems={data.routes} />
	</aside>
	<main class="grow bg-brand-background p-4">
		<Header {title} />
		<slot />
	</main>
</div>
