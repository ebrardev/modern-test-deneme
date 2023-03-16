import  {render,screen} from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import  {Button}  from "./button";

// function fakeFunction() {

// }
const fakeFunction = jest.fn();
describe("<Button/>",  () => {
    it("should render the component",async () => {
        const user= userEvent.setup();
        render(<Button onClick={fakeFunction}>Click me</Button>);
        const buttonElement = screen.getByRole("button", { name: 'Click me' });
     await   user.click(buttonElement);
       expect(fakeFunction).toBeCalled();
     
    });

});