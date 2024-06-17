import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

export async function getPokemons() {
  const response = await axios.get(API_URL);
  const pokemons = await Promise.all(response.data.results.map(async (pokemon) => {
    const pokemonData = await axios.get(pokemon.url);
    return {
      name: pokemonData.data.name,
      image: pokemonData.data.sprites.front_default,
    };
  }));
  return pokemons;
}

