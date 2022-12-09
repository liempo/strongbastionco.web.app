<script lang="ts">
	import { goto } from '$app/navigation'
	import Icon from '@/components/icon.svelte'
	import type { RouteItem } from '@/types/app.types'
	export let routeId: string | null
	export let routeItems: RouteItem[]
</script>

<div class="bg-white w-72 h-screen drop-shadow">
	<!-- Brand banner -->
	<div class="text-2xl py-12 text-center select-none">
		<span class="p-1 font-extrabold bg-brand-primary text-white">STRONG</span>
		<span class="text-brand-primary-dark">BASTION</span>
	</div>
	<div class="bg-gray-200 h-[1px] mb-4" />
	<!-- Navigation links -->
	<ul class="text-lg font-semibold">
		{#each routeItems as item}
			<li class="flex justify-between py-4 pl-8 pr-4 align-middle">
				<button class="flex gap-2" on:click={() => goto(item.routeId)}>
					<Icon
						name={item.icon}
						class={routeId === item.routeId ? 'fill-brand-primary' : 'fill-gray-400'}
					/>
					<span class={routeId === item.routeId ? 'text-brand-primary' : 'text-gray-400'}
						>{item.name}</span
					>
				</button>
				{#if routeId === item.routeId}
					<div class="h-8 w-1 bg-brand-accent rounded" />
				{/if}
			</li>
		{/each}
	</ul>
</div>
