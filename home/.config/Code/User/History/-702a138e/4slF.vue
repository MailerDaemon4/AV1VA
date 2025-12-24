<script>
    export default{
        props:{
            newtodo:{
                todos : Array,
            }
        },
    }
</script>

<template>
    <ul>
        <li v-for="(todo,index) in newtodo.todos" :key="index">
            <h3>{{todo.title}}</h3>
            <p>{{todo.content}}</p>
        </li>
    </ul>
</template>