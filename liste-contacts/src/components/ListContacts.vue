<template>
    <div>
        <h1>Liste contacts</h1>
        <Contact v-for="contact in contacts" :contact="contact" :key="contact.phone" />
    </div>
</template>
<script>
import Contact from "./Contact"

export default {
    name:"ListContact",
    props: ['contacts'],
    components : {
        Contact
    }
}
</script>
<style>

</style>