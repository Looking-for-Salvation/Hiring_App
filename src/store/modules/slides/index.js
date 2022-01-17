export default {
	namespaced: true,
	state() {
		return {
			currentSlideId: 1,
			slidesCount: 99,
			nextSlideAvailability: false,
		};
	},
	mutations: {
		nextSlide(state) {
			state.currentSlideId++;
		},
		prevSlide(state) {
			state.currentSlideId--;
		},
		nextSlideAvailable(state) {
			state.nextSlideAvailability = true;
		},
		nextSlideUnavailable(state) {
			state.nextSlideAvailability = false;
		},
	},
	getters: {
		currentSlideId(state) {
			return state.currentSlideId;
		},
		slidesCount(state) {
			return state.slidesCount;
		},
		nextSlideAvailability(state) {
			return state.nextSlideAvailability;
		},
	},
	actions: {
		nextSlide({ commit }) {
			commit("nextSlide");
		},
		prevSlide({ commit }) {
			commit("prevSlide");
		},
		nextSlideAvailable({ commit }) {
			commit("nextSlideAvailable");
		},
		nextSlideUnavailable({ commit }) {
			commit("nextSlideUnavailable");
		},
	},
};
