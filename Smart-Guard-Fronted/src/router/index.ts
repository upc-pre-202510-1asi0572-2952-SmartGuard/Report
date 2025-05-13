import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../components/shared/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import ConfigurationView from "../views/ConfigurationView.vue";
import StadisticView from "../views/StadisticView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "login", component: LoginView },
    { path: "/configuration", name: "configuration", component: ConfigurationView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/home", name: "home", component: HomeView },
    { path: "/stadisticas", name: "stadisticas", component: StadisticView },
  ]

});

export default router;