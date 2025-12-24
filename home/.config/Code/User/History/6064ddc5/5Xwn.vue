<script>

import alapanyaginput from './components/alapanyaginput.vue';
import alapanyaglist from './components/alapanyaglist.vue';

export default{
  components:{
    alapanyaginput,
    alapanyaglist
  },
  data(){
    return{
      alapanyagok:[],
    }
  },
  methods:{
    

  }
}

</script>

<template>
  <alapanyaginput @add-alapanyag="alapanyagok.push($event)" />
  <alapanyaglist :alapanyagok="alapanyagok"/>
  
</template>

<style scoped></style>
