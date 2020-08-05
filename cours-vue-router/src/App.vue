<template>
  <div id="app">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/helloworld">hellworld</router-link>
        <router-link to="/param/1">vers param 1</router-link>
        <div v-on:click="redirectToParam(3)">Lien vers param 2</div>
      </nav>
      <div>
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods : {
    redirectToParam(id) {
      //this.$router.push({path : `/param/${id}`})
      this.$router.push({name : 'param', params : {id:id}})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
