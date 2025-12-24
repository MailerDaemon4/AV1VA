<script>
export default {
    props: {
        alapanyagok: ""
    }
}

</script>

<template>
    <ul>
        <li v-for="(alapanyag, index) in alapanyagok" :key="index">
            {{ alapanyag.nev }} - {{ alapanyag.kategoria }} - {{ alapanyag.lejaratiido }} - {{ alapanyag.mennyiseg }} <span v-if="alapanyag.mennyiseg == 0 ?">" Ebbol nehez lesz barmit is fozni" : ""</span>
        </li>
    </ul>


</template>

<style scoped></style>