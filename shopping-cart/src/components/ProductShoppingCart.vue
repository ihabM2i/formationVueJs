<template>
  <div class="row">
      <div class="col-4">
          <div class="row">
              <div class="col shoppingCartImg"><img :src="product.image" /></div>
              <div class="col">{{product.title}}</div>
          </div>
      </div>
      <div class="col-2">
          {{product.price}}€
      </div>
      <div class="col-4">
          <div class="row">
              <div class="col-3 text-center">-</div>
              <div class="col-6 text-center">{{product.qty}}</div>
              <div class="col-3 text-center">+</div>
          </div>
      </div>
      <div class="col-2">
          {{total}}
      </div>
  </div>
</template>
<script>
export default {
  name: "ProductShoppingCart",
  props: ["product"],
  computed : {
      total : function() {
          return this.$props.product.price * this.$props.product.qty
      }
  }
};
</script>
<style>
    .shoppingCartImg img {
        width:100%
    }
</style>