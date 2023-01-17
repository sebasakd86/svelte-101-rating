<script>
	import Card from "./Card.svelte";
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();
	export let selected = 0;
	let rating = Array.from({ length: 10 }).map((_, ix) => ix + 1);
	const handleClick = (r) => dispatch("set-rating", r);
</script>

<Card>
	<div class="list">
		{#each rating as r}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span
				on:click={() => handleClick(r)}
				class={`item ${selected === r ? "selected" : ""}`}
			>
				{r}
			</span>
		{/each}
	</div>
</Card>

<style>
	.list {
		display: flex;
		justify-content: space-evenly;
	}
	.item {
		padding: 0.5rem;
		background: pink;
		border-radius: 100%;
		border: 1px solid white;
		padding: 0.25rem 0.5rem;
		display: flex;
		align-content: center;
		justify-content: center;
		cursor: pointer;
		color: white;
	}
	.selected {
		background: greenyellow;
	}
</style>
