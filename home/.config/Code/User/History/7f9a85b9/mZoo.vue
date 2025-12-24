<script>
    export default{
        data(){
            return{}
        },
        props:{
            movies:"",
        }
    }
</script>

<template>

    <ul>
        <li v-for="movie in movies">
            <p>{{ movie.title }} - Értékelés: {{ movie.rating }} </p>
        </li>
    </ul>
</template>

<style scoped></style>