import { render, screen } from '@testing-library/react';
import QuestionPage from './QuestionPage';

test('renders learn react link', () => {
  render(<Wrapper />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
