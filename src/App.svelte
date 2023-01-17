<script lang="ts">
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
	const deleteListItem = (e) => {
		feedback = feedback.filter((f) => f.id !== e.detail);
	};

	$: count = feedback.length;
	$: avg = Math.round(feedback.reduce((cv, pv) => pv.rating + cv, 0) / count);
</script>

<main>
	<FeedbackStats {avg} {count} />
	<FeedbackList {feedback} on:delete-list-item={deleteListItem} />
</main>

<style>
</style>
