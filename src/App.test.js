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
  const {container} = render(<TestComponent/>);
  const element = container.querySelector('.primary-text');
});