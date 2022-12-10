<script lang="ts">
	import { page } from '$app/stores'
	import type { LayoutData } from './$types'
	import Sidebar from '@/components/sidebar.svelte'
	export let data: LayoutData
</script>

<div class="flex">
	<aside class="sticky top-0 h-screen">
		<Sidebar routeId={$page.routeId} routeItems={data.routes} />
	</aside>
	<main class="grow bg-brand-background p-4">
		<slot />
	</main>
</div>
