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
    },
    /**
     * 
     */
    name() {
      
    }
  }

}

</script>

<template>
  <alapanyaginput/>
  <alapanyaglist/>
</template>

<style scoped></style>
