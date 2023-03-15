import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> <button>Click Me</button>
        <h1>ebrarmeaag</h1>
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByRole('button')
  expect(element).toBeInTheDocument();
})
test (" should render the h1 correctly",()=>{
  render(<TestComponent/>)
  const element = screen.getByRole('heading',{
    name:"ebrarmeaag",
  })
  expect(element).toBeInTheDocument();
})