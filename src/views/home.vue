<template>
  <h1>Rick And Morty Trivia</h1>
  <Image :number="200"/>
  <options :listCharacters="listOptions" @select="listeEventSelect"/>
</template>

<script>
import Image from '../components/Image.vue'
import Options from '../components/Options.vue'

import getCharacteres from '../helpers/getInformation.js'

export default {
    components : {
        Image,
        Options
    },
    data(){
        return {
            listOptions : [],
            answer : Object,
        }
    }, 
    methods : {
        async getFourCharacters (){
            this.listOptions = await getCharacteres()

            const number = Math.floor( Math.random() * 5)

            this.answer = this.listOptions[number]
            console.log(this.answer.caracter.name);
            console.log(this.listOptions);
        },
        listeEventSelect(id){
            if (this.answer.caracter.id == id){
                console.log('Correcto!');
            }else {
                console.log('Incorrecto :(');
            }
        }
    },
    mounted(){
        this.getFourCharacters()
    }

}
</script>

<style>

</style>