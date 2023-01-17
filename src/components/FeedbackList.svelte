<script>
	import { FeedbackStore } from "../store";
	import { fade, scale } from "svelte/transition";
	import FeedbackItem from "./FeedbackItem.svelte";
</script>

<!-- unsubscribe automatically -->
{#each $FeedbackStore as item (item.id)}
	<div in:scale out:fade={{ duration: 200 }}>
		<FeedbackItem {item} />
	</div>
{/each}
