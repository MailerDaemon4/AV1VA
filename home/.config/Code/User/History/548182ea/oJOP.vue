<script>
    export default {
    
    }
</script>

<template>
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col"><button v-on:click="$emit('vote' , 'g')" >gryffindor</button></th>
      <th scope="col"><button>hufflepuff</button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><button>ravenclaw</button></th>
      <td><button>slytherin</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<style scoped></style>