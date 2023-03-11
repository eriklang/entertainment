import { createRouter, createWebHashHistory } from "vue-router";
import MovieView from "../views/MovieView.vue";
import MovieSearch from "../components/movie/search.vue";
import MovieDetail from "../components/movie/detail.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "HomeView",
  },
  {
    path: "/movie",
    component: MovieView,
    children: [
      { path: "search", name: "MovieSearch", component: MovieSearch },
      { path: "detail/:id", name: "MovieDetail", component: MovieDetail },
    ],
  },
];

const router = createRouter({
  base: process.env.BASE_URL,
  history: createWebHashHistory(),
  routes,
});

export default router;
