import { render } from '@testing-library/react';

import { Svgs } from './';

describe('<Svgs />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Svgs />);
    expect(baseElement).toBeTruthy();
  });
});
