<script lang="ts">
	import { goto } from '$app/navigation'
	import Banner from './banner.svelte'
	import Icon from '@/components/icon.svelte'
	import type { RouteItem } from '@/types/app.types'
	export let routeId: string | null
	export let routeItems: RouteItem[]
</script>

<div class="bg-white w-72 h-screen drop-shadow">
	<!-- Brand banner -->
	<Banner />

	<div class="bg-gray-200 h-[1px] mb-4" />
	<!-- Navigation links -->
	<ul class="text-lg font-semibold">
		{#each routeItems as item}
			<li class="flex justify-between py-4 pl-8 pr-4 align-middle">
				<button class="flex gap-2" on:click={() => goto(item.id)}>
					<Icon
						name={item.icon}
						class={routeId === item.id ? 'fill-brand-primary' : 'fill-gray-400'}
					/>
					<span class={routeId === item.id ? 'text-brand-primary' : 'text-gray-400'}
						>{item.name}</span
					>
				</button>
				{#if routeId === item.id}
					<div class="h-8 w-1 bg-brand-accent rounded" />
				{/if}
			</li>
		{/each}
	</ul>
</div>
