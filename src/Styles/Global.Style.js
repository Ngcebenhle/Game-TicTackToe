import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${(props) => props.theme.media.mobile}{
      font-size: 11px;
    }
 }
 body{
    background-color: ${(props) => props.theme.colors.primary};
    font-family: "Pacifico", cursive;
  }
`;
