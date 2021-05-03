import axios from 'axios';

import { buildPokemon } from './builder';

const urlApi = 'https://pokeapi.co/api/v2/';

export const getPokemons = async (type: string, currentPagination = 1) => {
  const pokemons: any = [];
  const url = `${urlApi}type/${type}`;
  const response = (await axios.get(url)).data.pokemon;
  const pagination = Math.round(response.length / 20);
  let startPokemon = 0;
  let endPokemon = 19;

  if (currentPagination > 1) {
    startPokemon = (currentPagination - 1) * 20;
    endPokemon = startPokemon + 19;
  }

  sessionStorage.setItem('CURRENT_PAGINATION', currentPagination.toString());
  sessionStorage.setItem('PAGINATION', pagination.toString());
  sessionStorage.setItem('POKEMONS', JSON.stringify(response));

  for (let i = startPokemon; i <= endPokemon; i++) {
    try {
      pokemons.push(await getPokemon(response[i].pokemon.name));
    } catch {
      window.location.href = '/error';
    }
  }

  return pokemons;
};

export const getPokemon = (name: string) => {
  const url = `${urlApi}pokemon/${name}`;
  return axios.get(url).then((response) => {
    return buildPokemon(response.data);
  });
};
