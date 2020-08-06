import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export const router = new Router({
    routes:[
        {path:'/', component : () => import("./../components/Home")},
        {path:'/Product/:id', component : () => import("./../components/InfoProduct")},
        {path:'/ShoppingCart', component : () => import("./../components/ShoppingCart")},
    ]
}) 