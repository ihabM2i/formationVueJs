<template>
    <div>
        <h1>Liste contacts</h1>
        <Contact v-on:deleteContact="deleteContact" v-for="contact in contacts" :contact="contact" :key="contact.phone" />
    </div>
</template>
<script>
import Contact from "./Contact"

export default {
    name:"ListContact",
    props: ['contacts'],
    components : {
        Contact
    },
    methods : {
        deleteContact(id) {
            this.$emit('deleteContact',id)
        }
    }
}
</script>
<style>

</style>