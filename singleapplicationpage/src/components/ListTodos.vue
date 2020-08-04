<template>
  <div>
    <form v-on:submit.prevent="validTodo">
        <div><input type="text" v-model="tmpTodo" /></div>
        <div><button type="submit">Valider</button></div>
    </form>
    <h1>Liste Todos</h1>
    <Todo v-for="t in todos" :key="t" :content="t" />
  </div>
</template>

<script>
import Todo from "./Todo"
export default {
  name: "ListToDos",
  components : {Todo},
  data : function() {
      return {
          todos : [],
          tmpTodo : ''
      }
  },
  methods: {
      validTodo() {
          this.todos = [...this.todos,this.tmpTodo]
          console.log(this.todos)
      }
  }
};
</script>
<style>
</style>