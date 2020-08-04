<template>
  <div>
    <!-- <form v-on:submit.prevent="validTodo">
        <div><input type="text" v-model="tmpTodo" /></div>
        <div><button type="submit">Valider</button></div>
    </form> -->
    <FormTodo v-on:addtodo="validTodo"/>
    <h1>Liste Todos</h1>
    <Todo v-for="t in todos" :key="t" :content="t" />
  </div>
</template>

<script>
import Todo from "./Todo"
import FormTodo from "./FormTodo"
export default {
  name: "ListToDos",
  components : {Todo, FormTodo},
  data : function() {
      return {
          todos : [],
        //   tmpTodo : ''
      }
  },
  methods: {
      validTodo(todo) {
          this.todos = [...this.todos,todo]
      }
  }
};
</script>
<style>
</style>