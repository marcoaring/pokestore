import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PokedexContext } from '../../hooks/pokedex';
import { mockPokemon } from '../../mocks/mockPokemon';

import { Header } from './';

describe('<Header />', () => {
  afterEach(cleanup);
  it('should render successfully', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('img', {
        name: /logo pokestore/i,
      })
    ).toBeInTheDocument();
  });

  it('should render pokedex successfully', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/0/i));

    expect(screen.getByText(/Sua Pokedex está vazia/i)).toBeInTheDocument();
  });

  it('should render pokedex with pokemon successfully', () => {
    const MockFunc = jest.fn();
    const pokedex: any = [];
    pokedex.push(mockPokemon);

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
          <Header />
        </PokedexContext.Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/1/i));

    expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
  });
});
