import { createStore } from "vuex";
import apiService from "@/apiService";

export default createStore({
  state: {
    drawerOpen: true, // sidebar
    movieSearchResults: [],
  },
  getters: {},
  mutations: {
    changeDrawerOpen(state, payload) {
      state.drawerOpen = payload;
    },
    setMovieSearchResults(state, payload) {
      state.movieSearchResults = payload;
    },
  },
  actions: {
    movieSearch: async (context, payload) => {
      apiService
        .getMovieByTitle(payload, "50", "moviemeter,asc")
        .then((r) => {
          context.commit("setMovieSearchResults", r.data?.results);
        })
        .catch((err) => {
          console.error("error", err);
        })
        .finally(() => {
          // this.loading = false;
        });
    },
  },
  modules: {},
});
