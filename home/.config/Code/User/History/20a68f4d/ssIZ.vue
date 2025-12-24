<script>
    export default{
        data(){
            return{

            }
        },
        props:{
            students:""
        }
    }
</script>

<template>
    <ul>
       <li v-for="person in students">
            {{person.name}}
            <input type="number" :value="person.point">
       </li> 
    </ul>
    <p v-for="point , index in students">
        {{ point }}, {{ index }}
    </p>
</template>

<style scoped>

</style>