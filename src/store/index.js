import { createStore } from "vuex";

import slidesModule from "./modules/slides/index.js";

const store = createStore({
	modules: {
		slides: slidesModule,
	},
});

export default store;
