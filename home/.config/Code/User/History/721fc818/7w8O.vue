<script>
  import CardForm from "./components/CardForm.vue";

  export default{
      components:{
        CardForm
      }
  }
</script>

<template>
<div id="titlediv">
   <h1 id="title">Tanulókártya APP</h1>
</div>

 
  <CardForm />
</template>

<style scoped>
#title{
  color : "black";
  font-size :"30px";
  text-align:"center";
  align-items:"center"
}
#titlediv{
  text-align: center;
  justify-content: center;
  margin: 5%;
}
</style>
