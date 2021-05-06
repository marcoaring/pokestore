import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MainPage from './';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<MainPage />', () => {
  it('should render successfully', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('img', {
        name: /pokestore/i,
      })
    ).toBeInTheDocument();
  });

  it('should render magic link successfully', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/link mágico/i));

    expect(
      screen.getByRole('button', {
        name: /água/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /fogo/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /elétrico/i,
      })
    ).toBeInTheDocument();
  });

  it('should render random class redirect successfully', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole('button', {
        name: /iniciar/i,
      })
    );

    expect(mockHistoryPush).toHaveBeenCalledWith('/loja');
  });

  it('should render magic link redirect successfully', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/link mágico/i));

    fireEvent.click(screen.getByRole('button', { name: /água/i }));

    expect(mockHistoryPush).toHaveBeenCalledWith('/loja');

    fireEvent.click(screen.getByRole('button', { name: /fogo/i }));

    expect(mockHistoryPush).toHaveBeenCalledWith('/loja');

    fireEvent.click(screen.getByRole('button', { name: /elétrico/i }));

    expect(mockHistoryPush).toHaveBeenCalledWith('/loja');
  });
});
