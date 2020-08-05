<template>
  <div id="app" class="container">
    <div v-if="loading">Product Loading ...</div>
    <ListProducts v-else :products="products" />
    <ShoppingCart />
  </div>
</template>

<script>
import ListProducts from "./components/ListProducts"
import ShoppingCart from "./components/ShoppingCart"
import {products} from "./services/DataService"
export default {
  name: 'App',
  data : function() {
    return {
      products : [],
      loading : true
    }
  },
  mounted : function() {
    setTimeout(() => {
      this.products = products
      this.loading = false
    },3000)
  },
  components: {
    ListProducts,
    ShoppingCart
  }
}
</script>

<style>
  #app {
    background-color: #fefefe;
  }
</style>
