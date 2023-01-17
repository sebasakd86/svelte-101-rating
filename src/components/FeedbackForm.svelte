<script>
	import Card from "./Card.svelte";
	import SelectRating from "./SelectRating.svelte";
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();
	let text = "";
	let rating = 10;
	$: btnDisabled = text.trim().length < 10;
	const handleRating = (e) => {
		rating = e.detail;
	};
	const handleSubmit = () => {
		if (text.trim().length > 10) {
			dispatch("submit-form", {
				text,
				rating,
			});
		}
	};
</script>

<Card>
	<form action="" on:submit|preventDefault={handleSubmit}>
		<div class="input-group">
			<SelectRating on:set-rating={handleRating} selected={rating} />
			<input
				type="text"
				bind:value={text}
				name="text"
				placeholder="Leave a review"
				id=""
			/>
			<button disabled={btnDisabled} type="submit">Send</button>
		</div>
	</form>
</Card>
