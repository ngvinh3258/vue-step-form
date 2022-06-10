import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

export default new VueX.Store({
  state: { userData: [] },
  getters: {
    userData: (state) => state.userData,
  },
  mutations: {
    setUserData(state, userdata) {
      state.userData = userdata;
    },
  },
});
