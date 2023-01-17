<script>
	import Card from "./Card.svelte";
	import SelectRating from "./SelectRating.svelte";
	import { FeedbackStore } from "../store";
	let text = "";
	let rating = 10;
	$: btnDisabled = text.trim().length < 10;
	const handleRating = (e) => {
		rating = e.detail;
	};
	const handleSubmit = () => {
		if (text.trim().length > 10) {
			const id = $FeedbackStore.reduce(
				(cv, pv) => (pv.id > cv ? pv.id + 1 : cv + 1),
				1
			);
			const nf = {
				id,
				rating,
				text,
			};
			FeedbackStore.update((cv) => [...cv, nf]);
		}
	};
</script>

<Card>
	<form action="" on:submit|preventDefault={handleSubmit}>
		<SelectRating on:set-rating={handleRating} selected={rating} />
		<div class="input-group">
			<input
				type="text"
				bind:value={text}
				name="text"
				placeholder="Leave a review"
			/>
			<button disabled={btnDisabled} type="submit">Send</button>
		</div>
	</form>
</Card>

<style>
	.input-group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
	}
</style>
