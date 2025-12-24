<script>

export default {
    data() {
        return {
            item: {
                name: "",
                purchased: false
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
    <input type="number" value="0"/>
    <input type="button" value="Hozzáadás" @click="hozzaad">
</template>

<style scoped></style>