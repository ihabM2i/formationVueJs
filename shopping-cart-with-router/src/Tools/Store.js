import Vue from "vue"
import Vuex from "vuex"
import { getProduct, getProducts, searchProducts } from "./../services/DataService"
import { getCart, addProductToCart, updateCart } from "./../services/CartService"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: getCart(),
        product: {},
        loading: false,
    },
    getters: {
        numberProducts: (state) => {
            let total = 0
            state.cart.forEach(element => {
                total += element.qty
            });
            return total
        },
        totalCart: (state) => {
            let total = 0
            state.cart.forEach(p => {
                total += p.price * p.qty
            })
            return total
        },
        loading : (state) => {
            return state.loading
        }
    },
    mutations: {
        addProductToCart(state, product) {
            addProductToCart(product)
            state.cart = getCart()
        },
        updateQty(state, data) {
            const productFounded = state.cart.find(p => p.id == data.id)
            if (productFounded != undefined) {
                productFounded.qty += data.qty
                if (productFounded.qty <= 0) {
                    state.cart = state.cart.filter(p => p.id != data.id)
                }
                updateCart(state.cart)
            }
        },
        deleteProductFromCart(state, id) {
            state.cart = state.cart.filter(p => p.id != id)
            updateCart(state.cart)
        },
        getProducts(state, products) {
            state.products = products
            state.loading = false
        },
        getProduct(state, product) {
            state.product = product
        },
        updateLoading(state, loading) {
            state.loading = loading
        }
    },
    actions: {
        actionGetProducts({ commit }, search = undefined) {
            //commit('updateLoading', true)
            if (search == undefined) {
                getProducts().then((res) => {
                    commit('getProducts', res.data)
                }).finally(() => {
                    commit('updateLoading', false)
                })
            }
            else {
                searchProducts(search).then((res) => {
                    commit('getProducts', res.data)
                }).finally(() => {
                    commit('updateLoading', false)
                })
            }
        },
        actionGetProduct({ commit }, id) {
            commit('updateLoading', true)
            getProduct(id).then(res => {
                commit('getProduct', res.data)
            }).finally(() => {
                commit('updateLoading', false)
            })
        }
    }
})