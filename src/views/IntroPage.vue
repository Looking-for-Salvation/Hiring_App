<template>
	<div>
		<welcome-slide v-if="currentSlideId === 1"></welcome-slide>
		<register-slide v-if="currentSlideId === 2"></register-slide>
		<base-slide v-for="question in questions" :key="question.id" :question="question"></base-slide>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import WelcomeSlide from "@/views/slides/WelcomeSlide.vue";
import RegisterSlide from "@/views/slides/RegisterSlide.vue";

export default {
	components: {
		WelcomeSlide,
		RegisterSlide,
	},
	setup() {
		const store = useStore();
		const currentSlideId = computed(() => store.getters["slides/currentSlideId"]);

		const questions = computed(() => store.getters["questions/questions"]);

		return { currentSlideId, questions };
	},
};
</script>
