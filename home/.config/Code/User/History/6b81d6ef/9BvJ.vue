<script>
export default {
    data(){
        return{
            ujalapanyag:{
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
    <input type="text" v-model="ujalapanyag.nev" placeholder="Név"/>
    <select name="kategoria" id="" v-model="ujalapanyag.kategoria">
        <option value="" disabled selected>Kategória</option>
        <option value="Zöldség">Zöldség</option>
        <option value="Gyümölcs">Gyümölcs</option>
        <option value="Hús">Hús</option>
        <option value="Tejtermék">Tejtermék</option>
    </select>

</template>

<style scoped></style>1