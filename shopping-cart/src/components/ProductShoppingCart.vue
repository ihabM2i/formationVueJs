<template>
  <div class="row align-items-center">
    <div class="col-4">
      <div class="row align-items-center">
        <div class="col shoppingCartImg">
          <img :src="product.image" />
        </div>
        <div class="col">{{product.title}}</div>
      </div>
    </div>
    <div class="col-2">{{product.price}}€</div>
    <div class="col-4">
      <div class="row">
        <div class="col-2 text-center" v-on:click="updateQty(-1)">-</div>
        <div class="col-4 text-center">{{product.qty}}</div>
        <div class="col-2 text-center" v-on:click="updateQty(1)">+</div>
        <div class="col-4 text-center" v-on:click="removeProduct">remove</div>
      </div>
    </div>
    <div class="col-2">{{total}}</div>
  </div>
</template>
<script>
export default {
  name: "ProductShoppingCart",
  props: ["product"],
  computed: {
    total: function () {
      return this.$props.product.price * this.$props.product.qty;
    },
  },
  methods: {
    removeProduct() {
      this.$emit("deleteproduct", this.$props.product.id);
    },
    updateQty(qty) {
      this.$emit("updateproduct", {id:this.$props.product.id,qty:qty});
    },
  },
};
</script>
<style>
.shoppingCartImg img {
  width: 100%;
}
</style>