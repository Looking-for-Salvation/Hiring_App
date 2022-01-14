<template>
	<base-slide>
		<div class="flex-1 w-full md:px-10">
			<div class="flex items-center h-full md:px-10">
				<div class="container w-full mx-auto">
					<div class="max-w-xl mx-auto">
						<h1 class="mb-12 text-xl font-light tracking-tight text-center text-black sm:text-3xl">اطلاعات خود را وارد کنید</h1>
						<form class="form-control">
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
									<option disabled="disabled" class="text-slate-500" selected="selected">مقطع تحصیلی</option>
									<option value="diploma">دیپلم</option>
									<option value="kardani">کاردانی</option>
									<option value="karshenasi">کارشناسی</option>
								</select>
								<input
									v-model="formData.field"
									type="text"
									placeholder="رشته تحصیلی"
									class="mb-4 shadow-none focus:border-gray-600 input-bordered sm:flex-1 sm:mb-0 sm:mx-4 input"
								/>
								<input type="text" placeholder="تاریخ تولد" class="sm:flex-1 sm:mr-auto input input-bordered date-picker" />
								<date-picker v-model="formData.birthDate" custom-input=".date-picker"></date-picker>
							</div>
							<textarea v-model="formData.address" class="w-full textarea textarea-bordered min-h-[100px]" placeholder="آدرس"></textarea>
							<button @click="logToC" type="button" class="btn btn-primary">لاگ</button>
							<button class="btn btn-primary">ثبت</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</base-slide>
</template>

<script>
import { reactive } from "vue";

export default {
	setup() {
		const formData = reactive({
			firstName: "",
			lastName: "",
			phone: 0,
			email: "",
			grade: "",
			field: "",
			birthDate: "",
			address: "",
		});

		const logToC = () => console.log(formData);

		return { formData, logToC };
	},
};
</script>

<style scoped>
input:focus {
	--tw-shadow: 0 0 #0000;
	--tw-shadow-colored: 0 0 #0000;
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
