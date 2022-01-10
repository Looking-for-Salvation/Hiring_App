import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";

import TheHeader from "@/components/ui/TheHeader.vue";
import TheFooter from "@/components/ui/TheFooter.vue";

const app = createApp(App);
app.use(router);
app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);
app.mount("#app");
