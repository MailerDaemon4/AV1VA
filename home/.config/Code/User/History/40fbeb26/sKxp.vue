<script>
export default {
    data(){
        return{
            newTodo:{
                title:'',
                content:'',
                completed:false
            },
        }
    }
}</script>

<template>
    <input type="text" v-model="newTodo.title" placeholder="Title" ref="text" >
    <input type="text" v-model="newTodo.content" placeholder="Content">
    <button @click="$emit('add-todo', newTodo); newTodo.title='
</template>

<style scoped></style>