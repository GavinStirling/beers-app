import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders containers', () => {
  render(<App />);

  const Nav = screen.getByTestId("nav");
  const Home = screen.getByTestId("home");

  expect(Nav).toBeInTheDocument();
  expect(Home).toBeInTheDocument();
});
