<script>
    export default{
        props:{
            todos : "",
        },
        methods:{
            done(index){
                this.todos[index].done = !this.todos[index].done;
            }
        }
    }
</script>

<template>
    <ul>
        <li v-for="(todo,index) in todos" :key="index">
            <h3>{{todo.title}}</h3>
            <p>{{todo.content}}</p>
            <input type="button" @click="done(index)" :value="todo.done ? 'Undo' : 'Done'"/>
        </li>
    </ul>
</template>

<style scoped></style>
