<template>
  <div class="container">
    <div v-if="product == undefined" class="row align-items-center justify-content-center">
      <img class="col-2" src="./../assets/loader.gif" />
    </div>
    <div v-else class="container">
      <div class="row m-2">
        <h1 class="col">{{product.title}}</h1>
      </div>
      <div class="row m-2">
        <img class="col-4" :src="product.image" />
        <div class="col-8">{{product.description}}</div>
      </div>
      <div class="row m-2 align-items-center justify-content-center">
          <button class="col-12 btn btn-danger">Ajouter panier</button>
      </div>
    </div>
  </div>
</template>
<script>
import { getProduct } from "./../services/DataService";
export default {
  name: "InfoProduct",
  data: function () {
    return {
      product: undefined,
    };
  },
  mounted: function () {
    this.product = getProduct(this.$route.params.id);
  },
};
</script>