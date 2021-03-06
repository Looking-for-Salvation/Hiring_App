import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "@/store/index.js";
import "@/assets/styles/tailwind.css";
import "@/assets/styles/basic.css";

import TheHeader from "@/components/ui/TheHeader.vue";
import TheFooter from "@/components/ui/TheFooter.vue";
import BaseSlide from "@/components/ui/BaseSlide.vue";

import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);
app.component("base-slide", BaseSlide);
app.component("date-picker", Vue3PersianDatetimePicker);
app.mount("#app");
