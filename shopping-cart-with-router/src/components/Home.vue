<template>
  <div class="container">
    <div class="row m-2">
      <Search v-on:search="search" />
      <Basket />
    </div>
    <div v-if="loading" class="row align-items-center justify-content-center"><img class="col-2" src="./../assets/loader.gif"  /></div>
    <ListProducts v-else :products="products" />
  </div>
</template>
<script>
import { products, searchProduct } from "./../services/DataService"
import ListProducts from "./ListProducts"
import Search from "./Search"
import Basket from "./Basket"
export default {
  name: "Home",
  components: {
    ListProducts,
    Search,
    Basket
  },
  data: function () {
    return {
      products: [],
      loading: true,
    };
  },
  mounted: function () {
    setTimeout(() => {
      this.products = [...products];
      this.loading = false;
    },500);
  },
  methods : {
    search(title) {
      this.loading = true
      this.products = [...searchProduct(title)]
      this.loading = false
    }
  }
};
</script>