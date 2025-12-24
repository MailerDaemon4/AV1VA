<script>
import voteinput from './components/voteinput.vue'

export default {
  components: {
    voteinput,
  },
  vote: {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0
  },
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
</script>

<template>
  <div id="container">
    <voteinput v-on:vote="vote" />
  </div>
</template>

<style scoped></style>
