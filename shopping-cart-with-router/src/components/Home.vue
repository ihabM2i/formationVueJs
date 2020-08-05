<template>
  <div class="container">
    <div v-if="loading" class="row align-items-center justify-content-center"><img class="col-2" src="./../assets/loader.gif"  /></div>
    <ListProducts v-else :products="products" />
  </div>
</template>
<script>
import { products } from "./../services/DataService";
import ListProducts from "./ListProducts";
export default {
  name: "Home",
  components: {
    ListProducts,
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
};
</script>