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
  const buttonElement = screen.getByRole('button'); 

 const headingElement = screen.getByRole('heading');
  await user.keyboard('[tab]');
  await user.keyboard('[Enter]');
 expect(buttonElement).toHaveFocus();
 expect(headingElement).toHaveTextContent('1');
})