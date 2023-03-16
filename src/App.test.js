import { render,renderHook,screen,act } from "@testing-library/react";
import { useState } from "react";
import  userEvent from "@testing-library/user-event";


function useCustomHook() {
  const [name, setName] = useState("John");

  const changeName = (newName) => {
    setName(newName)
};
return {name,changeName}
};

function TestComponent() {
 
 


return (
  <div>
  
  <p> modern testing</p>

  </div>
)
};


it("should render the component",  async() => {
  const {result} = renderHook(useCustomHook)

 expect(result.current.name).toBe("John")

  act(()=>{
  result.current.changeName("Jane")
 })

 expect(result.current.name).toBe("Jane")
})
  