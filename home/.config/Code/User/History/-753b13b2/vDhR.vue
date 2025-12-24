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
        if (house== "gryffindor"){ 
          console.log("Gryffindor voted");
          this.vote.gryffindor += 1;
        }
        if (house== "hufflepuff"){ 
          console.log("Hufflepuff voted");
          this.vote.hufflepuff += 1;
        }
        if (house== "ravenclaw"){ 
          console.log("Ravenclaw voted");
          this.vote.ravenclaw += 1;
        }
        if (house== "slytherin"){ 
          console.log("Slytherin voted");
          this.vote.slytherin += 1;
        }
      }
      
  }
}
</script>

<template>
  <voteinput @vote="vote"></voteinput>
</template>

<style scoped></style>
