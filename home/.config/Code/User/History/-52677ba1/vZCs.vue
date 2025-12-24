<script>
    export default {
        data(){
            return {
                movie:{
                    title: "",
                    rating: 0

                }
            }
        }
    }
    methods: {
        addMovie(){
            this.$refs
        }
    }

</script>

<template>

    <input type="text" v-model="movie.title">
    <input type="number" v-model="movie.rating">
    <input type="button">
</template>

<style scoped></style>