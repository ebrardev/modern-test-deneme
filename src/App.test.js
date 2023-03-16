import { render,screen } from "@testing-library/react";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

function TestComponent() {
  const [count, setCount] = useState(0);
  const handleIncrement = () =>  {
    setCount(count + 1);

 
};

const handleCopy = () => {
  window.navigator.clipboard.writeText("count");
};
return (
  <div>
   <input />


  </div>
)
};


test('should select multiple options', async () => {
  const user = userEvent.setup();
  render(<TestComponent />);

 const inputElement = screen.getByRole('textbox');
 await user.type(inputElement, 'Hello World');
  expect(inputElement).toHaveValue('Hello World');
})
