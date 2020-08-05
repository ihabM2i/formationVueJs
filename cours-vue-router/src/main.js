// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
  //les routes de notre application
  routes: [
    {path : '/', name:'home', component: () => import("./components/Home")},
    {path : '/helloworld', name:'helloworld', component: () => import("./components/HelloWorld")},
    {path : '/param/:id', name:'param', component: () => import("./components/ComponentWithParam")},
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
