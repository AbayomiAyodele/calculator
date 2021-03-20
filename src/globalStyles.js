import styled, { createGlobalStyle } from "styled-components";

// setting up global styles & resets using component style pattern

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
    }
`;

export const CalcWrapper = styled.div`
  min-width: 400px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export default GlobalStyles;
