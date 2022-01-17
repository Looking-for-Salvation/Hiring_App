<template>
	<div class="absolute inset-0 flex items-center justify-center m-auto" :style="inlineStyles">
		<div class="relative flex flex-col w-full px-6 m-4 overflow-auto bg-white shadow-md md:m-0 md:mx-auto rounded-2xl py-9" :style="inlineStyles">
			<section class="h-full p-0 lg:px-4">
				<div class="flex flex-col justify-between h-full px-4">
					<div class="flex-1 w-full md:px-10">
						<div class="flex items-center h-full md:px-10">
							<div class="container w-full mx-auto">
								<div class="max-w-xl mx-auto">
									<h1 class="mb-12 text-3xl font-light tracking-tight text-center text-black">خوش آمدید</h1>
									<p class="text-lg font-light tracking-tight text-black">
										لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
										ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
									</p>
									<button class="btn" @click="loadQuestions">Load Questions</button>
									<button class="btn" @click="logQuestions">Log Questions</button>
								</div>
							</div>
						</div>
					</div>
					<div class="relative text-center">
						<div class="flex items-center justify-center mt-10 lg:grid lg:grid-cols-3 lg:gap-6">
							<div class="ml-auto lg:flex lg:justify-end lg:mt-0">
								<button
									v-if="nextButtonVisibility"
									:disabled="nextSlideAvailable"
									@click="nextSlide"
									class="inline-flex items-center text-black transition duration-200 disabled:text-gray-300 hover:text-blue-400"
								>
									<span class="hidden p-2 bg-gray-100 md:inline-block rounded-xl">
										<svg viewBox="0 0 20 20" class="w-6" data-v-2836fdb5-s="">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-2836fdb5-s="">
												<g class="fill-current" data-v-2836fdb5-s="">
													<polygon
														points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
														data-v-2836fdb5-s=""
													></polygon>
												</g>
											</g>
										</svg>
									</span>
									<span class="md:mr-3">بعدی</span>
								</button>
								<button v-if="submitButtonVisibility" class="inline-flex items-center text-black transition duration-200 hover:text-blue-400">
									<span class="hidden p-2 bg-gray-100 md:inline-block rounded-xl">
										<svg viewBox="0 0 20 20" class="w-6 transform -rotate-90" data-v-2836fdb5-s="">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-2836fdb5-s="">
												<g class="fill-current" data-v-2836fdb5-s="">
													<polygon
														points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
														data-v-2836fdb5-s=""
													></polygon>
												</g>
											</g>
										</svg>
									</span>
									<span class="md:mr-3">ارسال</span>
								</button>
							</div>
							<div></div>
							<div class="mr-auto lg:flex lg:w-38">
								<button
									v-if="prevButtonVisibility"
									@click="prevSlide"
									class="inline-flex items-center text-black transition duration-200 hover:text-blue-400"
								>
									<span class="md:ml-3">قبلی</span>
									<span class="hidden p-2 bg-gray-100 md:inline-block rounded-xl">
										<svg viewBox="0 0 20 20" class="w-6 transform rotate-180" data-v-2836fdb5-s="">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-2836fdb5-s="">
												<g class="fill-current" data-v-2836fdb5-s="">
													<polygon
														points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
														data-v-2836fdb5-s=""
													></polygon>
												</g>
											</g>
										</svg>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();
		const currentSlideId = computed(() => store.getters["slides/currentSlideId"]);
		const slidesCount = computed(() => store.getters["slides/slidesCount"]);
		const nextSlideAvailable = computed(() => store.getters["slides/nextSlideAvailability"]);

		const nextSlide = () => {
			if (currentSlideId.value >= 1) store.dispatch("slides/nextSlide");
		};

		const prevSlide = () => {
			store.dispatch("slides/prevSlide");
		};

		const nextButtonVisibility = computed(() => {
			if (currentSlideId.value >= slidesCount.value) return false;
			else return true;
		});

		const prevButtonVisibility = computed(() => {
			if (currentSlideId.value === 1) return false;
			else return true;
		});

		const submitButtonVisibility = computed(() => {
			if (currentSlideId.value === slidesCount.value) return true;
			else return false;
		});

		const inlineStyles = "height: 600px; max-width: 1000px;";

		const loadQuestions = () => store.dispatch("questions/loadQuestions");
		const questions = computed(() => store.getters["questions/questions"]);
		const logQuestions = () => console.log(questions);

		return {
			currentSlideId,
			slidesCount,
			nextSlide,
			prevSlide,
			nextButtonVisibility,
			prevButtonVisibility,
			submitButtonVisibility,
			nextSlideAvailable,
			inlineStyles,
			loadQuestions,
			logQuestions,
		};
	},
};
</script>
