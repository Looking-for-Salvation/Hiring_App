<template>
	<base-slide>
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
									type="text"
									placeholder="شماره تلفن"
									class="w-full mb-4 sm:mb-0 sm:ml-4 form-control input input-bordered"
								/>
								<input v-model="formData.email" type="text" placeholder="ایمیل" class="w-full input input-bordered" />
							</div>
							<div class="flex flex-col justify-center w-full mb-4 sm:items-center sm:flex-row">
								<select v-model="formData.grade" class="mb-4 sm:flex-1 sm:mb-0 sm:ml-auto select select-bordered">
									<option value="none" disabled="disabled" hidden class="text-slate-500" selected="selected">مقطع تحصیلی</option>
									<option value="diploma">دیپلم</option>
									<option value="kardani">کاردانی</option>
									<option value="karshenasi">کارشناسی</option>
								</select>
								<input v-model="formData.field" type="text" placeholder="رشته تحصیلی" class="mb-4 input-bordered sm:flex-1 sm:mb-0 sm:mx-4 input" />
								<input type="text" placeholder="تاریخ تولد" class="sm:flex-1 sm:mr-auto input input-bordered date-picker" />
								<date-picker v-model="formData.birthDate" custom-input=".date-picker"></date-picker>
							</div>
							<textarea v-model="formData.address" class="w-full mb-8 textarea textarea-bordered min-h-[100px]" placeholder="آدرس"></textarea>
							<button class="w-1/2 max-w-xs mx-auto btn-outline btn">ثبت</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</base-slide>
</template>

<script>
import { onMounted, reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export default {
	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch("slides/nextSlideUnavailable");
		});

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

		const logToC = () => console.log(formData);

		// const submitForm = () => {
		// 	fetch("http://127.0.0.1:8000/api/register", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			firstName: formData.firstName,
		// 			lastName: formData.lastName,
		// 			email: formData.email,
		// 			phoneNumber: formData.phone,
		// 			grade: formData.grade,
		// 			fieldOfStudy: formData.field,
		// 			address: formData.address,
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
					grade: formData.grade,
					field_of_study: formData.field,
					phone_number: formData.phone,
					phone_number_alternative: formData.phone,
					email: formData.email,
					password: "password",
					password_confirmation: "password",
				})
				.then((response) => console.log(response))
				.catch((error) => console.log(error));
		};

		return { formData, logToC, submitForm };
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
