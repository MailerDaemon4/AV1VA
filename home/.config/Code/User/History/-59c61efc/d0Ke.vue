<script>
export default {
  data() {
    return {
      newcard: {
        question: "",
        answer: "",
        level: "",
        islearned: false
      }
    }
  }
}
</script>
<template>
  <div id="cardform">
    <h1 id="cardtitle">Add new card</h1>
    <div class="form-group mb-3">
      <label for="name" class="control-label">Kérdés</label>
      <input v-bind="newcard.question" type="text" class="form-control" placeholder="Username" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>
    <div class="form-group mb-3">
      <label for="name" class="control-label">Válasz</label>
      <input v-bind="newcard.answer" type="text" class="form-control" placeholder="Username" aria-label="Username"
        aria-describedby="basic-addon1">
    </div>
    <div class="form-group mb-3">
      <label for="name" class="control-label">Line Height</label>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
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
