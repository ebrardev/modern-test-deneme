import { render, screen } from '@testing-library/react';
import App from './App';

function TestComponent()  {
  return <> 

<span title='yilmaz' alt='deneme'>deneme</span>
        </>
}

test("should render the element correctly",() =>{
  render (<TestComponent/>)
  const element = screen.getByTitle('yilmaz')
  expect(element).toBeInTheDocument();
})
