<template>
	<div class="absolute inset-0 flex items-center justify-center m-auto" :style="inlineStyles">
		<div class="relative flex flex-col w-full px-6 m-4 overflow-auto bg-white shadow-md md:m-0 md:mx-auto rounded-2xl py-9" :style="inlineStyles">
			<section class="h-full p-0 lg:px-4">
				<div class="flex flex-col justify-between h-full px-4">
					<div class="flex-1 w-full md:px-10">
						<div class="flex items-center h-full md:px-10">
							<div class="container w-full mx-auto">
								<div class="max-w-xl mx-auto">
									<h1 class="mb-12 text-xl font-light tracking-tight text-center text-black sm:text-3xl">اطلاعات خود را وارد کنید</h1>
									<form @submit.prevent="submitForm" class="form-control">
										<div class="flex flex-col items-center mb-4 sm:flex-row">
											<input v-model="formData.firstName" type="text" placeholder="نام" class="w-full mb-4 sm:mb-0 sm:ml-4 input input-bordered" />
											<input v-model="formData.lastName" type="text" placeholder="نام خانوادگی" class="w-full input input-bordered" />
										</div>
										<div class="flex flex-col items-center mb-4 sm:flex-row">
											<input
												v-model="formData.phone"
												type="tel"
												placeholder="شماره تلفن"
												class="w-full mb-4 sm:mb-0 sm:ml-4 form-control input input-bordered"
											/>
											<input v-model="formData.email" type="email" placeholder="ایمیل" class="w-full input input-bordered" />
										</div>
										<div class="flex flex-col justify-center w-full mb-4 sm:items-center sm:flex-row">
											<select v-model="formData.grade" class="mb-4 sm:flex-1 sm:mb-0 sm:ml-auto select select-bordered">
												<option value="none" disabled="disabled" hidden class="text-slate-500" selected="selected">مقطع تحصیلی</option>
												<option value="diploma">دیپلم</option>
												<option value="kardani">کاردانی</option>
												<option value="karshenasi">کارشناسی</option>
											</select>
											<input
												v-model="formData.field"
												type="text"
												placeholder="رشته تحصیلی"
												class="mb-4 input-bordered sm:flex-1 sm:mb-0 sm:mx-4 input"
											/>
											<input type="text" placeholder="تاریخ تولد" class="sm:flex-1 sm:mr-auto input input-bordered date-picker" />
											<date-picker format="jYYYY-jMM-jDD" v-model="formData.birthDate" custom-input=".date-picker"></date-picker>
										</div>
										<textarea v-model="formData.address" class="w-full mb-8 textarea textarea-bordered min-h-[100px]" placeholder="آدرس"></textarea>
										<button class="w-1/2 max-w-xs mx-auto btn-outline btn">ثبت</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="relative text-center">
						<div class="flex items-center justify-center mt-10 lg:grid lg:grid-cols-3 lg:gap-6">
							<div class="ml-auto lg:flex lg:justify-end lg:mt-0">
								<button
									v-if="nextButtonVisibility"
									:disabled="!nextSlideAvailable"
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
							<div class="hidden my-auto text-lg text-center lg:block">{{ `${currentSlideId} از ${slidesCount}` }}</div>
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
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
	setup() {
		const store = useStore();

		onMounted(() => {
			store.dispatch("slides/nextSlideUnavailable");
		});

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

		const formData = reactive({
			firstName: "",
			lastName: "",
			phone: null,
			email: "",
			grade: "none",
			field: "",
			birthDate: "",
			address: "",
		});

		// const submitForm = () => {
		// 	fetch("http://127.0.0.1:8000/api/register", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			first_name: formData.firstName,
		// 			last_name: formData.lastName,
		// 			grade: formData.grade,
		// 			field_of_study: formData.field,
		// 			phone_number: formData.phone,
		// 			phone_number_backup: formData.phone,
		// 			email: formData.email,
		// 			address: formData.address,
		// 			password: "password",
		// 			password_confirmation: "password",
		// 		}),
		// 	})
		// 		.then((response) => console.log(response))
		// 		.catch((error) => {
		// 			console.log(error);
		// 			console.log(error.message);
		// 		});
		// };

		const submitForm = () => {
			axios
				.post("http://127.0.0.1:8000/api/register", {
					first_name: formData.firstName,
					last_name: formData.lastName,
					phone_number: formData.phone,
					phone_number_backup: formData.phone,
					email: formData.email,
					grade: formData.grade,
					field_of_study: formData.field,
					birthdate: formData.birthDate,
					address: formData.address,
					password: "password",
					password_confirmation: "password",
				})
				.then((response) => {
					if (response.status === 201) {
						store.dispatch("slides/nextSlideAvailable");
					} else {
						throw new Error("Something went wrong!");
					}
				})
				.catch((error) => {
					console.log(error);
					console.log(error.response);
				});
		};

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
			formData,
			submitForm,
		};
	},
};
</script>

<style scoped>
input:focus,
select:focus,
textarea:focus {
	--tw-shadow: 0 0 #0000;
	--tw-shadow-colored: 0 0 #0000;
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.input-bordered:focus,
.textarea-bordered:focus,
.select-bordered:focus {
	--tw-border-opacity: 0.75;
}
</style>
