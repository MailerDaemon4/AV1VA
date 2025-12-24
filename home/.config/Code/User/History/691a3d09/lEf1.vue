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
            {{ alapanyag.nev }} - {{ alapanyag.kategoria }} - {{ alapanyag.lejaratiido }} - {{ alapanyag.mennyiseg }} <span ></span>
        </li>
    </ul>


</template>

<style scoped></style>