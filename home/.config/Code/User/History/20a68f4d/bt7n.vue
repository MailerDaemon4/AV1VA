<script>
    export default{
        data(){
            return{
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    
                }

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