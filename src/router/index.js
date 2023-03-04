import { createRouter, createWebHashHistory } from "vue-router";
import MoviewView from "../views/MovieView.vue";

const routes = [
  {
    path: "/",
    name: "movie",
    component: MoviewView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  base: process.env.BASE_URL,
  history: createWebHashHistory(),
  routes,
});

export default router;
