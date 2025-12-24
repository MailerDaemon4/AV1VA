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
            {{ alapanyag.nev }} - {{ alapanyag.kategoria }} - <span :style="{v-if (condition) {
                
            }}">{{ alapanyag.lejaratiido }}</span> - {{ alapanyag.mennyiseg }} <span v-if="alapanyag.mennyiseg == 0">Eből nehéz barmit is csinálni</span> <span v-if="alapanyag.mennyiseg >= 10"> Ne vásárolj feleslegesen</span>
        </li>
    </ul>


</template>

<style scoped></style>