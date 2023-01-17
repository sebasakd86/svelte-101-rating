import { writable } from "svelte/store";

export const FeedbackStore = writable([
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
]);
