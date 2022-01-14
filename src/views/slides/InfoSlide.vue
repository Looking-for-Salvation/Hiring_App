<template>
	<base-slide>
		<div class="flex-1 w-full md:px-10">
			<div class="flex items-center h-full md:px-10">
				<div class="container w-full mx-auto">
					<div class="max-w-xl mx-auto">
						<h1 class="mb-12 text-xl font-light tracking-tight text-center text-black sm:text-3xl">اطلاعات خود را وارد کنید</h1>
						<form class="form-control">
							<div class="flex flex-col items-center mb-4 sm:flex-row">
								<input type="text" placeholder="نام" class="w-full mb-4 sm:mb-0 sm:ml-4 input input-bordered" />
								<input type="text" placeholder="نام خانوادگی" class="w-full input input-bordered" />
							</div>
							<div class="flex flex-col items-center mb-4 sm:flex-row">
								<input type="text" placeholder="شماره تلفن" class="w-full mb-4 sm:mb-0 sm:ml-4 form-control input input-bordered" />
								<input type="text" placeholder="ایمیل" class="w-full input input-bordered" />
							</div>
							<div class="flex flex-col justify-center w-full mb-4 sm:items-center sm:flex-row">
								<select class="mb-4 sm:flex-1 sm:mb-0 sm:ml-auto select select-bordered">
									<option disabled="disabled" class="text-slate-500" selected="selected">مقطع تحصیلی</option>
									<option>دیپلم</option>
									<option>کاردانی</option>
									<option>کارشناسی</option>
								</select>
								<input type="text" placeholder="رشته تحصیلی" class="mb-4 sm:flex-1 sm:mb-0 sm:mx-4 input input-bordered" />
								<input type="text" placeholder="تاریخ تولد" class="sm:flex-1 sm:mr-auto input input-bordered date-picker" />
								<date-picker simple custom-input=".date-picker"></date-picker>
							</div>
							<textarea class="w-full textarea textarea-bordered min-h-[100px]" placeholder="آدرس"></textarea>
						</form>
					</div>
				</div>
			</div>
		</div>
	</base-slide>
</template>
