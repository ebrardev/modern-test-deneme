import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> 

  <input placeholder='ula ekrem' type="text" id="user-name" />
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByPlaceholderText('ula ekrem')
  expect(element).toBeInTheDocument();
})
