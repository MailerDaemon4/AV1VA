<script>
    export default{
        data(){
            return{}
        },
        props:{
            movies:"",
        },
        methods:{
            changeSeen(index){
                this.movies[index].seen = !this.movies[index].seen
            }
        }
    }
</script>

<template>

    <ul>
        <li v-for="movie , index in movies">
            <p>{{ movie.title }} - Értékelés: {{ movie.rating }} - <span v-if="movie.seen" style="color: green;">(Látott)</span> <span v-if="!movie.seen" style="color: red;">(Nem latott)</span><button v-on:click="this.changeSeen(index)"> {{ movie.seen ? "Megjelolés nemlatottként" : "Mejelölés latottként" }}</button></p> 
        </li>
    </ul>
</template>

<style scoped></style>