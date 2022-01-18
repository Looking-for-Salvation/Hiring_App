<template>
	<div class="flex-1 w-full md:px-10">
		<div class="flex items-center h-full md:px-10">
			<div class="container w-full mx-auto">
				<div class="flex flex-col items-center max-w-xl mx-auto">
					<h3 class="mb-16 text-lg text-center md:text-2xl">{{ questionData.title }}</h3>
					<div v-if="isText">
						<input v-if="questionData.characterLimit === 'short'" type="text" maxlength="30" class="w-full mb-4 input input-bordered" />
						<textarea
							v-if="questionData.characterLimit === 'medium'"
							maxlength="200"
							class="w-full mb-4 min-h-[120px] textarea textarea-bordered"
						></textarea>
						<textarea v-if="questionData.characterLimit === 'long'" class="w-full min-h-[160px] mb-4 textarea textarea-bordered"></textarea>
						<h6 class="w-full md:w-[85%] mx-auto text-sm text-black"><strong>راهنما:</strong> {{ questionData.description }}</h6>
					</div>
					<div v-if="isBoolean">
						<div class="flex items-center justify-center mb-8">
							<div class="flex-row form-control">
								<label class="cursor-pointer label">
									<span class="mx-2">بله</span>
									<input type="radio" class="radio" value="yes" :name="questionData.title" />
								</label>
							</div>
							<div class="flex-row form-control">
								<label class="cursor-pointer label">
									<span class="mx-2">خیر</span>
									<input type="radio" class="radio" value="no" :name="questionData.title" />
								</label>
							</div>
						</div>
						<h6 class="w-full md:w-[85%] mx-auto text-sm text-black"><strong>راهنما:</strong> {{ questionData.description }}</h6>
					</div>
					<div v-if="isHybrid"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

export default {
	props: {
		questionData: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const isText = computed(() => {
			if (props.questionData.type === "text") return true;
			else return false;
		});

		const isBoolean = computed(() => {
			if (props.questionData.type === "boolean") return true;
			else return false;
		});

		const isHybrid = computed(() => {
			if (props.questionData.type === "text_boolean") return true;
			else return false;
		});

		return { isText, isBoolean, isHybrid };
	},
};
</script>

<style scoped>
.input:focus,
.select:focus,
.textarea:focus {
	box-shadow: none;
}

textarea {
	resize: none;
}

.input-bordered:focus,
.textarea-bordered:focus,
.select-bordered:focus {
	--tw-border-opacity: 0.75;
}
</style>
