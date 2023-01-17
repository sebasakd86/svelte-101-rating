<script lang="ts">
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
	let feedback = [
		{
			id: 1,
			rating: 8,
			text: "Nisi magna magna est ut sint elit.",
		},
		{
			id: 2,
			rating: 7,
			text: "Amet elit in mollit qui sunt fugiat sint incididunt.",
		},
		{
			id: 3,
			rating: 10,
			text: "Cupidatat deserunt nulla consectetur aute est non aliqua fugiat dolore magna cupidatat elit occaecat.",
		},
	];
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
	<FeedbackList {feedback} on:delete-list-item={deleteListItem} />
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
