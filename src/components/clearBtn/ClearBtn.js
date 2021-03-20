import React from "react";

// importing styled component from external file
import { ClearEl } from "./ClearBtn.styled";

const ClearBtn = ({ children, handleClear }) => {
  // jsx rendering children and a handleClear function
  return <ClearEl onClick={handleClear}>{children}</ClearEl>;
};

export default ClearBtn;
