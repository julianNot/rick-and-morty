<template>
  <h1>Rick And Morty Trivia</h1>
  <Image :number="numberImg"/>
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
            numberImg : Number,
        }
    }, 
    methods : {
        async getFourCharacters (){
            this.listOptions = await getCharacteres()

            const number = Math.floor( Math.random() * 5)

            this.answer = this.listOptions[number]

            this.numberImg = this.answer.caracter.id

            console.log(this.answer.caracter.name);
        },
        listeEventSelect(id){
            if (this.answer.caracter.id == id){
                console.log('Correcto!');
                alert('Correcto')
            }else {
                console.log('Incorrecto :(');
                alert('Incorrecto :/')
            }
            
            this.nextCharacter()
        },
        async nextCharacter(){
            this.message = null
            await this.getFourCharacters()
        }
    },
    mounted(){
        this.getFourCharacters()
    }

}
</script>

<style>

</style>