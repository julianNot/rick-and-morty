<template>
  <div class="options-container">
    <ul>
        <li v-for="character in listCharacters" :key="character.id" @click="$emit('select', character.caracter.id)">
          {{character.caracter.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props : {
    listCharacters : {
      type : Array,
      required : true
    },
  },
}
</script>

<style>
ul{
  list-style: none;
}
li{
  margin: 0.3rem;
  padding: 0.3rem;
  background-color: #fefefe;
  border-radius: 5px;
  border: 1px solid #02735E;
  cursor: pointer;
  width: 300px;
}

.options-container{
  display: flex;
  justify-content: center;
}
</style>