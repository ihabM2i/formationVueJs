<template>
  <div class="container">
    <div v-if="loading" class="row align-items-center justify-content-center">
      <img class="col-2" src="./../assets/loader.gif" />
    </div>
    <ListProducts v-else />
  </div>
</template>
<script>
// import {
//   products,
//   searchProducts,
//   getProducts,
// } from "./../services/DataService";
import ListProducts from "./ListProducts";
import Bus from "./../Tools/Bus";
import { updateCart } from "../services/CartService";
export default {
  name: "Home",
  components: {
    ListProducts,
  },
  created: function () {
    Bus.$on("search", (search) => {
      this.search(search);
    });
  },
  data: function () {
    return {
    };
  },
  computed : {
    loading : function() {
      return this.$store.state.loading
    }
  },
  mounted: function () {
    // setTimeout(() => {
    //   this.products = [...products];
    //   this.loading = false;
    // },500);
    // if (this.$route.params.search != undefined) {
    //   this.search(this.$route.params.search);
    // } else {
    //   getProducts()
    //     .then((response) => {
    //       this.products = response.data;
    //     })
    //     .finally(() => {
    //       this.loading = false;
    //     });
    // }

  },
  methods: {
    // search(title) {
    //   this.loading = true;
    //   // this.products = [...searchProduct(title)]
    //   // this.loading = false
    //   if (title != undefined && title != "") {
    //     searchProducts(title)
    //       .then((res) => {
    //         this.products = res.data;
    //       })
    //       .finally(() => {
    //         this.loading = false;
    //       });
    //   } else {
    //     getProducts()
    //       .then((response) => {
    //         this.products = response.data;
    //       })
    //       .finally(() => {
    //         this.loading = false;
    //       });
    //   }
    // },
  },
};
</script>