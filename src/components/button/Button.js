import React from "react";

// styled component
import { ButtonWrapper } from "./Button.styled";

/*
  function to calc if button is an operator (i.e /, * , + or -) 
  or not (i.e 0-9, . , = ), they are then rendered differently 
  by passing an operator prop that takes in the boolean value 
  returned by this function
*/
const isOperator = (val) => !isNaN(val) || val === "." || val === "=";

function Button({ children, handleClick }) {
  // jsx
  return (
    <ButtonWrapper
      operator={isOperator(children)}
      onClick={() => handleClick(children)}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;
