import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> 
  <label for="user-name">User name:</label>
  <input type="text" id="user-name" />
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByLabelText('User name:')
  expect(element).toBeInTheDocument();
})
