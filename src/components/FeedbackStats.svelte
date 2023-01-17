<script>
	import { FeedbackStore } from "../store";

	$: count = $FeedbackStore.length;
	$: avg = Math.round(
		$FeedbackStore.reduce((cv, { rating }) => rating + cv, 0) / count
	);
</script>

<div class="stats">
	<h4>Total Ratings : {count}</h4>
	<h5>Average Rating: {avg}</h5>
</div>

<style>
	.stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: auto 0;
	}
</style>
