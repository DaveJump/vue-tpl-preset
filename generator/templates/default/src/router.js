import Vue from 'vue'
import VueRouter from 'vue-router'

const RouterFactory = (routes, store) => {
  Vue.use(VueRouter)
  
  const router = new VueRouter({
    mode: 'hash',
    routes,
    caseSensitive: true
  })

  return router
}

export default RouterFactory
