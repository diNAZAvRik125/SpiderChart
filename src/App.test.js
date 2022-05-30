import { render, screen } from '@testing-library/react';
import Page_with_test from './Page_with_test';

test('renders learn react link', () => {
  render(<Page_with_test />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
