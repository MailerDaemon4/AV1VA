<script>
  export default{
    data(){
      newcard:{
        question: "",
        answer: ""
      }
    }
  }
</script>
<template>
  <div id="cardform">
    <h1 id="cardtitle">Add new card</h1>
    <div class="form-group mb-3">
      <label for="name" class="control-label">Line Height</label>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>
    <div class="form-group mb-3">
      <label for="name" class="control-label">Line Height</label>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>
  </div>
</template>

<style scoped>
#cardform {
  border-color: grey;
  border-width: 2px;
  border-radius: 0px;
  border-style: solid;
  padding: 20px;
  margin: 15px;

}

#cardtitle {
  color: black;
  font-size: 20;
}
</style>
