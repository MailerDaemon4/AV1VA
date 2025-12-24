<script>

</script>
<template>
<div id="cardform">
<h1 id="cardtitle">Add new card</h1>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>

<label for="question">Question</label><input type="text" id="question" placeholder="Type here...">
</div>
</template>

<style scoped>
#cardform{
    border-color: grey;
    border-width: 2px;
    border-radius: 0px;
    border-style: solid;
    padding: 20px;
    margin: 15px;

}
#cardtitle{
    color: black;
    font-size: 20;
}
</style>
