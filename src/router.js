import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import HiringPage from "@/views/HiringPage.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: "Home", path: "/", component: HomePage },
		{ name: "Hiring", path: "/hiring", component: HiringPage },
	],
});

export default router;
