<script>
    export default {
        data(){
            return {
                movie:{
                    title: "",
                    rating: ""

                }
            }
        }
    }
    methods: {

    }

</script>

<template>

    <input type="text" v-model="movie.title">
    <input type="number" v-model="movie.rating">
    <input type="button">
</template>

<style scoped></style>