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
    <h1>{count}</h1>
    <button onClick={handleCopy}>Copy</button>
     <input type="text" value={count} onChange={handleIncrement} />
  </div>
)
};

// it('should increment the count',  async () => {
//   const user = userEvent.setup();
//   render(<TestComponent />);
//   const buttonElement = screen.getByRole('button'); 

//  const headingElement = screen.getByRole('heading');
//   await user.keyboard('[tab]');
//   await user.keyboard('[Enter]');
//  expect(buttonElement).toHaveFocus();
//  expect(headingElement).toHaveTextContent('1');
// })

it('should increment the count',  async () => {
  const user = userEvent.setup();
  render(<TestComponent />);

  const inputElement = screen.getByRole('textbox');
  await user.keyboard('[tab]');
 await user.keyboard('[Enter]');
//  await user.keyboard('[tab]');   
    // inputElement.focus();
 inputElement.focus();
 await user.paste();

 expect(inputElement).toHaveValue("count")
})