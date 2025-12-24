<script>

import Movieinput from './components/Movieinput.vue'
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    Movieinput,
    MovieList
  }
}


</script>

<template>
  <div id="app">
    <Movieinput />
    <MovieList />
  </div>

</template>