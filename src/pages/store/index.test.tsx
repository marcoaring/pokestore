import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockPokemon } from '../../mocks/mockPokemon';

import StorePage from './';

const pokemons: any = [];
pokemons.push(mockPokemon);

jest.mock('../../services/fetch', () => ({
  ...jest.requireActual('../../services/fetch'),
  getPokemons: () =>
    new Promise((resolve, reject) => {
      try {
        resolve(pokemons);
      } catch (e) {
        reject(e);
      }
    }),
}));

describe('<StorePage />', () => {
  it('should render successfully', async () => {
    await waitFor(() =>
      render(
        <MemoryRouter>
          <StorePage />
        </MemoryRouter>
      )
    );

    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
  });
});
