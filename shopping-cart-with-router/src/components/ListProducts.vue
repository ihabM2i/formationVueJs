<template>
    <div class="row m-2">
        <Product v-for="p in products" :key="p.id" :product="p" />
    </div>
</template>
<script>
import Product from "./Product"
export default {
    name:"ListProducts",
    components: {
        Product
    },
    // props : ['products']
    mounted : function() {
        this.$store.dispatch('actionGetProducts',undefined)
    },
    computed : {
        products : function() {
            return this.$store.state.products
        }
    }
}
</script>