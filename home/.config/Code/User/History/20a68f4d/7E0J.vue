<script>
    export default{
        data(){
            return{

            }
        },
        props:{
            items:""
        }
    }
</script>

<template>
    <ul>
       <li v-for="item in items">
            {{item.name}}
            <input type="number" :value="items.points">
       </li> 
    </ul>
</template>

<style scoped>

</style>