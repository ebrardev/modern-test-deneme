import { waitFor,render,waitForElementToBeRemoved, screen } from '@testing-library/react';
import App from './App';


function TestComponent() {
  return ( 
    <div>
      <p className='primary-text'>tantuni kebab</p>
    </div>
 


  );
}

test('should render the component', () => {
render(<TestComponent/>);
screen.debug();
const element = screen.getByText('tantuni kebab');

expect(element).toBeInTheDocument();
 });