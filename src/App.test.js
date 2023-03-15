import { render, screen } from '@testing-library/react';
import App from './App';
import { useState,useEffect } from 'react';

function TestComponent()  {
  const [message, setMessage] = useState('Modern Testing')
  useEffect(() => {
    setTimeout(() => {
      setMessage('Modern Testing with React')
    }, 1000)
  }, [])

  return <> 
    <p>{message}</p>
        </>
}

test("should render the element correctly",  () =>{
  render (<TestComponent/>)
  const element =  screen.queryByText('modern')
  expect(element).not.toBeInTheDocument();
})
