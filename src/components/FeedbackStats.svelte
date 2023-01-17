<script>
	export let count = 0;
	export let avg = 0;
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
