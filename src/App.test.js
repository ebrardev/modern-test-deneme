import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> 
 Modern test
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByText('modern',{
    exact: false,
  })
  expect(element).toBeInTheDocument();
})
