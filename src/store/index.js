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
  modules: {
    formsModule,
    elementsModule
  }
});
