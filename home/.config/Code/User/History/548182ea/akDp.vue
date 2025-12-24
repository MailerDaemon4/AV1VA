<script>
    export default {
    
    }
</script>

<template>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col"><button :click="$emit('vote' , 'gryffindor')" >gryffindor</button></th>
      <th scope="col"><button :click="$emit('vote' , 'hufflepuff')" >hufflepuff</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><button :click="$emit('vote' , 'ravenclaw')" >ravenclaw</button></th>
      <td><button :click="$emit('vote' , 'slytherin')" >slytherin</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<style scoped></style>