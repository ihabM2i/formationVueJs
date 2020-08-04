<template>
  <div class="col">
    <div class="row">
      <div class="col">
        {{contact.name}}
        <i v-on:click="toogle()" class="fas fa-arrow-circle-down"></i>
      </div>
    </div>
    <div class="row" v-if="display">
      <div class="col">{{contact.phone}}</div>
      <div class="col">{{contact.email}}</div>
      <div class="col-1">
        <i class="fas fa-trash" v-on:click="deleteContact"></i>
      </div>
      <div class="col-1">
        <i class="fas fa-edit"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  props: ["contact"],
  data: function () {
    return {
      display: false,
    };
  },
  methods: {
    toogle() {
      this.display = !this.display;
    },
    deleteContact() {
      this.$emit("deleteContact", this.contact.id);
    },
  },
};
</script>
<style>
</style>