<script lang="ts">
	import Icon from './icon.svelte'

	export let headers: string[]
	export let data: any[]

	// Pass function as props instead of using dispatch
	export let onRowClick: (row: any) => void | undefined

	// check if headers and data is not empty
	$: if (headers.length === 0 || data.length === 0) {
		throw new Error('Headers and data must not be empty')
	}
	// check if headers and data has the same length
	$: if (headers.length !== data[0].length) {
		throw new Error('Headers and data must have the same length')
	}
</script>

<div class="overflow-x-auto drop-shadow">
	<div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
		<table class="min-w-full leading-normal">
			<thead>
				<tr class="text-sm font-normal text-left text-brand-primary uppercase">
					{#each headers as header}
						<th scope="col" class="px-5 py-3 bg-white border-b border-gray-200">
							{header}
						</th>
					{/each}
					{#if onRowClick !== undefined}
						<td class="px-5 py-5 bg-white border-b border-gray-200" />
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each data as row}
					<tr class="text-brand-primary text-sm">
						{#each row as cell}
							<td class="px-5 py-5 bg-white border-b border-gray-200">
								<p class="whitespace-no-wrap">{cell}</p>
							</td>
						{/each}

						{#if onRowClick !== undefined}
							<td class="bg-white border-b border-gray-200">
								<button
									on:click={() => {
										onRowClick(row)
									}}
								>
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
