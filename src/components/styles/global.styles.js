import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`;

export default GlobalStyles;