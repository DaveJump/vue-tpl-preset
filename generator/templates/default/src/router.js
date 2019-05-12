import Vue from 'vue'
import VueRouter from 'vue-router'

export default (routes, store) => {
  Vue.use(VueRouter)
  
  const router = new VueRouter({
    mode: 'hash',
    routes,
    caseSensitive: true
  })

  return router
}
