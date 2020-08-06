<template>
    <div>
        <h1>Liste contacts</h1>
        <!-- <Contact v-on:deleteContact="deleteContact" v-for="contact in contacts" :contact="contact" :key="contact.phone" /> -->
        <Contact v-for="contact in contacts" :contact="contact" :key="contact.phone" />
    </div>
</template>
<script>
import Contact from "./Contact"

export default {
    name:"ListContact",
    //props: ['contacts'],
    components : {
        Contact
    },
    data : function() {
        return {
            contacts : []
        }
    },
    mounted : function() {
        console.log(this.$store.state.contacts)
        this.contacts = this.$store.state.contacts
    },
    methods : {
        // deleteContact(id) {
        //     this.$emit('deleteContact',id)
        // }
    }
}
</script>
<style>

</style>