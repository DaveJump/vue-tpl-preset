import Vue from 'vue'
import RouterFactory from './router'
import StoreFactory from './store'

export default class App {
  constructor ({
    el = '#app',
    root,
    routes,
    store
  }) {
    this.instance = null
    this.root = root
    this.el = el
    this.router = RouterFactory(routes)
    this.store = StoreFactory(store)
  }

  init () {
    this.instance = new Vue({
      render: h => h(this.root),
      router: this.router,
      store: this.store
    })
    this.instance.$mount(this.el)
  }
}