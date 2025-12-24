<script>
    export default {
        data(){
            return{
                newtodo:{
                    title:'',
                    content:'',
                    done:false
                }
            }
        },
        methods:{
            addtodo(){
                this.$emit('addtodo',this.newtodo);
                this.newtodo={
                    title:'',
                    content:'',
                    done:false
                }
            }
        }
    }
</script>
    <input type="text" v-model="newtodo.title" placeholder="Title"/>
    <input type="text" v-model="newtodo.content" placeholder="Content"/>
    <button ></button>

<template>


</template>

<style scoped></style>