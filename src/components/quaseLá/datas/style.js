import { styled } from "styled-components";

export const DateList = styled.ul`
width: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-evenly;


li{
  list-style: none;
  width: 492px;
  height: 62px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .contSpanP{
    display: flex;
    gap:12px;
    align-items: center;

    p{
      font-size: 16px;
      line-height: 160%;
      text-align: center;
     padding-bottom:18px ;
    }
    span{
      cursor: pointer;
      display: block;
      width: 26px;
      height: 24px;
      border-radius: 4px;
      background: ${({theme})=>theme.colors.gray[900]};
      
    }
    .fotoChk{
      
    }

  }
  .contHrs{
    display: flex;
    align-items: center;
    gap: 8px;
    input{
      width: 80px;
      padding: 8px 12px;
      border-radius: 6px;
      background: ${({theme})=>theme.colors.gray[900]};
      color: ${({theme})=>theme.colors.gray[100]};
      border: none;
      outline: none;
    }
  }
}
`;
