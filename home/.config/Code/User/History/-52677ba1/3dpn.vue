<script>
export default {
    data() {
        return {
            movie: {
                title: "",
                rating: 0

            }
        }
    },
    methods: {
        addMovie() {
            this.$emit('add-movie', this.movie);
            this.movie = { title: "", rating: 0 };
        }

    },
    emits: ['add-movie']
}


</script>

<template>

    <input type="text" v-model="movie.title" placeholder="Movie Title" max="30">

    <input type="number" v-model="movie.rating">
    <input type="button" @click="addMovie" value="Add Movie">
</template>

<style scoped></style>