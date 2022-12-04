<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps({
	height: {
		type: [Number, String],
		default: 100,
	},
	width: {
		type: [Number, String],
		default: 200,
	},
	color: {
		type: String,
		default: "rgba(0, 0, 0, 0.08)",
	},
	animation: {
		type: String,
		default: "wave",
	},
	type: {
		type: String,
		default: "rect",
	},
	rounded: {
		type: Boolean,
		default: false,
	},
	radius: {
		type: [Number, String],
		default: 0,
	},
});

const bindClass = computed(
	() =>
		`animation--${props.animation} shape--${props.type} shape--${
			props.rounded ? "round" : "flat"
		}`
);

const style = computed(() => {
	return {
		width:
			typeof props.width === "number" ? `${props.width}px` : props.width,
		height:
			typeof props.height === "number"
				? `${props.height}px`
				: props.height,
		"background-color": `${props.color}`,
		"border-radius": props.rounded ? `${props.radius}px` : 0,
	};
});

const loader = ref<HTMLElement>();
onMounted(() => {
	const width =
		typeof props.width === "number" ? `${props.width}px` : props.width;
	const height =
		typeof props.height === "number" ? `${props.height}px` : props.height;
	const background = `${props.color}`;
	const borderRadius = props.rounded ? `${props.radius}px` : 0;
	let el = loader.value;
	if (el) {
		el.style.setProperty("width", "" + width);
		el.style.setProperty("height", "" + height);
		el.style.setProperty("background-color", "" + background);
		el.style.setProperty("border-radius", "" + borderRadius);
	}
});
</script>

<template>
	<div ref="loader" class="loader" :class="bindClass"></div>
</template>

<style scoped>
.loader {
	overflow: hidden;
	position: relative;
}
.loader::before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
}

.shape--text {
	height: 20px;
}
.shape--round {
	border-radius: 8px;
}
</style>