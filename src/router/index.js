import { createRouter, createWebHistory } from "vue-router";
import CompleteView from "../views/CompleteView.vue";
import GameView from "../views/GameView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/game",
      name: "game",
      component: GameView,
    },
    {
      path: "/complete",
      name: "complete",
      component: CompleteView,
    },
  ],
});

export default router;
