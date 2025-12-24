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
        hozzad(item){
          console.log(item);
          
            this.items.push({...item});
        }
    }
    
}
</script>

<template>
    <ItemInput @adatkuld="hozzad"/>
    <ItemList :="items"/>
</template>

<style scoped>

</style>
