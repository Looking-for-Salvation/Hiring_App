export default {
	namespaced: true,
	state() {
		return {
			questions: [
				{
					id: 1,
					title: "من کی هستم؟",
					description: "من منم",
					characterLimit: "short",
					type: "text",
				},
			],
		};
	},
	mutations: {},
	getters: {
		questions(state) {
			return state.questions;
		},
	},
	actions: {},
};
