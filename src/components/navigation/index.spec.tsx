import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Navigation } from './';

describe('<Navigation />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <Navigation currentPagination={1} pagination={3} />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
