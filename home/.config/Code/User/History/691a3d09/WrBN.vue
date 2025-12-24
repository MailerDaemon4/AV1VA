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
            <span :style="{color : alapanyag.used ? gray : bla}">{{ alapanyag.nev }} - {{ alapanyag.kategoria }} <span v-if="alapanyag.info" > - <span :style="{color: new Date(alapanyag.lejaratiido) <= Date.now() ? 'red' : 'black'}">{{ alapanyag.lejaratiido }}</span> - {{ alapanyag.mennyiseg }}</span></span> <button @click="alapanyag.info = !alapanyag.info">Info</button> <button v-if="alapanyag.used" @click="alapanyag.used = !alapanyag.used">Felhasznalt</button> <button v-if="!alapanyag.used" @click="alapanyag.used = !alapanyag.used">Felhasznalatlan</button> <span v-if="alapanyag.mennyiseg == 0">Eből nehéz barmit is csinálni</span> <span v-if="alapanyag.mennyiseg >= 10"> Ne vásárolj feleslegesen</span>
        </li>
    </ul>


</template>

<style scoped></style>