import "@/assets/scss/style.scss";
import "@/assets/scss/style-preset.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createBootstrap } from "bootstrap-vue-next";
import VueApexCharts from "vue3-apexcharts";

import App from "./App.vue";
import router from "./router";

// bootstrap vue next css
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// bootstrap.bundle.js
import "bootstrap/dist/js/bootstrap.bundle.js";

// google-fonts
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(createBootstrap());
app.use(VueApexCharts);
app.mount("#app");
