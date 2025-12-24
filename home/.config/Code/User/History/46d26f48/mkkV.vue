<script >
import todoinput from './componets/todoinput.vue';
import todolist from './componets/todolist.vue';

export default {
  components: {
    todoinput,
    todolist
  }
}
</script>

<template>
  <todoinput @addtodo="addtodo"/>
  <todolist/>
</template>

<style scoped></style>
