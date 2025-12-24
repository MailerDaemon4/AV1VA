<script>
    export default {
    
    }
</script>

<template>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col"><button :click="$emit('vote' , '0')" >gryffindor</button></th>
      <th scope="col"><button :click="$emit('vote' , '1')" >hufflepuff</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><button :click="$emit('vote' , '2')" >ravenclaw</button></th>
      <td><button :click="$emit('vote' , '3')" >slytherin</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<style scoped></style>