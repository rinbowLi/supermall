import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  getters,
  modules: {},
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})
