<script>
import voteinput from './components/voteinput.vue'

export default{
  components:{
    voteinput,
  },
          vote:{
            "gryffindor":0,
            "hufflepuff":0,
            "ravenclaw":0,
            "slytherin":0
        },
        methods:{
          vote(house){
            this.vote[house] +=1;
          }
        }
}
</script>

<template>
  <div id="container">
    <voteinput :vote="vote"/>
  </div>  

  <p>{{ vote }}</p>
</template>

<style scoped></style>
