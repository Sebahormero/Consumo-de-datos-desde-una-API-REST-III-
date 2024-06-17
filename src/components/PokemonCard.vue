<template>
    <div class="pokemon-card">
      <img :src="pokemon.image" :style="imageStyle" alt="Pokémon">
      <div v-if="!isDiscovered">
        <input v-model="guess" @keyup.enter="checkGuess" placeholder="Nombre del Pokémon">
        <button @click="checkGuess">Descubrir</button>
      </div>
      <p v-if="isDiscovered">{{ pokemon.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PokemonCard',
    props: ['pokemon'],
    data() {
      return {
        guess: '',
        isDiscovered: false,
      };
    },
    computed: {
      imageStyle() {
        return this.isDiscovered ? '' : 'filter: blur(5px) grayscale(100%);';
      },
    },
    methods: {
      checkGuess() {
        if (this.guess.toLowerCase() === this.pokemon.name.toLowerCase()) {
          this.isDiscovered = true;
          this.$emit('correct-guess');
        } else {
          alert('Nombre incorrecto');
        }
      },
    },
  };
  </script>
  
  <style>
  .pokemon-card {
    display: inline-block;
    margin: 10px;
    text-align: center;
  }
  </style>
  