import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockPokemon } from '../../mocks/mockPokemon';

import { Search } from './';

describe('<Search />', () => {
  it('should render successfully', () => {
    render(<Search />);

    expect(screen.getByPlaceholderText(/busque seu pokémon/i)).toBeInTheDocument();
  });

  it('should search pokemon successfully', () => {
    const pokemons: any = [];
    pokemons.push({ pokemon: mockPokemon });
    sessionStorage.setItem('POKEMONS', JSON.stringify(pokemons));

    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/busque seu pokémon/i), {
      target: { value: 'Char' },
    });

    expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
  });
});
