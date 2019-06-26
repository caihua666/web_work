import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
		footHeight: null
  },
  mutations: {
    editFootHeight (state, n) {
      state.footHeight = n
    }
  }
})
