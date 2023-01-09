<script lang="ts">
	import Icon from './icon.svelte'

	type TableData = Record<string, any>[]
	export let data: TableData

	type TableRowMenu = {
		icon: string
		onClick: () => void
	}
	export let menu: TableRowMenu[] | undefined = undefined

	// Decide whether or not to show the menu (overwrite to force)
	$: isMenuIconVisible = menu !== undefined && menu.length > 0
	// Get all the headers from the data
	$: headers = data
		.map((row) => Object.keys(row))
		.reduce((prev, next) => prev.concat(next))
		.filter((value, index, self) => self.indexOf(value) === index)
</script>

<div class="overflow-x-auto drop-shadow">
	<div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
		<table class="min-w-full leading-normal">
			<thead>
				<tr class="text-sm font-ormal text-left text-brand-primary uppercase">
					{#each headers as header}
						<th scope="col" class="px-5 py-3 bg-white border-b border-gray-200">
							{header}
						</th>
					{/each}
					{#if isMenuIconVisible}
						<td class="px-5 py-5 bg-white border-b border-gray-200" />
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each data as row}
					<tr class="text-brand-primary text-sm">
						{#each headers as key}
							<td class="px-5 py-5 bg-white border-b border-gray-200">
								<p class="whitespace-no-wrap">{row[key]}</p>
							</td>
						{/each}

						{#if isMenuIconVisible}
							<td class="bg-white border-b border-gray-200">
								<button>
									<Icon name="menu" size={24} class="fill-brand-primary" />
								</button>
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
