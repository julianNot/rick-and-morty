<template>
  <ul>
      <li v-for="character in listCharacters" :key="character.id" @click="$emit('select', character.caracter.id)">
        {{character.caracter.name}}
      </li>
  </ul>
</template>

<script>
export default {
  props : {
    listCharacters : {
      type : Array,
      required : true
    }
  }

}
</script>

<style>

</style>