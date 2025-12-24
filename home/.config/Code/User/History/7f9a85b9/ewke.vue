<script>
    export default{
        data(){
            return{}
        },
        props:{
            movies:"sada"
        }
    }
</script>

<template>

    <ul>
        <li v-for="movie in movies">
            {{ movie.name }}, {{ movie.rating }}

        </li>
    </ul>
</template>

<style scoped></style>