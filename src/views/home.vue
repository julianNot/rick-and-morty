<template>
  <h1>Rick And Morty Trivia</h1>
  <Image :number="200"/>
  <options />
</template>

<script>
import Image from '../components/Image.vue'
import Options from '../components/Options.vue'

import getCharacters from '../helpers/getInformation.js'
console.log( getCharacters() )

export default {
    components : {
        Image,
        Options
    },
    data(){
        return {
            listOptions : []
        }
    },

}
</script>

<style>

</style>