import { render,screen } from "@testing-library/react";
import { useState } from "react";
import  userEvent from "@testing-library/user-event";



function wrapperComponent() {
  ({children}) => <div className="wrapper">{children}</div>

}

function TestComponent() {
 
 


return (
  <div>
  
  <p> modern testing</p>

  </div>
)
};


test('should click' , async () => {
  // const user= userEvent.setup();
  render(<TestComponent />, {
    wrapper: wrapperComponent,
  });

 screen.debug();  
})
