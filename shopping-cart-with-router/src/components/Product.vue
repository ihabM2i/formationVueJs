<template>
  <div class="col-4 product">
    <div class="row" v-on:click="redirectToInfo">
      <img class="col" :src="product.image" />
    </div>
    <div class="row" v-on:click="redirectToInfo">
      <div class="col">
        <div class="row">
          <div class="col title">{{product.title}}</div>
        </div>
        <div class="row">
          <div class="col">{{product.price}}€</div>
        </div>
      </div>
    </div>
    <div class="position-absolute addButton">
      <i v-on:click="addToCart" class="fas fa-plus-circle"></i>
    </div>
  </div>
</template>
<script>
//import Bus from "./../tools/Bus"
export default {
  name: "Product",
  props: ["product"],
  methods : {
      addToCart() {
         // Bus.$emit('addToCart',this.$props.product)
      },
      redirectToInfo() {
          this.$router.push(`/Product/${this.$props.product.id}`)
      }
  }
};
</script>
<style >
.product {
    background-color: white;
}
.addButton {
  bottom: 0;
  font-size: 35px;
  color: pink;
  right: 20px;  
}
.title {
    font-weight: bold;
}
.addButton i {
    background-color: white;
    cursor: pointer;
}
</style>