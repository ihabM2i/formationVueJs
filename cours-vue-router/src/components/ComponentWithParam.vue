<template>
    <div>
        <h1>Value of param {{param}}</h1>
    </div>
</template>
<script>
export default {
    name : "ComponentWithParam",
    computed : {
        param : function() {
            return this.$route.params.id
        }
    }
}
</script>