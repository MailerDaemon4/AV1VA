<script>

export default {
    data() {
        return {
            student: {
                name: "",
                point:0
            }
        }
    },
    methods:{
        hozzaad(){
            this.$refs["inputom"].focus();
            this.$emit("adatkuld",this.student);
            this.student= {
                name: "",
                points: 0
            }
        }
    },
    emits:["adatkuld"]
    
}

</script>

<template>
    <input type="text" placeholder="Tanulo neve" v-model="student.name" ref="inputom">
    <input type="number" value="0" v-model="student.point"/>
    <input type="button" value="Hozzáadás" @click="hozzaad">
</template>

<style scoped></style>