<template>
  <img :src="getUrlImage()" alt="character">
</template>

<script>
export default {
    props : {
        number : {
            type : Number,
            required : true
        }
    },
    methods : {
        getUrlImage(){
            return `https://rickandmortyapi.com/api/character/avatar/${this.number}.jpeg`
        }
    }
}
</script>

<style>

</style>