import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> 

 <input type="text" value="okocha" alt='deneme' placeholder="Enter your name" />
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByAltText('deneme')
  expect(element).toBeInTheDocument();
})
