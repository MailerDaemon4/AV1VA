<script>
import ItemInput from './components/ItemInput.vue';
import ItemList from './components/ItemList.vue';

export default{
    components:{
        ItemInput,
        ItemList
    },
    data(){
        return{
            students:[]
        }
    },
    methods:{
        hozzad(student){
          console.log(student);
          
            this.students.push({...student});
        }
    }
    
}
</script>

<template>
    <ItemInput @adatkuld="hozzad"/>
    <ItemList :students="students"/>
</template>

<style scoped>

</style>
