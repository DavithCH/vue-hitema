import { createRouter, createWebHistory } from "vue-router";
import DemoJwt from "../components/DemoJwt.vue";
import DemoVFor from "../components/DemoVFor.vue";
import Home from "../components/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/demojwt",
      name: "demojwt",
      component: DemoJwt,
    },
    {
      path: "/demovfor",
      name: "demovfor",
      component: DemoVFor,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
  ],
});

export default router;
