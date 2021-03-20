import React from "react";

// styled component imported
import { InputEl } from "./Input.styled";

const Input = ({ inputStr }) => {
  // jsx rendering inputStr prop
  return <InputEl>{inputStr}</InputEl>;
};

export default Input;
