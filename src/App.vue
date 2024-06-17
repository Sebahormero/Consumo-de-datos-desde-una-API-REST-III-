<template>
  <div id="app">
    <h1>Pokémon Guessing Game</h1>
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from './components/PokemonList.vue';

export default {
  name: 'App',
  components: {
    PokemonList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

