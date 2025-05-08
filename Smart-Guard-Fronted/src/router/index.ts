import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../components/shared/HomeView.vue";
import AboutView from "../components/shared/AboutView.vue";
import LandingView from "../components/shared/LandingView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "login", component: LoginView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/home", name: "home", component: HomeView },
    { path: "/landing", name: "Landing", component: LandingView },
    { path: "/profile", name: "Profile", component: ProfileView },
  ]

});

export default router;