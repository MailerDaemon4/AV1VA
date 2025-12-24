<script>
export default {
    data() {
        return {
            movie: {
                title: "",
                rating: 0,
                seen: false,

            }
        }
    },
    methods: {
        if(this.movie.title >= 30){
            addMovie() {
            this.$emit('add-movie', this.movie);
            this.movie = { title: "", rating: 0};
        }
        }
        else{
            alert
        }

    },
    emits: ['add-movie']
}


</script>

<template>

    <input type="text" v-model="movie.title" placeholder="Movie Title">

    <input type="number" v-model="movie.rating">
    <input type="button" @click="addMovie" value="Add Movie">
</template>

<style scoped></style>