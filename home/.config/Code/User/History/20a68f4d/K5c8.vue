<script>
    export default{
        data(){
            return{
                for

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
</template>

<style scoped>

</style>