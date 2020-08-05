<template>
  <div id="app" class="container">
    <ListProducts :products="products" />
    <ShoppingCart />
  </div>
</template>

<script>
import ListProducts from "./components/ListProducts"
import ShoppingCart from "./components/ShoppingCart"

export default {
  name: 'App',
  data : function() {
    return {
      products : [
        {id:1, title : 'product 1', price : 10, image : 'https://picsum.photos/id/238/200/200'},
        {id:2, title : 'product 2', price : 25, image : 'https://picsum.photos/id/239/200/200'},
        {id:3, title : 'product 3', price : 300, image : 'https://picsum.photos/id/240/200/200'},
        {id:4, title : 'product 4', price : 40, image : 'https://picsum.photos/id/241/200/200'},
      ]
    }
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
