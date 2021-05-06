import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ErrorPage from './';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      messsage: 'Classe não existe',
    },
  }),
}));

describe('<ErrorPage />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
