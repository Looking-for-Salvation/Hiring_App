<template>
	<div class="flex-1 w-full md:px-10">
		<div class="flex items-center h-full md:px-10">
			<div class="container w-full mx-auto">
				<div class="flex flex-col items-center max-w-xl mx-auto">
					<h3 class="mb-20 text-2xl">{{ questionData.title }}</h3>
					<input v-if="questionData.characterLimit === 'short'" type="text" maxlength="30" class="w-full mb-4 input input-bordered" />
					<textarea
						v-if="questionData.characterLimit === 'medium'"
						maxlength="200"
						class="w-full mb-4 min-h-[130px] textarea textarea-bordered"
					></textarea>
					<textarea v-if="questionData.characterLimit === 'long'" class="w-full min-h-[180px] mb-4 textarea textarea-bordered"></textarea>
					<h6 class="w-[85%] mx-auto text-sm text-black"><strong>راهنما:</strong> {{ questionData.description }}</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		questionData: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		console.log(props.questionData);
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
