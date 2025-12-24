<script>

</script>
<template>
<div id="cardform">
<h1 id="cardtitle">Add new card</h1>
<div class="input-group mb-3">
  <Label for="">asd</Label><br>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>


<div class="form-group col-md-4">
        <label for="name" class="control-label">Line Height</label>
        <input type="number" value='' class="form-control" id="lineHeight">
    </div>
    <div class="form-group col-md-4">
        <label for="name" class="control-label">Padding Top</label>
        <input type="number" value='' class="form-control" id="paddingTop" />
    </div>
    <div class="form-group col-md-4">
        <label for="name" class="control-label">Padding Bottom</label>
        <input type="number" value='' class="form-control" id="paddingBottom">
    </div>
</div>



<label for="question">Question</label><input type="text" id="question" placeholder="Type here...">
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
