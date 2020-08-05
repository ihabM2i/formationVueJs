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
    props : ['products']
}
</script>