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
        addMovie()
        {
            this.$emit('add-movie', this.movie);
            this.movie = { title: "", rating: 0 };
        }
    }

</script>

<template>

    <input type="text" v-model="movie.title">
    <input type="number" v-model="movie.rating">
    <input type="button">
</template>

<style scoped></style>