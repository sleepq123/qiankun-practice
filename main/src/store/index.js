import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    changeLoading(state, loading) {
      state.loading = loading;
    }
  }
});

export default store;
