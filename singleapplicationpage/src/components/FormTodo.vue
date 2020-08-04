<template>
    <div>
        <form v-on:submit.prevent="sendToDo">
        <div><input type="text" v-model="tmpTodo" /></div>
        <div><button type="submit">Valider</button></div>
    </form>
    </div>
</template>
<script>
export default {
    name : 'FormToDo',
    data : function() {
        return {
            tmpTodo : ''
        }
    },
    methods : {
        sendToDo() {
            this.$emit('addtodo',this.tmpTodo)
        }
    }
}
</script>