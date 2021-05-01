import axios from 'axios';

import { buildPokemon } from './builder';

const urlApi = 'https://pokeapi.co/api/v2/';

export const getPokemons = async (type: string, currentPagination = 1) => {
  const pokemons: any = [];
  const url = `${urlApi}type/${type}`;
  const response = (await axios.get(url)).data.pokemon;
  const pagination = Math.ceil(response.length / 20);
  let startPokemon = 0;

  if (currentPagination > 1) {
    startPokemon = currentPagination * 20 - 1;
  }

  const endPokemon = startPokemon + 20;

  sessionStorage.setItem('PAGINATION', pagination.toString());
  sessionStorage.setItem('CURRENT_PAGINATION', currentPagination.toString());

  for (let i = startPokemon; i <= endPokemon; i++) {
    pokemons.push(await getPokemon(response[i].pokemon.name));
  }

  return pokemons;
};

export const getPokemon = (name: string) => {
  const url = `${urlApi}pokemon/${name}`;
  return axios.get(url).then((response) => {
    return buildPokemon(response.data);
  });
};
