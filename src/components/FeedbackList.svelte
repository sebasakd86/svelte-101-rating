<script>
	import { FeedbackStore } from "../store";
	import { fade, scale } from "svelte/transition";
	import FeedbackItem from "./FeedbackItem.svelte";
	import { onDestroy } from "svelte";
	let feedback = [];
	const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

	onDestroy(() => {
		unsubscribe();
	});
	// onMount(() => {})

	console.log(feedback);
</script>

{#each feedback as item (item.id)}
	<div in:scale out:fade={{ duration: 200 }}>
		<FeedbackItem {item} on:delete-list-item />
	</div>
{/each}
