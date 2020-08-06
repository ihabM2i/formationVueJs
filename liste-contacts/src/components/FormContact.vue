<template>
  <div>
    <form v-on:submit.prevent="sendForm">
      <div class="row m-1">
        <input class="col form-control" v-model="contact.name" placeholder="Nom complet" />
      </div>
      <div class="row m-1">
        <input class="col form-control" v-model="contact.phone" placeholder="Téléphone" />
      </div>
      <div class="row m-1">
        <input class="col form-control" v-model="contact.email" placeholder="Email" />
      </div>
      <div class="row m-1">
        <button class="btn btn-success col form-control" type="submit">Valider</button>
      </div>
    </form>
  </div>
</template>
<script>
import Bus from "./../Bus";
export default {
  name: "FormContact",
  data: function () {
    return {
      contact: {
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  //props:['editContact'],
  //   updated : function() {
  //       if(this.$props.editContact != undefined) {
  //           console.log("updated")
  //           this.contact = {...this.$props.editContact}
  //       }
  //   },
  created: function () {
      Bus.$on('editContact', (contact) => {
          this.contact = {...contact}
      })
  },
  methods: {
    sendForm() {
      //this.$emit("validContact", this.contact);
      //Démarrer une mutation
      //this.$store.commit('addContact', this.contact)
      //Démarrer une action
      this.$store.dispatch('actionAddContact', this.contact)
      this.contact = {
        name: "",
        phone: "",
        email: "",
      };
    },
  },
};
</script>
<style>

</style>