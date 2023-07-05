import { styled } from "styled-components";

export const Container = styled.div`
width:307px;
height:64px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: left;
gap: 16px;
margin-left: -230px;
input{
  width:127px;
  height:38px;
  display: flex;
  padding: 8px 16px;
  border-radius: 6px;
  border: 2px solid ${({theme})=>theme.colors.green[600]};
  color: ${({theme})=>theme.colors.green[600]};
  background: transparent;
  cursor: pointer;
}
label{
  width:140px;
  height:38px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 6px;
  border: 2px solid ${({theme})=>theme.colors.green[600]};
  color: ${({theme})=>theme.colors.green[600]};
  background: transparent;
  font-size: 14px;
  line-height: 160%;
  font-weight: 500;
  cursor: pointer;
}
#imagemPessoa[type='file']{
  display: none;
  margin-right: 16px;
}

img{
  border-radius: 64px;
}
`;