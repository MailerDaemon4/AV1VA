<script>
  import CardForm from "./components/CardForm.vue";

  export default{
      components:{
        CardForm
      }
  }
</script>

<template>

  <h1 id="title">StudyingCard APP</h1>
  <CardForm />
</template>

<style scoped>
#title{
  color : "black";
  font-size :"30px";
  text-align:"center";
  align-items:"center"
}
</style>
