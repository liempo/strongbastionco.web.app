<script>
	import { page } from '$app/stores'
	import Sidebar from '@/components/sidebar.svelte'
	import '../app.css'
</script>

<div class="flex">
	<aside class="sticky top-0">
		<Sidebar routeId={$page.routeId} />
	</aside>
	<main class="grow h-screen bg-brand-background">
		<slot />
	</main>
</div>
