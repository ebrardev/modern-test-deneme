import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App component without crashing', () => {
  render(<App />);

  const element = screen.getByText('Modern Testing');
  expect(element).toBeInTheDocument();
  // expect(screen.getByText('Modern Testing')).toBeInTheDocument();

})

test('should render button component', () => {
  render(<App />);

  const element = screen.getByText('Click Me');
  expect(element).toBeInTheDocument();
  // expect(screen.getByText('Modern Testing')).toBeInTheDocument();

})