<template>
	<div id="root" class="page xl:flex">
		<div class="w-full xl:flex-1">
			<router-view></router-view>
			<button
				class="absolute px-4 py-2 text-sm transition duration-200 border border-gray-500 border-solid rounded-full bottom-4 md:text-base hover:text-white hover:bg-gray-500 left-4"
			>
				پشتیبانی
			</button>
		</div>
	</div>
</template>
