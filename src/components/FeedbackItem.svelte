<script>
	import Card from "./Card.svelte";
	export let item = {};
</script>

<Card>
	<h6>ID: {item.id}</h6>
	<h6>Rating: {item.rating}</h6>
	<h6>Text {item.text}</h6>
</Card>
