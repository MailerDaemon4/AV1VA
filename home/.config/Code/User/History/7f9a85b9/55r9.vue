<script>
    export default{
        data(){
            return{}
        },
        props:{
            movies:"",
        },
        methods:{

        }
    }
</script>

<template>

    <ul>
        <li v-for="movie , index in movies">
            <p>{{ movie.title }} - Értékelés: {{ movie.rating }} -( {{ movies.seen }} ) </p>
        </li>
    </ul>
</template>

<style scoped></style>