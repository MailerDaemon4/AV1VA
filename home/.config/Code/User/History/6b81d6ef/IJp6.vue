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
    

</template>

<style scoped></style>