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
        hozzad(){
          console.log(item);
          
            this.students.push({...perso});
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
