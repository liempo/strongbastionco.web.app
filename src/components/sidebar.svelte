<script lang="ts">
	import Icon from '@/components/icon.svelte'
	import { onMount } from 'svelte'
	import type { SidebarItem } from './component.types'

	export let items: SidebarItem[] = [
		{
			name: 'Dashboard',
			icon: 'home',
			routeId: '/'
		}
	]
	export let routeId: string
</script>

<div class="bg-white w-72 h-screen drop-shadow">
	<!-- Brand banner -->
	<div class="text-2xl py-12 text-center select-none">
		<span class="p-1 font-extrabold bg-brand-primary-dark text-brand-white">STRONG</span>
		<span class="text-brand-primary-dark">BASTION</span>
	</div>
	<div class="bg-gray-200 h-[1px] mb-4" />
	<!-- Navigation links -->
	<ul class="text-lg font-semibold">
		{#each items as item}
			<li class="flex justify-between py-4 pl-8 pr-4 align-middle">
				<div class="flex gap-2">
					<Icon
						name={item.icon}
						class={routeId === item.routeId ? 'fill-brand-primary-dark' : 'fill-gray-400'}
					/>
					<span class={routeId === item.routeId ? 'text-brand-primary-dark' : 'text-gray-400'}
						>{item.name}</span
					>
				</div>

				{#if routeId === item.routeId}
					<div class="h-8 w-1 bg-brand-accent rounded" />
				{/if}
			</li>
		{/each}
	</ul>
</div>
