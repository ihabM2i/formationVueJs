<template>
  <div id="app">
    <FormContact v-on:validContact="submitContact" />
    <ListContacts v-on:deleteContact="deleteContact" :contacts="contacts" />
  </div>
</template>

<script>
import FormContact from "./components/FormContact";
import ListContacts from "./components/ListContacts";
export default {
  name: "App",
  data: function () {
    return {
      contacts: [],
    };
  },
  components: {
    FormContact,
    ListContacts,
  },
  methods: {
    submitContact(contact) {
      contact.id =
        this.contacts.length > 0
          ? this.contacts[this.contacts.length - 1].id + 1
          : 1;
      this.contacts = [...this.contacts, contact];
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter((c) => c.id != id);
    },
  },
};
</script>

<style>
</style>
