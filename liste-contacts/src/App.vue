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
      if (contact.id == undefined) {
        contact.id =
          this.contacts.length > 0
            ? this.contacts[this.contacts.length - 1].id + 1
            : 1;
        this.contacts = [...this.contacts, contact];
      } else {
        this.contacts.forEach((c) => {
          if (c.id == contact.id) {
            c.name = contact.name;
            c.phone = contact.phone;
            c.email = contact.email;
          }
        });
      }
    },
    deleteContact(id) {
      this.contacts = this.contacts.filter((c) => c.id != id);
    },
    // editContact(id) {
    //   this.tmpEditContact = this.contacts.find((c) => c.id == id)
    // }
  },
};
</script>

<style>
</style>
