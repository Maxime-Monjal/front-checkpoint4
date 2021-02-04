import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import Profil from "../view/Profil.vue";
import GoldenBook from "../view/GoldenBook.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profil",
    name: "Profil",
    component: Profil,
  },
  {
    path: "/livre",
    name: "GoldenBook",
    component: GoldenBook,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
