import Vue from "vue"
import Router from "vue-router"
import Home from "./../components/Home"
Vue.use(Router)

export const router = new Router({
    routes:[
        {path:'/', name:'home', component : Home},
        {path:'/search/{:search}', name:'homesearch', component : {...Home}},
        {path:'/Product/:id', name:'product', component : () => import("./../components/InfoProduct")},
        {path:'/ShoppingCart', name:'shoppingCart', component : () => import("./../components/ShoppingCart")},
    ]
}) 