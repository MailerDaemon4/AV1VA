<script>

export default {
    data() {
        return {
            student: {
                name: "",
                
            }
        }
    },
    methods:{
        hozzaad(){
            this.$refs["inputom"].focus();
            this.$emit("adatkuld",this.item);
            this.item= {
                name: "",
                purchased: false
            }
        }
    },
    emits:["adatkuld"]
    
}

</script>

<template>
    <input type="text" placeholder="Tanulo neve" v-model="item.name" ref="inputom">
    <input type="number" value="0" v-model=""/>
    <input type="button" value="Hozzáadás" @click="hozzaad">
</template>

<style scoped></style>