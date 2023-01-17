<script>
	import { createEventDispatcher } from "svelte";
	import { FeedbackStore } from "../store";
	import Card from "./Card.svelte";
	export let item = {};
	const dispatch = createEventDispatcher();
	const handleDelete = (id) => {
		// console.log(id);
		// dispatch("delete-list-item", id);
		FeedbackStore.update((cv) => cv.filter((f) => f.id !== id));
	};
</script>

<Card>
	<div class="num-display">
		{item.rating}
	</div>
	<button on:click={handleDelete(item.id)} class="close">X</button>
	<p class="text-display">{item.text}</p>
</Card>

<style>
	.num-display {
		position: absolute;
		left: -1rem;
		top: -1rem;
		background: pink;
		border-radius: 50%;
		padding: 0.5rem;
		font-size: 1.25rem;
	}
	.close {
		position: absolute;
		top: -1rem;
		right: -1rem;
		color: white;
		background-color: black;
		border: 1px solid white;
		border-radius: 50%;
		padding: 0.5rem;
	}
</style>
