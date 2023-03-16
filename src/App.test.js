import { render,screen } from "@testing-library/react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
function TestComponent() {
  const [count, setCount] = useState(0);
  const handleIncrement = () =>  {
    setCount(count + 1);

 
};

return (
  <div>
    <h1>{count}</h1>
    <button onClick={handleIncrement}>Increment</button>
  </div>
)
};

it('should increment the count',  async () => {
  const user = userEvent.setup();
  render(<TestComponent />);

   await user.pointer({
    keys: '[MouseLeft]',
    target: screen.getByRole('button',{name:  "Increment" }),


    })
  expect(screen.getByRole('heading')).toHaveTextContent('1'); 
})