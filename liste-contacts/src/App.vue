<template>
  <div id="app">
      <FormContact v-on:validContact="submitContact"/>
      <ListContacts :contacts="contacts" />
  </div>
</template>

<script>
import FormContact from "./components/FormContact"
import ListContacts from "./components/ListContacts"
export default {
  name: 'App',
  data: function() {
    return {
      contacts : []
    }
  },
  components: {
    FormContact,
    ListContacts
  },
  methods : {
    submitContact(contact) {
      this.contacts = [...this.contacts, contact]
    }
  }
}
</script>

<style>

</style>
