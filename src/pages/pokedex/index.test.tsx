import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { mockPokemon } from '../../mocks/mockPokemon';

import PokedexPage from './';

describe('<PokedexPage />', () => {
  const count = 1;
  const total = mockPokemon.price.toFixed(2);
  const pokedex = [];
  pokedex.push(mockPokemon);

  sessionStorage.setItem('TOTAL', total);
  sessionStorage.setItem('COUNT', count.toString());
  sessionStorage.setItem('POKEDEX', JSON.stringify(pokedex));

  afterEach(cleanup);

  it('should render successfully', () => {
    render(
      <MemoryRouter>
        <PokedexPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        name: /pokedex/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
  });

  it('should change quantity successfully', () => {
    render(
      <MemoryRouter>
        <PokedexPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: '2' },
    });

    expect(screen.getByText(/total: r\$ 41,34/i)).toBeInTheDocument();
  });

  it('should decrease quantity successfully', () => {
    render(
      <MemoryRouter>
        <PokedexPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: '2' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: /\-/i,
      })
    );

    expect(screen.getByText(/total: r\$ 20,67/i)).toBeInTheDocument();
  });

  it('should increase quantity successfully', () => {
    render(
      <MemoryRouter>
        <PokedexPage />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /\+/i,
      })
    );

    expect(screen.getByText(/total: r\$ 41,34/i)).toBeInTheDocument();
  });

  it('should finish successfully', () => {
    render(
      <MemoryRouter>
        <PokedexPage />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /finalizar caçada/i,
      })
    );

    expect(
      screen.getByRole('button', {
        name: /reiniciar caçada/i,
      })
    ).toBeInTheDocument();
  });

  it('should render empty pokedex successfully', () => {
    render(
      <MemoryRouter>
        <PokedexPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByRole('spinbutton'), {
      target: { value: '0' },
    });

    expect(screen.getByText(/sua pokedex está vazia/i)).toBeInTheDocument();
  });
});
