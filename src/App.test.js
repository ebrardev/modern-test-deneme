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
   <select multiple>

<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
</select>
  </div>
)
};


test('should select multiple options', async () => {
  const user = userEvent.setup();
  render(<TestComponent />);
  const numbers = screen.getByRole('listbox');

  await user.selectOptions(numbers,'1')
  expect(screen.getByRole('option',{name:"1"}).selected).toBe(true);
  expect(screen.getByRole('option',{name:"2"}).selected).toBe(true);
  expect(screen.getByRole('option',{name:"3"}).selected).toBe(false);

  await user.deselectOptions(numbers,'1')
  expect(screen.getByRole('option',{name:"1"}).selected).toBe(false);


})
// it('should increment the count',  async () => {
//   const user = userEvent.setup();
//   render(<TestComponent />);
//   const buttonElement = screen.getByRole('button'); 

//  const headingElement = screen.getByRole('heading');
//   await user.keyboard('[tab]');
//   await user.keyboard('[Enter]');
//  expect(buttonElement).toHaveFocus();
//  expect(headingElement).toHaveTextContent('1');
// 
