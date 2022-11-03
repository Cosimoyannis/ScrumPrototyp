import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "@/components/HomeScreen.vue";
import ToDos from "@/pages/ToDos.vue";
import UserNotizen from "@/pages/UserNotizen.vue";
import SprintStatus from "@/pages/SprintStatus.vue";
import ProjectPlan from "@/pages/ProjectPlan.vue";
import OverView from "@/pages/OverView.vue";
import OverView2 from "@/pages/OverView copy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeScreen },
    { path: "/todos", component: ToDos },
    { path: "/notizen", component: UserNotizen },
    { path: "/sprint", component: SprintStatus },
    { path: "/project", component: ProjectPlan },
    { path: "/overview", component: OverView },
    { path: "/overview2", component: OverView2 },
  ],
});

export default router;
