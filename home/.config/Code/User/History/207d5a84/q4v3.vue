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
            items:[]
        }
    },
    methods:{
        hozzad(item){
            this.items.push({...item});
        }
    }
    
}
</script>

<template>
    <ItemInput @adatkuld="hozzad"/>
    <ItemList :items="items"/>
</template>

<style scoped>

</style>
