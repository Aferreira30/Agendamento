import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Roboto', sans-serif;
  }
  body{
    background: ${({theme})=>theme.colors.gray[900]};
    color: ${({theme})=>theme.colors.gray[100]};
    font-size:16px;
  }
button{
  cursor: pointer;
}
`;