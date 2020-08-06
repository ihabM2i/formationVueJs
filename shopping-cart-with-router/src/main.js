// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from "./Tools/Router"
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.filter('money', function(value) {
  if(!value) {
    return ''
  }
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value)
})
new Vue({
  el: '#app',
  components: { App },
  router:router,
  template: '<App/>'
})
