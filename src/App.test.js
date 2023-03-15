import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> 

  <p data-testid="ilkkan">Modern Testing</p>
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByTestId('ilkkan')
  expect(element).toBeInTheDocument();
})
