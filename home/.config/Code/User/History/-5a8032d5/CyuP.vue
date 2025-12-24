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
    <input type="text" placeholder="Adj hozzá egy elemet" v-model="item.name" ref="inputom">
    <input type="number" placeholder=""/>
    <input type="button" value="Hozzáadás" @click="hozzaad">
</template>

<style scoped></style>