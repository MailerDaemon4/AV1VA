<script >
import todoinput from './componets/todoinput.vue';
import todolist from './componets/todolist.vue';

export default {
  components: {
    todoinput,
    todolist
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addtodo(newtodo) {
      this.todos.push({ ...newtodo });
    }
  }
}
</script>

<template>
  <todoinput @addtodo="addtodo"/>
  <todolist :todos="todos"/>
</template>

<style scoped></style>
