import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import HiringPage from "@/views/HiringPage.vue";
import IntroPage from "@/views/IntroPage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: "Intro", path: "/", component: IntroPage },
		{ name: "Home", path: "/home", component: HomePage },
		{ name: "Hiring", path: "/hiring", component: HiringPage },
	],
});

export default router;
