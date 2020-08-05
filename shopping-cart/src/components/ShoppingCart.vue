<template>
  <div class="container">
    <div class="row border-bottom pb-3">
      <div class="col-4">Shopping cart</div>
      <div class="col-2">Price</div>
      <div class="col-4">Quantity</div>
      <div class="col-2">Total</div>
    </div>
    <ProductShoppingCart v-for="p in cart" :key="p.id" :product="p" />
    <div class="row border-top pt-3">
      <div class="col-3 offset-9">Total : {{total}}€</div>
    </div>
  </div>
</template>
<script>
import ProductShoppingCart from "./ProductShoppingCart"
import Bus from "./../tools/Bus"
export default {
  name: "ShoppingCart",
  data: function () {
    return {
      cart: [],
      total: 0,
    };
  },
  created: function() {
      Bus.$on('addToCart',(product) => {
          const productFounded = this.cart.find(p=>p.id == product.id)
          if(productFounded != undefined) {
              productFounded.qty++
          }
          else {
              this.cart = [...this.cart, {...product, qty:1}]
          }
          this.updateTotal()
      })
  },
  methods : {
      updateTotal() {
          this.total = 0
          this.cart.forEach(p=> {
              this.total += p.price * p.qty
          })
      }
  },
  components: {
    ProductShoppingCart,
  },
};
</script>