<script>
	import { fade, scale } from "svelte/transition";
	import FeedbackItem from "./FeedbackItem.svelte";
	export let feedback = [];

	console.log(feedback);
</script>

{#each feedback as item (item.id)}
	<div in:scale out:fade={{ duration: 200 }}>
		<FeedbackItem {item} on:delete-list-item />
	</div>
{/each}
