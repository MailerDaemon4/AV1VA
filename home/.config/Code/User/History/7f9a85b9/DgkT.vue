<script>
    export default{
        data(){
            return{}
        },
        props:{
            movies:"",
        },
        /**
         * 
         */
        name() {
            
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