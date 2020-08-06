<template>
    <input v-on:keyup="search" class="col-9 form-control" placeholder="Rechercher un produit..." />
</template>
<script>
export default {
    name :"Search",
    methods : {
        search(e) {
            this.$emit("search", e.target.value)
        }
    }
}
</script>