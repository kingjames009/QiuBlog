import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import VueCookies from "vue-cookies";
import { createHead } from "@unhead/vue";

// 挂载状态管理
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
const head = createHead();

app.component(VueQrcode.name, VueQrcode);

app.use(head);
app.use(pinia);
app.use(VueCookies, { expires: "7d" });

//挂载路由
setupRouter(app);
// 挂载app实例
app.mount("#app");
