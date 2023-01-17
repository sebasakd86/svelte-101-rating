<script lang="ts">
	import FeedbackList from "./components/FeedbackList.svelte";
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
			rating: 9,
			text: "Cupidatat deserunt nulla consectetur aute est non aliqua fugiat dolore magna cupidatat elit occaecat.",
		},
	];
</script>

<main>
	<FeedbackList {feedback} />
</main>

<style>
</style>
