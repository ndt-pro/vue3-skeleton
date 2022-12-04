<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

const props = defineProps({
	height: {
		type: [Number, String],
		default: 100,
	},
	width: {
		type: [Number, String],
		default: 100,
	},
	color: {
		type: String,
		default: "rgba(0, 0, 0, 0.08)",
	},
	animation: {
		type: String,
		default: "wave",
	},
});

const bindClass = computed(() => `animation--${props.animation}`);

const loader = ref<HTMLElement>();
onMounted(() => {
	const width =
		typeof props.width === "number" ? `${props.width}px` : props.width;
	const height =
		typeof props.width === "number" ? `${props.height}px` : props.height;
	const background = `${props.color}`;
	let el = loader.value;
	if (el) {
		el.style.setProperty("width", "" + width);
		el.style.setProperty("height", "" + height);
		el.style.setProperty("background-color", "" + background);
	}
});
</script>

<template>
	<div ref="loader" class="loader loader--circle" :class="bindClass"></div>
</template>

<style scoped>
.loader--circle {
	overflow: hidden;
	width: 100px;
	height: 100px;
	background-color: red;
	border-radius: 50%;
	position: relative;
}
.loader--circle::before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
}
</style>