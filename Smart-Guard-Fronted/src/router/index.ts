import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../components/shared/HomeView.vue";
import AboutView from "../components/shared/AboutView.vue";
import SplashView from "../components/shared/SplashView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import MembersView from "../views/MembersView.vue";
import MembershipView from "../views/MembershipView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", name: "login", component: LoginView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/home", name: "home", component: HomeView },
    { path: "/splash", name: "Splash", component: SplashView },
    { path: "/profile", name: "Profile", component: ProfileView },
    { path: "/members", name: "Members", component: MembersView },
    { path: "/membership", name: "Membership", component: MembershipView },
  ]

});

export default router;