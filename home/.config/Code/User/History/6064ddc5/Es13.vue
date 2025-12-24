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
    addalapanyag(alapanyag){
      this.alapanyagok.push(alapanyag);
    }

  }
}

</script>

<template>
  <alapanyaginput @add-alapanyag="addalapanyag" />
  <alapanyaglist :alapanyagok="alapanyagok"/>
</template>

<style scoped></style>
