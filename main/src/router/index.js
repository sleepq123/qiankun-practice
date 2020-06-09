import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/*",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to);

  if (to.name === "Login") {
    if (localStorage.getItem("token")) {
      next({ path: "/" });
    } else {
      next();
    }
  } else if (!localStorage.getItem("token")) {
    next({ path: "/login" });
  } else {
    next();
  }
});
export default router;
