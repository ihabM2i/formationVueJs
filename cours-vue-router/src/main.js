// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from "vue-router"
import HelloWorld from "./components/HelloWorld"
import Home from "./components/Home"
import ComponentWithParam from "./components/ComponentWithParam"
Vue.use(Router)

const router = new Router({
  //les routes de notre application
  routes: [
    {path : '/', name:'home', component: Home},
    {path : '/helloworld', name:'helloworld', component: HelloWorld},
    {path : '/param/:id', name:'param', component: ComponentWithParam},
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
