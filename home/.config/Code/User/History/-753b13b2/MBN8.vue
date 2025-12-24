<script>
import voteinput from './components/voteinput.vue'
import votelist from './components/votelist.vue'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

export default{
  components:{
    voteinput,
  }
}
</script>

<template>
  <div id="container">
    <voteinput/>
  </div>  
</template>

<style scoped></style>
