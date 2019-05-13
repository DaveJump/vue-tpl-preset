import Vue from 'vue'
import Vuex from 'vuex'

const StoreFactory = store => {
  Vue.use(Vuex)
  
  const { state, mutations, actions } = store

  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default StoreFactory

