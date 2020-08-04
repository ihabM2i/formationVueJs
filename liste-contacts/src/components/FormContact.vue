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
  methods: {
    sendForm() {
      this.$emit("validContact", this.contact);
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