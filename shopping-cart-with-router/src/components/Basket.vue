<template>
  <div class="col-3" v-on:click="redirectToShoppingCart" :style="{textAlign:'right', cursor : 'pointer'}">
    <span class="nb">{{nbreProduct}}</span>
    <i :style="{fontSize: '40px'}" class="fas fa-shopping-basket"></i>
  </div>
</template>
<script>
import Bus from "./../Tools/Bus";
import { getNumberOfProducts } from "./../services/CartService";
export default {
  name: "Basket",
  data: function () {
    return {
      nbreProduct: 0,
    };
  },
  created: function () {
    Bus.$on("updateNumberProduct", (nb) => {
      this.nbreProduct = nb;
    });
  },
  mounted: function () {
    getNumberOfProducts();
  },
  methods : {
      redirectToShoppingCart() {
          this.$router.push('/ShoppingCart')
      }
  }
};
</script>
<style >
.nb {
  display: block;
  position: absolute;
  background: #cd2127;
  border-radius: 40px;
  width: 29px;
  height: 20px;
  font-size: 13px;
  color: #fff;
  padding-left: 5px;
  padding-right: 5px;
  right: 0;
  text-align: center !important;
}
</style>