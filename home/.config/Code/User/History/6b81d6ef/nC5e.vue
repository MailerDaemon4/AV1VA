<script>
export default {
    data(){
        return{
            ujalapanya:{
                nev:'',
                kategoria:'',
                lejaratiido:'',
                mennyiseg:''
            }
        }
    },
}
</script>

<template>
    <input type="text" v-model="ujalapanya.nev" placeholder="Név"/>
    <input type="text" v-model="ujalapanya.kategoria" placeholder="Kategória"/>
    <input type="date" v-model="ujalapanya.lejar

</template>

<style scoped></style>