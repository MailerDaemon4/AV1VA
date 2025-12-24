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
            <p>{{ movie.title }} - Értékelés: {{ movie.rating }} - <span v-if="movie.seen" style="color: green;">(Látott)</span> <span></span><button> {{ movie.seen ? "Megjelolés nemlatottként" : "Mejelölés latottként" }}</button></p> 
        </li>
    </ul>
</template>

<style scoped></style>