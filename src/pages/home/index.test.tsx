import { render, screen } from '@testing-library/react';
import MainPage from '.';

test('renders learn react link', () => {
  render(<MainPage />);
  const linkElement = screen.getByText(/Sobre/i);
  expect(linkElement).toBeInTheDocument();
});
