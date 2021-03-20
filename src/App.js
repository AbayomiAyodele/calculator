import React, { useState } from "react";
import { evaluate } from "mathjs"; //external lib for math logic

import GlobalStyles, { CalcWrapper, Row } from "./globalStyles"; //global styles

// all needed components imported once
import { Button, ClearBtn, Input } from "components";

function App() {
  const [inputStr, setInputStr] = useState("");

  // fn that takes in prev value of state and concatenates the value argument to it
  const addToInput = (val) => setInputStr((prevState) => prevState + val);

  /* 
  fn handling the equal button logic, uses the "evaluate" fn from 
  external math library
  */
  const handleEqual = () => {
    setInputStr((prevState) => evaluate(prevState));
  };

  return (
    // jsx
    <>
      <GlobalStyles />
      <CalcWrapper>
        <Input inputStr={inputStr} />

        <Row>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </Row>
        <Row>
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </Row>
        <Row>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </Row>
        <Row>
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={() => handleEqual()}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </Row>

        <Row>
          <ClearBtn handleClear={() => setInputStr("")}>Clear</ClearBtn>
        </Row>
      </CalcWrapper>
    </>
  );
}

export default App;
