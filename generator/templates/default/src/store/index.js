import Vue from 'vue'
import Vuex from 'vuex'

export default (state, mutations, actions) => {
  Vue.use(Vuex)

  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

