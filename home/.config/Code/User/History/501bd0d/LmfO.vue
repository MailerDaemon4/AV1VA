<script>

import Movieinput from './components/Movieinput.vue'
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    Movieinput,
    MovieList
  },
  data(){
    return{
      movies:[]
    }
  },

  methods:{
    addMovie(movie) {
      this.movies.push({...movie})
    }
  }
}



</script>

<template>
  <div id="app">
    <Movieinput @add-movie="addMovie" />
    <MovieList :movies:"movies"/>
  </div>

</template>