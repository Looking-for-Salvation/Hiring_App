import { createStore } from "vuex";

import slidesModule from "./modules/slides/index.js";
import questionsModule from "./modules/questions/index.js";

const store = createStore({
	modules: {
		slides: slidesModule,
		questions: questionsModule,
	},
});

export default store;
