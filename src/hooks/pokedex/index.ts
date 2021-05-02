import { createContext, useContext } from 'react';

export const PokedexContext = createContext({
  count: 0,
  setCount: (val: number) => {},
  total: 0,
  setTotal: (val: number) => {},
  pokedex: [],
  setPokedex: (val: any) => {},
});

export const usePokedex = () => useContext(PokedexContext);
