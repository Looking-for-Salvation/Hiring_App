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
		const currentSlideId = computed(() => store.getters["slides/currentSlideId"]);

		const currentSlide = computed(() => {
			if (currentSlideId.value === 1) return "intro-slide";
			if (currentSlideId.value === 2) return "info-slide";
			if (currentSlideId.value === 3) return "first-slide";
		});

		return { currentSlide };
	},
};
</script>
