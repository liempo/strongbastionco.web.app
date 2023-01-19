<script lang="ts">
	import Banner from '@/components/banner.svelte'
</script>

<div class="flex flex-col items-center bg-brand-background h-screen">
	<Banner />
	<div class="rounded-lg drop-shadow bg-white w-96">
		<slot />
	</div>
</div>
