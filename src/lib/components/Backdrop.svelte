<script lang='ts'>
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let open = false;

	const dispatch = createEventDispatcher();

	function handleClose() {
		dispatch('close');
	}
</script>

{#if open}
 <span
	 in:fade={{ duration: 200 }}
	 out:fade={{ duration: 200 }}
	 on:click|stopPropagation={handleClose}
	 class='absolute top-0 left-0 w-screen h-screen bg-gray-900/70'>
	 <slot/>
 </span>

{/if}
