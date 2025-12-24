<script>
import voteinput from './components/voteinput.vue'

export default {
  components: {
    voteinput,
  },
  vote: {
    "gryffindor": 0,
    "hufflepuff": 0,
    "ravenclaw": 0,
    "slytherin": 0
  },
  methods: {
      vote(house) {
          this.vote[house] += 1;
          console.log(house + " voted. Total votes: " + this.vote[house]);
      }
  }
}
</script>

<template>
  <voteinput @vote="vote"></voteinput>
</template>

<style scoped></style>
