<template>
  <div class="container">
    <div class="row border-bottom pb-3">
      <div class="col-4">Shopping cart</div>
      <div class="col-2">Price</div>
      <div class="col-4">Quantity</div>
      <div class="col-2">Total</div>
    </div>
    <ShoppingCartProduct v-on:updateproduct="updateProduct" v-on:deleteproduct="deleteFromCart" v-for="p in cart" :key="p.id" :product="p" />
    <div class="row border-top pt-3">
      <div class="col-3 offset-9">Total : {{total}}€</div>
    </div>
  </div>
</template>
<script>
import ShoppingCartProduct from "./ShoppingCartProduct"
import {getCart, updateCart} from "./../services/CartService"
export default {
  name: "ShoppingCart",
  data: function () {
    return {
      cart: [],
      total: 0,
    };
  },
  mounted: function() {
      this.cart = getCart()
      this.updateTotal()
  },
  methods : {
      updateTotal() {
          this.total = 0
          this.cart.forEach(p=> {
              this.total += p.price * p.qty
          })
      },
      deleteFromCart(id) {
          this.cart = this.cart.filter(p=>p.id != id)
          this.updateTotal()
          updateCart(this.cart)
      },
      updateProduct(obj) {
           const productFounded = this.cart.find(p=>p.id == obj.id)
           if(productFounded != undefined) {
               productFounded.qty += obj.qty
               if(productFounded.qty <= 0) {
                   this.cart = this.cart.filter(p => p.id != obj.id)
               }
               this.updateTotal()
               updateCart(this.cart)
           }
           
      }
  },
  components: {
    ShoppingCartProduct,
  },
};
</script>