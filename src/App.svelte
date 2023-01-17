<script lang="ts">
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<main class="main">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
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
