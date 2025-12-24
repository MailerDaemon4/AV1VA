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
      alapanyagok:[]
    }
  },
  methods:{
    add(alapanyag){
      this.alapanyagok.push(alapanyag);
      console.log(this.alapanyagok);
    }
  }
}

</script>

<template>
  <alapanyaginput @add-alapanyag="add"/>
  <alapanyaglist :alapanyagok="alapanyagok" />
</template>

<style scoped></style>
