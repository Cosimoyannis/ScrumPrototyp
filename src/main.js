import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "@/ui/BaseButton.vue";
import BaseBadge from "@/ui/BaseBadge.vue";
import BaseCard from "@/ui/BaseCard.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-badge", BaseBadge);
app.mount("#app");
