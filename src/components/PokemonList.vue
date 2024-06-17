<template>
    <div>
      <div v-for="pokemon in pokemons" :key="pokemon.name">
        <PokemonCard :pokemon="pokemon" @correct-guess="incrementCounter" />
      </div>
      <p>Pokémons descubiertos: {{ discoveredCount }}</p>
    </div>
  </template>
  
  <script>
  import PokemonCard from './PokemonCard.vue';
  import { getPokemons } from '../services/api';
  
  export default {
    name: 'PokemonList',
    components: {
      PokemonCard,
    },
    data() {
      return {
        pokemons: [],
        discoveredCount: 0,
      };
    },
    methods: {
      incrementCounter() {
        this.discoveredCount++;
      },
    },
    async created() {
      this.pokemons = await getPokemons();
    },
  };
  </script>
  
  