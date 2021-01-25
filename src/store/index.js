import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { formsModule } from "@/store/forms";
import { elementsModule } from "@/store/forms/elements";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    isModalActive: false
  },
  plugins: [vuexLocal.plugin],
  mutations: {
    SET_MODAL_STATE(state, modalState) {
      state.isModalActive = modalState;
    }
  },
  actions: {
    toggleModalState({commit}) {
      commit("SET_MODAL_STATE", !this.state.isModalActive);
    }
  },
  getters: {
    getModalState: state => state.isModalActive
  },
  modules: {
    formsModule,
    elementsModule
  }
});

