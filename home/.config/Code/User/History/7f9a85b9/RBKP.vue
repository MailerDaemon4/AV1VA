<script>
    export default{
        data(){
            return{}
        },
        props:{
            movies:""
        }
    }
</script>

<template>

    <ul>
        <li v-for="movie in movies">
            {{ movie.title }}, {{ movie.rating }}
        </li>
    </ul>
</template>

<style scoped></style>