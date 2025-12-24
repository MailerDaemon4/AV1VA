<script>
  import CardForm from "./components/CardForm.vue";

  export default{
      components:{
        CardForm
      }
  }
</script>

<template>

  [Vue warn]: Failed to resolve component: CardForm
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. 
  at <App>
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
