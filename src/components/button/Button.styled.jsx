import styled from "styled-components";

/* 
  this component renders a different background & text color depending on the 
  value of the operator prop it receives..this increases it reusability &
  is cleaner than multiple classnames or having different components.
*/

export const ButtonWrapper = styled.div`
  height: 4em;
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  align-items: center;
  font-weight: lighter;
  font-size: 1.4rem;
  background-color: ${({ operator }) => (operator ? "#e0e1e6" : "#fe9241")};
  color: ${({ operator }) => (operator ? "#888" : "#fff")};
  outline: 1px solid #888;
`;
