<template>
	<component :is="currentSlide"></component>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import IntroSlide from "@/views/slides/IntroSlide.vue";
import InfoSlide from "@/views/slides/InfoSlide.vue";
import FirstSlide from "@/views/slides/FirstSlide.vue";

export default {
	components: {
		IntroSlide,
		InfoSlide,
		FirstSlide,
	},
	setup() {
		const store = useStore();
		console.log(store);
		const currentSlideId = computed(() => store.getters["slides/currentSlideId"]);
		console.log(currentSlideId);
		const currentSlide = computed(() => {
			if (currentSlideId.value === 1) return "intro-slide";
			if (currentSlideId.value === 2) return "info-slide";
			if (currentSlideId.value === 3) return "first-slide";
		});

		const nextSlide = () => {
			if (currentSlideId.value >= 1) store.dispatch("slides/nextSlide");
			if (currentSlideId.value >= 10) currentSlideId.value = 10;
		};

		const prevSlide = () => {
			// if (currentSlideId.value <= 1) currentSlideId.value = 1;
			// if (currentSlideId.value > 1) currentSlideId--;
			currentSlideId--;
		};

		return { currentSlide, currentSlideId, nextSlide, prevSlide };
	},
};
</script>
