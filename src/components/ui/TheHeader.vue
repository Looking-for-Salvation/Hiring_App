<template>
	<nav class="h-16 py-4 shadow-lg section">
		<div class="relative flex justify-between items-center h-full max-w-[1500px] mx-auto">
			<div id="header-logo" class="flex mr-4 xl:mr-4 xl:w-1/4">
				<router-link :to="{ name: 'Home' }" class="inline-block leading-none cursor-pointer">تیم رای</router-link>
			</div>
			<div class="relative hidden md:block xl:w-1/4">
				<div class="flex items-center justify-end">
					<router-link to="/" class="block md:px-3 xl:px-7">درباره ما</router-link>
					<router-link to="/" class="block md:px-3 xl:px-7">پشتیبانی</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>
