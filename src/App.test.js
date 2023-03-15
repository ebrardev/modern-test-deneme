import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> 

Modern testing
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByText('Modern testing')
  expect(element).toBeInTheDocument();
})
