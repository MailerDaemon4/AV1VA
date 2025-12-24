<script>
export default {
    data() {
        return {
            ujalapanyag: {
                nev: '',
                kategoria: '',
                lejaratiido: '',
                mennyiseg: 0
            }
        }
    },
    methods: {

    }
}

</script>

<template>
    <input type="text" v-model="ujalapanyag.nev" placeholder="Név" />
    <select name="kategoria" id="" v-model="ujalapanyag.kategoria">
        <option value="" disabled selected>Kategória</option>
        <option value="Zöldség">Zöldség</option>
        <option value="Száraz áru">Száraz áru</option>
        <option value="Hús">Hús</option>
        <option value="Tejtermék">Tejtermék</option>
    </select>
    <input type="date" v-model="ujalapanyag.lejaratiido" />
    <input type="number" v-model="ujalapanyag.mennyiseg" placeholder="Mennyiség" />
    <button @click="addmethod">Hozzáadás</button>

</template>

<style scoped></style>