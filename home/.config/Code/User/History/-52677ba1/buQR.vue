<script>
    export default {
        data(){
            return {
                item:{
                    name: "",
                    rating: ""

                }
            }
        }
    }
    methods: {
        
    }

</script>

<template>

    <input type="text" v-model="item.name">
    <input type="number" v-model="item.rating">
    <input type="button">
</template>

<style scoped></style>