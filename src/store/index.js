import Vue from 'vue'
import Vuex from 'vuex'
import { main } from './main/main'
import { template } from './template/template'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    template,
  },
});