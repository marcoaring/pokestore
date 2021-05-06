import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PokedexContext } from '../../hooks/pokedex';
import { mockPokemon, mockNewPokemon } from '../../mocks/mockPokemon';

import { Pokemon } from './';

describe('<Pokemon />', () => {
  const MockFunc = jest.fn();
  const pokedex: any = [];
  pokedex.push(mockPokemon);
  afterEach(cleanup);
  it('should render successfully', () => {
    render(
      <MemoryRouter>
        <PokedexContext.Provider
          value={{
            count: 1,
            setCount: MockFunc,
            total: mockPokemon.price,
            setTotal: MockFunc,
            pokedex: pokedex,
            setPokedex: MockFunc,
          }}>
          <Pokemon pokemon={mockPokemon} />
        </PokedexContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
  });

  it('should add pokemon in pokedex successfully', () => {
    render(
      <MemoryRouter>
        <PokedexContext.Provider
          value={{
            count: 1,
            setCount: MockFunc,
            total: mockPokemon.price,
            setTotal: MockFunc,
            pokedex: pokedex,
            setPokedex: MockFunc,
          }}>
          <Pokemon pokemon={mockPokemon} />
        </PokedexContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /adicionar na pokedex/i,
      })
    );

    expect(screen.getByText(/Charmander capturado com sucesso!/i)).toBeInTheDocument();
  });

  it('should incrise quantity of pokemon in pokedex successfully', () => {
    render(
      <MemoryRouter>
        <PokedexContext.Provider
          value={{
            count: 0,
            setCount: MockFunc,
            total: 0,
            setTotal: MockFunc,
            pokedex: [],
            setPokedex: MockFunc,
          }}>
          <Pokemon pokemon={mockNewPokemon} />
        </PokedexContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /adicionar na pokedex/i,
      })
    );

    expect(screen.getByText(/Pikachu capturado com sucesso!/i)).toBeInTheDocument();
  });
});
