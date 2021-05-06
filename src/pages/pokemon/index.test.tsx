import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockFromApi } from '../../mocks/mockPokemon';

import PokemonPage from './';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    name: mockFromApi.name,
  }),
}));

jest.mock('../../services/fetch', () => ({
  ...jest.requireActual('../../services/fetch'),
  getPokemon: () =>
    new Promise((resolve, reject) => {
      try {
        resolve(mockFromApi);
      } catch (e) {
        reject(e);
      }
    }),
}));

describe('<PokemonPage />', () => {
  it('should render successfully', async () => {
    await waitFor(() =>
      render(
        <MemoryRouter>
          <PokemonPage />
        </MemoryRouter>
      )
    );

    expect(
      screen.getByRole('heading', {
        name: /charmander/i,
      })
    ).toBeInTheDocument();
  });

  it('should add to pokedex successfully', async () => {
    await waitFor(() =>
      render(
        <MemoryRouter>
          <PokemonPage />
        </MemoryRouter>
      )
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /adicionar na pokedex/i,
      })
    );

    expect(
      screen.getByRole('button', {
        name: /continuar caçada/i,
      })
    ).toBeInTheDocument();
  });
});
