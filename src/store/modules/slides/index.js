export default {
	namespaced: true,
	state() {
		return {
			currentSlideId: 1,
			slidesCount: 3,
		};
	},
	mutations: {
		nextSlide(state) {
			state.currentSlideId++;
		},
		prevSlide(state) {
			state.currentSlideId--;
		},
	},
	getters: {
		currentSlideId(state) {
			return state.currentSlideId;
		},
		slidesCount(state) {
			return state.slidesCount;
		},
	},
	actions: {
		nextSlide({ commit }) {
			commit("nextSlide");
		},
		prevSlide({ commit }) {
			commit("prevSlide");
		},
	},
};
