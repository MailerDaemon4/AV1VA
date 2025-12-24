<script>
    export default{
        props:{
            newtodo:{
                todos : Array,
            }
        },
        /**
         * 
         */
        name() {
            
        }
    }
</script>

<template>
    <ul>
        <li v-for="(todo,index) in newtodo.todos" :key="index">
            <h3>{{todo.title}}</h3>
            <p>{{todo.content}}</p>
            <input type="button" @click="done(index)">
        </li>
    </ul>
</template>