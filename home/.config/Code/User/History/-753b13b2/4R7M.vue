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
    methods: {
      vote(house) {
        if (house in this.vote) {
          this.vote[house] += 1;
        }
        else {
          console.error("Invalid house:", house);
        }
        console.log(house, "now has", this.vote[house], "votes.");
      }
    }
  }
}
</script>

<template>
  <div id="container">
    <voteinput v-on:vote="vote" />
  </div>
</template>

<style scoped></style>
