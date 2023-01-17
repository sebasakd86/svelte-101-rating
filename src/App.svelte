<script lang="ts">
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	import { FeedbackStore } from "./store";
	let feedback = [];
	FeedbackStore.subscribe((data) => (feedback = data));
	const handleSubmit = (e) => {
		feedback = [
			...feedback,
			{
				id: feedback.reduce(
					(cv, pv) => (pv.id > cv ? pv.id + 1 : cv + 1),
					1
				),
				rating: e.detail.rating,
				text: e.detail.text,
			},
		];
	};
	const deleteListItem = (e) => {
		feedback = feedback.filter((f) => f.id !== e.detail);
	};

	$: count = feedback.length;
	$: avg = Math.round(feedback.reduce((cv, pv) => pv.rating + cv, 0) / count);
</script>

<main class="main">
	<FeedbackForm on:submit-form={handleSubmit} />
	<FeedbackStats {avg} {count} />
	<FeedbackList on:delete-list-item={deleteListItem} />
</main>

<style>
	.main {
		max-width: 75vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		margin: 0 auto;
	}
</style>
