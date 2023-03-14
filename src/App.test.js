import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App component without crashing', () => {
  render(<App />);
  expect(screen.getByText('Modern Testing')).toBeInTheDocument();

})