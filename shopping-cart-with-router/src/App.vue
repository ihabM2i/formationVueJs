<template>
  <div id="app">
    <section class="container">
      <div class="row m-2">
        <!-- <Search v-on:search="search" /> -->
        <Search />
        <Basket />
      </div>
    </section>
    <router-view />
  </div>
</template>

<script>
import Search from "./components/Search"
import Basket from "./components/Basket"
import Bus from "./Tools/Bus"
export default {
  name: "App",
  components : {
    Search,
    Basket
  },
  methods : {
    // search(search) {
    //   Bus.$emit('search', search)
    // }
  }
};
</script>

<style>
</style>
